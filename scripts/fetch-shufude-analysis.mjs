#!/usr/bin/env node
/**
 * 采集竞品「舒福德」在慕思智能床项目（392）中的表现，写入 src/data/shufudeAnalysis.json。
 * 供 Page_ShufudeAnalysis 使用。
 *
 * 口径说明：
 *   · 提及率 / 平均提及位次 / 行业影响力：/api/competitors/compare、/api/competitors/influence
 *   · 单平台明细沿用 platform_compare.json 的 7 月单日口径（2026-07-30）
 *   · 引用来源接口不支持按品牌过滤，故「舒福德相关内容」以标题含「舒福德」的引用文章近似统计
 *
 * 用法: node scripts/fetch-shufude-analysis.mjs
 */

import { writeFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const envPath = path.join(ROOT, '.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const t = line.trim();
    if (!t || t.startsWith('#')) continue;
    const key = t.split('=')[0].trim();
    const val = t.split('=').slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
if (!API_BASE || !process.env.GEO_USER || !process.env.GEO_PASS) {
  console.error('缺少 GEO_API_BASE / GEO_USER / GEO_PASS');
  process.exit(1);
}

const PROJECT_ID = 392;
const BRAND = '舒福德';
const RANGE = { start_date: '2026-05-01', end_date: '2026-07-31' };
const LATEST_DATE = '2026-07-30';

let cookie = '';

async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: process.env.GEO_USER, password: process.env.GEO_PASS }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean).map((c) => c.split(';')[0]).join('; ');
  return json.user;
}

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} 失败: ${json.error || res.status}`);
  return json;
}

const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

async function main() {
  const user = await login();
  console.log(`已登录: ${user.name}`);

  const full = { project_id: PROJECT_ID, ...RANGE };

  const [compare, influence] = await Promise.all([
    api('/api/competitors/compare', full),
    api('/api/competitors/influence', full),
  ]);

  // ——— 1. 提及率 / 位次 逐监测日趋势 ———
  const rateDaily = compare.data.rate_daily || [];
  const positionDaily = compare.data.position_daily || [];
  const dates = rateDaily.map((d) => d.date);

  const influenceByDate = {};
  for (const date of dates) {
    const inf = await api('/api/competitors/influence', {
      project_id: PROJECT_ID, start_date: date, end_date: date,
    });
    influenceByDate[date] = (inf.data.list || []).map((b) => ({
      rank: b.rank,
      name: b.display_name || b.brand_name,
      mention_rate: num(b.mention_rate),
      avg_position: num(b.avg_position),
      influence_score: num(b.influence_score),
      is_target: !!b.is_target,
    }));
  }

  const trend = dates.map((date) => {
    const rateRow = rateDaily.find((d) => d.date === date) || {};
    const posRow = positionDaily.find((d) => d.date === date) || {};
    const infList = influenceByDate[date] || [];
    const sfdInf = infList.find((b) => b.name === BRAND);
    const selfInf = infList.find((b) => b.is_target);
    return {
      date,
      brand: {
        mention_rate: num(rateRow[BRAND]),
        avg_position: num(posRow[BRAND]),
        influence_rank: sfdInf?.rank ?? null,
        influence_score: sfdInf?.influence_score ?? null,
      },
      self: {
        mention_rate: num(rateRow[compare.data.target_product]) ?? selfInf?.mention_rate ?? null,
        avg_position: num(posRow[compare.data.target_product]) ?? selfInf?.avg_position ?? null,
        influence_rank: selfInf?.rank ?? null,
        influence_score: selfInf?.influence_score ?? null,
      },
    };
  });

  // ——— 2. 各 AI 平台表现 ———
  // competitors/* 接口不支持 platform_id 过滤（传了也返回全平台聚合值），
  // 故沿用 platform_compare.json 的 7 月单日逐平台口径，与「各AI平台表现」页同源。
  const platformCompare = JSON.parse(
    readFileSync(path.join(ROOT, 'src/data/platform_compare.json'), 'utf-8')
  );
  const SELF = compare.data.target_product; // 慕思智能床
  const platformStats = Object.values(platformCompare.products.smart.platforms).map((pl) => {
    const byName = (list, name) => (list || []).find((x) => x.name === name) || null;
    const pack = (list, name) => {
      const hit = byName(list, name);
      return hit ? { rank: hit.rank ?? null, value: num(hit.value) } : null;
    };
    return {
      platform_id: pl.platform_id,
      platform_name: pl.platform_name,
      platform_logo: pl.platform_logo || null,
      mention_rate: { brand: pack(pl.mention_rate, BRAND), self: pack(pl.mention_rate, SELF) },
      position: { brand: pack(pl.position, BRAND), self: pack(pl.position, SELF) },
      top1_rank: {
        brand: byName(pl.top1, BRAND)?.rank ?? null,
        self: byName(pl.top1, SELF)?.rank ?? null,
      },
    };
  });
  for (const p of platformStats) {
    console.log(
      `  ${p.platform_name}: 舒福德 ${p.mention_rate.brand?.value ?? '-'}% / 位次 ${p.position.brand?.value ?? '-'}` +
        `  |  慕思 ${p.mention_rate.self?.value ?? '-'}% / 位次 ${p.position.self?.value ?? '-'}`
    );
  }

  // ——— 3. 词条覆盖：舒福德在各词条中的名次分布 ———
  const entryDetails = compare.data.entry_brand_details || [];
  const entryRanks = entryDetails.map((e) => {
    const ranks = e.ranks || [];
    const sfd = ranks.find((r) => (r.display_name || r.brand_name) === BRAND);
    const self = ranks.find((r) => r.is_self);
    return {
      entry_name: e.entry_name,
      brand_rank: sfd?.rank ?? null,
      self_rank: self?.rank ?? null,
    };
  });

  // ——— 4. 舒福德相关内容的来源平台分布 ———
  // 引用来源接口不支持品牌过滤，改用「标题含舒福德」的引用文章近似
  const articles = [];
  const pageSize = 100;
  let page = 1;
  let totalPages = 1;
  do {
    const resp = await api('/api/citations/articles', {
      ...full, page, page_size: pageSize, sort_by: 'total_citations', sort_order: 'desc',
    });
    totalPages = resp.data.total_pages || 1;
    articles.push(...(resp.data.list || []));
    page += 1;
  } while (page <= totalPages);
  console.log(`引用文章共 ${articles.length} 篇`);

  const brandArticles = articles.filter((a) => String(a.title || '').includes(BRAND));
  console.log(`标题含「${BRAND}」的文章 ${brandArticles.length} 篇`);

  const sourceMap = new Map();
  for (const a of brandArticles) {
    const key = a.domain || a.platform_name;
    if (!sourceMap.has(key)) {
      sourceMap.set(key, {
        platform_name: a.platform_name,
        domain: a.domain,
        logo_url: a.logo_url,
        article_count: 0,
        citation_count: 0,
      });
    }
    const s = sourceMap.get(key);
    s.article_count += 1;
    s.citation_count += Number(a.total_citations) || 0;
  }
  const brandSources = [...sourceMap.values()]
    .sort((a, b) => b.citation_count - a.citation_count || b.article_count - a.article_count)
    .map((s, i) => ({
      rank: i + 1,
      ...s,
      // 引用效率：单篇平均被引用次数，反映「铺量」还是「打精品」
      citations_per_article: s.article_count ? Number((s.citation_count / s.article_count).toFixed(1)) : null,
    }));

  // 标题形态：榜单/推荐类 vs 测评类，用于说明其内容打法
  const LIST_RE = /推荐|排行|榜|盘点|前十|十大|优选|怎么选|选购/;
  const REVIEW_RE = /测评|实测|评测|对比|体验/;
  const titlePattern = {
    total: brandArticles.length,
    list_type: brandArticles.filter((a) => LIST_RE.test(a.title || '')).length,
    review_type: brandArticles.filter((a) => REVIEW_RE.test(a.title || '')).length,
    brand_in_title_with_year: brandArticles.filter((a) => /2026/.test(a.title || '')).length,
  };

  // 词条覆盖聚合
  const entryStats = (ranks) => {
    const appeared = ranks.filter((e) => e.brand_rank != null);
    return {
      total: ranks.length,
      appeared: appeared.length,
      top3: appeared.filter((e) => e.brand_rank <= 3).length,
      beats_self: appeared.filter((e) => e.self_rank != null && e.brand_rank < e.self_rank).length,
    };
  };

  const brandTopArticles = brandArticles
    .slice(0, 12)
    .map((a, i) => ({
      rank: i + 1,
      title: a.title,
      link_url: a.link_url,
      domain: a.domain,
      platform_name: a.platform_name,
      logo_url: a.logo_url,
      total_citations: Number(a.total_citations) || 0,
    }));

  const out = {
    meta: {
      fetched_at: new Date().toISOString(),
      api_base: API_BASE,
      project_id: PROJECT_ID,
      project_name: '慕思智能床',
      brand: BRAND,
      ...RANGE,
      latest_date: LATEST_DATE,
      source_note: '来源分布基于标题含品牌名的引用文章（接口不支持按品牌过滤引用来源）',
    },
    target_product: compare.data.target_product,
    summary: {
      mention_rate: num((compare.data.mention_rate_ranking || []).find((b) => b.display_name === BRAND)?.mention_rate),
      mention_count: (compare.data.mention_rate_ranking || []).find((b) => b.display_name === BRAND)?.mention_count ?? null,
      influence: (() => {
        const b = (influence.data.list || []).find((x) => (x.display_name || x.brand_name) === BRAND);
        return b ? { rank: b.rank, score: num(b.influence_score), avg_position: num(b.avg_position) } : null;
      })(),
      total_conversations: influence.data.total_conversations ?? null,
    },
    trend,
    influence_by_date: influenceByDate,
    platform_stats: platformStats,
    entry_ranks: entryRanks,
    entry_summary: entryStats(entryRanks),
    brand_sources: brandSources,
    brand_top_articles: brandTopArticles,
    brand_article_total: brandArticles.length,
    all_article_total: articles.length,
    title_pattern: titlePattern,
  };

  const outPath = path.join(ROOT, 'src/data/shufudeAnalysis.json');
  if (!existsSync(path.dirname(outPath))) mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
  console.log(`已写入 ${outPath}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
