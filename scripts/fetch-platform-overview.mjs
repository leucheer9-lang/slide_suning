#!/usr/bin/env node
/**
 * 采集三个产品在各 AI 平台的提及率总览，写入 src/data/platformOverview.json。
 * 供 Page_PlatformOverview 页使用。
 *
 * 用法:
 *   node scripts/fetch-platform-overview.mjs [--date YYYY-MM-DD]
 *
 * ⚠ 口径：提及率 = /api/conversations/stats 的 platform_stats[].brand_mention_rate
 *   （与「核心数据总览」「各AI平台表现」同源，不要用 competitors/compare 的字段）。
 *   默认取 2026-07-30 单日，与 platform_compare.json / musiJulyReport.json 的 7 月口径一致。
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

const args = process.argv.slice(2);
const getFlag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};
const DATE = getFlag('date') || '2026-07-30';

const PRODUCTS = [
  { key: 'smart', project_id: 392, name: '慕思智能床' },
  { key: 'ai', project_id: 391, name: '慕思AI床垫' },
  { key: 'mattress', project_id: 393, name: '慕思床垫' },
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

async function main() {
  const user = await login();
  console.log(`已登录: ${user.name} (${user.company_name})`);
  console.log(`取数日期: ${DATE}`);

  const products = {};
  for (const p of PRODUCTS) {
    const range = { project_id: p.project_id, start_date: DATE, end_date: DATE };
    const [platforms, stats] = await Promise.all([
      api('/api/platforms', { project_id: p.project_id }),
      api('/api/conversations/stats', range),
    ]);
    const platformMap = Object.fromEntries(platforms.data.map((x) => [x.id, x]));

    const list = (stats.data.platform_stats || [])
      .map((x) => ({
        platform_id: x.platform_id,
        platform_name: platformMap[x.platform_id]?.name || `平台${x.platform_id}`,
        platform_logo: platformMap[x.platform_id]?.url || null,
        mention_rate: num(x.brand_mention_rate),
        avg_position: num(x.avg_position),
      }))
      .sort((a, b) => a.platform_id - b.platform_id);

    products[p.key] = {
      project_id: p.project_id,
      name: p.name,
      overall_mention_rate: num(stats.data.brand_mention_rate),
      platforms: list,
    };

    console.log(
      `  ${p.name}（整体 ${stats.data.brand_mention_rate}%）: ` +
        list.map((x) => `${x.platform_name} ${x.mention_rate}%`).join(' / ')
    );
  }

  const out = {
    meta: {
      fetched_at: new Date().toISOString(),
      api_base: API_BASE,
      date: DATE,
      label: '2026年7月',
      metric_note: '提及率 = conversations/stats.platform_stats[].brand_mention_rate',
    },
    products,
  };

  const outPath = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    '../src/data/platformOverview.json'
  );
  if (!existsSync(path.dirname(outPath))) mkdirSync(path.dirname(outPath), { recursive: true });
  writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
  console.log(`已写入 ${outPath}`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
