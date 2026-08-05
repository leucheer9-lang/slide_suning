#!/usr/bin/env node
/**
 * 采集「豆包引用来源结构变化」数据，写入 src/data/doubaoCitationShift.json。
 * 供 Page_DoubaoRevampChanges 页使用。
 *
 * 用法:
 *   node scripts/fetch-doubao-citation-shift.mjs              # 默认三产品合计 182+181+239
 *   node scripts/fetch-doubao-citation-shift.mjs 239          # 单项目
 *   node scripts/fetch-doubao-citation-shift.mjs 182,181,239  # 多项目合计
 *
 * 多项目口径：各项目引用条数加总，share = 该来源合计引用 / 豆包合计总引用。
 *
 * ⚠ GEO ONE（geotopone）项目 ID（jiming 账号）：
 *   182 慕思智能床 / 181 慕思AI床垫 / 239 慕思床垫
 *   （词条明细用的 392/391/393 是另一套数据系统 ID，不能混用。）
 *
 * ⚠ 接口口径（踩坑记录）：
 *   · 按 AI 平台过滤引用来源，参数名是 platform_ids（复数）。platform_id / ai_platform_id 会被静默忽略，
 *     返回的是全平台合计数据，看起来「有响应」但数字是错的。
 *   · /api/citations/stats 的 platform_stats 只给 Top5；要完整来源榜必须用 /api/citations/platforms（带分页）。
 *   · 来源项里的 share = 该来源引用条数 / 该平台总引用条数；citation_rate = 引用了该来源的对话占比，两者别混用。
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const key = trimmed.split('=')[0].trim();
    const val = trimmed.split('=').slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
const USERNAME = process.env.GEO_USER;
const PASSWORD = process.env.GEO_PASS;
if (!API_BASE || !USERNAME || !PASSWORD) {
  console.error('缺少环境变量：GEO_API_BASE / GEO_USER / GEO_PASS（可写在根目录 .env）。');
  process.exit(1);
}

// 默认：慕思智能床 + 慕思AI床垫 + 慕思床垫（GEO ONE / geotopone）
const DEFAULT_PROJECT_IDS = [182, 181, 239];
const PROJECT_IDS = (() => {
  const arg = process.argv[2];
  if (!arg) return DEFAULT_PROJECT_IDS;
  const ids = arg.split(',').map((s) => Number(s.trim())).filter((n) => Number.isFinite(n) && n > 0);
  return ids.length ? ids : DEFAULT_PROJECT_IDS;
})();

const DOUBAO_NAME = '豆包';
const DOUYIN_DOMAIN = 'iesdouyin.com';
const BYTEDANCE_DOMAINS = ['iesdouyin.com', 'douyin.com', 'toutiao.com', 'baike.com'];

const MONTHS = [
  { label: '6月', start_date: '2026-06-01', end_date: '2026-06-30' },
  { label: '7月', start_date: '2026-07-01', end_date: '2026-07-31' },
];

let cookie = '';

async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0])
    .join('; ');
  return json.user;
}

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} 请求失败: ${json.error || res.status}`);
  return json;
}

const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));
const round1 = (v) => Number(Number(v).toFixed(1));

/** 拉取某项目某平台在某区间的完整引用来源榜 */
async function fetchSources(projectId, platformId, range) {
  const r = await api('/api/citations/platforms', {
    project_id: projectId,
    ...range,
    platform_ids: platformId,
    page: 1,
    page_size: 200,
  });
  return {
    total_conversations: r.data.total_conversations || 0,
    citation_rate: num(r.data.citation_rate),
    total_citations: r.data.total_citations || 0,
    source_count: r.data.total || 0,
    list: (r.data.list || []).map((x) => ({
      name: x.platform_name,
      domain: x.domain,
      logo_url: x.logo_url,
      citation_count: x.citation_count || 0,
      share: num(x.share),
      citation_rate: num(x.citation_rate),
    })),
  };
}

/** 多项目来源榜加总，并重算 share */
function mergeSourceLists(parts) {
  const byDomain = new Map();
  let total_citations = 0;
  let total_conversations = 0;
  let citedConversations = 0; // 用于估算 citation_rate

  for (const s of parts) {
    total_citations += s.total_citations || 0;
    total_conversations += s.total_conversations || 0;
    if (s.citation_rate != null && s.total_conversations) {
      citedConversations += (s.citation_rate / 100) * s.total_conversations;
    }
    for (const x of s.list) {
      const prev = byDomain.get(x.domain);
      if (!prev) {
        byDomain.set(x.domain, {
          name: x.name,
          domain: x.domain,
          logo_url: x.logo_url,
          citation_count: x.citation_count,
          // 对话覆盖率按各项目加权近似
          _citedConv: (x.citation_rate != null && s.total_conversations)
            ? (x.citation_rate / 100) * s.total_conversations
            : 0,
          _conv: s.total_conversations || 0,
        });
      } else {
        prev.citation_count += x.citation_count;
        if (!prev.logo_url && x.logo_url) prev.logo_url = x.logo_url;
        if (x.citation_rate != null && s.total_conversations) {
          prev._citedConv += (x.citation_rate / 100) * s.total_conversations;
          prev._conv += s.total_conversations;
        }
      }
    }
  }

  const list = [...byDomain.values()]
    .map((x) => {
      const share = total_citations
        ? round1((x.citation_count / total_citations) * 100)
        : 0;
      const citation_rate = x._conv
        ? round1((x._citedConv / x._conv) * 100)
        : 0;
      return {
        name: x.name,
        domain: x.domain,
        logo_url: x.logo_url,
        citation_count: x.citation_count,
        share,
        citation_rate,
      };
    })
    .sort((a, b) => b.citation_count - a.citation_count);

  return {
    total_conversations,
    total_citations,
    citation_rate: total_conversations
      ? round1((citedConversations / total_conversations) * 100)
      : 0,
    source_count: list.length,
    list,
  };
}

async function fetchMergedSources(projectIds, platformId, range) {
  const parts = [];
  for (const pid of projectIds) {
    parts.push(await fetchSources(pid, platformId, range));
  }
  return mergeSourceLists(parts);
}

async function fetchMergedArticles(projectIds, platformId, range) {
  const byKey = new Map();
  for (const pid of projectIds) {
    const r = await api('/api/citations/articles', {
      project_id: pid,
      start_date: range.start_date,
      end_date: range.end_date,
      platform_ids: platformId,
      page: 1,
      page_size: 30,
      sort_by: 'total_citations',
      sort_order: 'desc',
    });
    for (const a of r.data.list || []) {
      const key = a.link_url || `${a.domain}|${a.title}`;
      const prev = byKey.get(key);
      if (!prev) {
        byKey.set(key, {
          title: a.title,
          link_url: a.link_url,
          domain: a.domain,
          platform_name: a.platform_name,
          logo_url: a.logo_url,
          total_citations: a.total_citations || 0,
          avg_citations: num(a.avg_citations),
          has_target_product: !!a.has_target_product,
        });
      } else {
        prev.total_citations += a.total_citations || 0;
        if (a.has_target_product) prev.has_target_product = true;
        if (!prev.logo_url && a.logo_url) prev.logo_url = a.logo_url;
      }
    }
  }
  return [...byKey.values()]
    .sort((a, b) => b.total_citations - a.total_citations)
    .slice(0, 10)
    .map((a, i) => ({ rank: i + 1, ...a }));
}

async function main() {
  const user = await login();
  console.log(`已登录: ${user.name} (${user.company_name})`);

  const projects = (await api('/api/projects')).data;
  const selected = PROJECT_IDS.map((id) => {
    const p = projects.find((x) => x.id === id);
    if (!p) throw new Error(`未找到项目 ${id}`);
    return p;
  });
  const project_name = selected.map((p) => p.project_name).join('、');
  const target_product = selected.map((p) => p.target_product).join('、');
  console.log(`项目: ${PROJECT_IDS.join('+')} → ${project_name}`);

  // 平台列表以第一个项目为准（各项目平台 id 一致）
  const platforms = (await api('/api/platforms', { project_id: PROJECT_IDS[0] })).data;
  const doubao = platforms.find((p) => p.name === DOUBAO_NAME);
  if (!doubao) {
    console.error(`未找到平台「${DOUBAO_NAME}」`);
    process.exit(1);
  }

  // ——— 月度对比（豆包）———
  const months = [];
  const fullLists = {};
  for (const m of MONTHS) {
    const s = await fetchMergedSources(PROJECT_IDS, doubao.id, m);
    fullLists[m.label] = s.list;
    const douyin = s.list.find((x) => x.domain === DOUYIN_DOMAIN);
    const byteCount = s.list
      .filter((x) => BYTEDANCE_DOMAINS.includes(x.domain))
      .reduce((sum, x) => sum + Number(x.citation_count || 0), 0);
    months.push({
      ...m,
      total_conversations: s.total_conversations,
      total_citations: s.total_citations,
      citation_rate: s.citation_rate,
      source_count: s.source_count,
      douyin_citations: douyin?.citation_count ?? 0,
      douyin_share: douyin?.share ?? 0,
      douyin_citation_rate: douyin?.citation_rate ?? 0,
      bytedance_citations: byteCount,
      bytedance_share: s.total_citations
        ? round1((byteCount / s.total_citations) * 100)
        : 0,
      top_sources: s.list.slice(0, 10).map((x, i) => ({ rank: i + 1, ...x })),
    });
    console.log(
      `  ${m.label}: 引用${s.total_citations} 抖音${douyin?.citation_count ?? 0}(${douyin?.share ?? 0}%) 字节系${byteCount}`
    );
  }

  // ——— 来源结构位移 ———
  const firstLabel = MONTHS[0].label;
  const lastLabel = MONTHS[MONTHS.length - 1].label;
  const focusDomains = new Set([
    ...fullLists[firstLabel].slice(0, 10).map((x) => x.domain),
    ...fullLists[lastLabel].slice(0, 10).map((x) => x.domain),
  ]);
  const source_shift = [...focusDomains]
    .map((domain) => {
      const a = fullLists[firstLabel].find((x) => x.domain === domain);
      const b = fullLists[lastLabel].find((x) => x.domain === domain);
      const from = a?.share ?? 0;
      const to = b?.share ?? 0;
      return {
        name: b?.name || a?.name || domain,
        domain,
        from,
        to,
        delta: round1(to - from),
      };
    })
    .sort((x, y) => Math.abs(y.delta) - Math.abs(x.delta));

  // ——— 逐日抖音占比（多项目日期并集）———
  const dateSet = new Set();
  for (const pid of PROJECT_IDS) {
    const dates = (await api(`/api/projects/${pid}/data-dates`)).data.dates || [];
    for (const d of dates) {
      if (d >= MONTHS[0].start_date && d <= MONTHS[MONTHS.length - 1].end_date) {
        dateSet.add(d);
      }
    }
  }
  const allDates = [...dateSet].sort();

  const daily = [];
  for (const date of allDates) {
    const s = await fetchMergedSources(PROJECT_IDS, doubao.id, {
      start_date: date,
      end_date: date,
    });
    if (!s.total_citations) continue;
    const douyin = s.list.find((x) => x.domain === DOUYIN_DOMAIN);
    daily.push({
      date,
      total_citations: s.total_citations,
      douyin_citations: douyin?.citation_count ?? 0,
      douyin_share: douyin?.share ?? 0,
    });
  }

  const breakpoint =
    daily.find((d, i) => {
      if (d.douyin_share < 50) return false;
      const after = daily.slice(i, i + 5);
      return after.length > 0 && after.every((x) => x.douyin_share >= 50);
    })?.date ?? null;

  // ——— 其它 AI 平台同期抖音占比 ———
  const otherPlatforms = [];
  for (const p of platforms) {
    const row = { platform_id: p.id, platform_name: p.name, logo_url: p.url, months: {} };
    for (const m of MONTHS) {
      const s = await fetchMergedSources(PROJECT_IDS, p.id, m);
      const douyin = s.list.find((x) => x.domain === DOUYIN_DOMAIN);
      row.months[m.label] = douyin?.share ?? 0;
    }
    otherPlatforms.push(row);
  }

  // ——— 各月豆包引用文章 Top10（三产品合并）———
  const article_tops = {};
  for (const m of MONTHS) {
    article_tops[m.label] = await fetchMergedArticles(PROJECT_IDS, doubao.id, m);
    console.log(`  ${m.label} 文章Top1: ${article_tops[m.label][0]?.title?.slice(0, 40) || '(无)'} (${article_tops[m.label][0]?.total_citations || 0})`);
  }

  const report = {
    meta: {
      fetched_at: new Date().toISOString(),
      api_base: API_BASE,
      project_ids: PROJECT_IDS,
      project_id: PROJECT_IDS.length === 1 ? PROJECT_IDS[0] : null,
      project_name,
      target_product,
      aggregation: PROJECT_IDS.length > 1 ? 'sum_citations_recalc_share' : 'single',
      platform_id: doubao.id,
      platform_name: doubao.name,
      platform_logo: doubao.url,
      metric_note:
        PROJECT_IDS.length > 1
          ? '三产品合计：引用条数加总；share = 该来源合计引用 / 豆包合计总引用'
          : 'share = 该来源引用条数 / 豆包该区间总引用条数',
      articles_fetched_at: new Date().toISOString(),
    },
    months,
    source_shift,
    daily,
    breakpoint,
    platform_comparison: otherPlatforms,
    article_tops,
  };

  const outPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/data/doubaoCitationShift.json'
  );
  if (!existsSync(path.dirname(outPath))) mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`已写入 ${outPath}`);
  console.log(`逐日 ${daily.length} 天 / 跃升点 ${breakpoint || '未识别'}`);
  console.log(
    `抖音份额: ${months[0].douyin_share}% → ${months[1].douyin_share}% (${months[0].douyin_citations}/${months[0].total_citations} → ${months[1].douyin_citations}/${months[1].total_citations})`
  );
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
