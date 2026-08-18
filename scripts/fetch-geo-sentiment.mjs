#!/usr/bin/env node
/**
 * 拉取 GEO ONE 正负面数据，按 project_id 合并写入 src/data/geoSentiment.json。
 *
 * 用法:
 *   node scripts/fetch-geo-sentiment.mjs <project_id> [<project_id> ...] [--start YYYY-MM-DD] [--end YYYY-MM-DD]
 *
 * 环境变量同 fetch-geo-report.mjs（GEO_API_BASE / GEO_USER / GEO_PASS，可写在根目录 .env）。
 * 默认日期区间取项目 /data-dates 的首尾，与 fetch-geo-report.mjs 保持一致。
 */

import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const envPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../.env');
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, 'utf-8').split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const parts = trimmed.split('=');
    const key = parts[0].trim();
    const val = parts.slice(1).join('=').trim().replace(/^['"]|['"]$/g, '');
    if (key && val && !process.env[key]) process.env[key] = val;
  }
}

const API_BASE = process.env.GEO_API_BASE;
const USERNAME = process.env.GEO_USER;
const PASSWORD = process.env.GEO_PASS;
if (!API_BASE || !USERNAME || !PASSWORD) {
  console.error('缺少环境变量：GEO_API_BASE / GEO_USER / GEO_PASS。');
  process.exit(1);
}

const args = process.argv.slice(2);
const projectIds = args.filter((a) => /^\d+$/.test(a)).map(Number);
if (!projectIds.length) {
  console.error('用法: node scripts/fetch-geo-sentiment.mjs <project_id> [<project_id> ...]');
  process.exit(1);
}
const getFlag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};

let cookie = '';

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

const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));

async function main() {
  const user = await login();
  console.log(`已登录: ${user.name} (${user.company_name})`);

  const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/geoSentiment.json');
  const out = existsSync(outPath) ? JSON.parse(readFileSync(outPath, 'utf-8')) : {};

  for (const projectId of projectIds) {
    let dates = [];
    try {
      dates = [...((await api(`/api/projects/${projectId}/data-dates`)).data.dates || [])].sort();
    } catch { /* 老版本后端无此接口 */ }
    const range = {
      project_id: projectId,
      start_date: getFlag('start') || dates[0],
      end_date: getFlag('end') || dates[dates.length - 1],
    };

    const [stats, negatives] = await Promise.all([
      api('/api/sentiments/stats', range),
      api('/api/sentiments/negative-answers', { ...range, page: 1, page_size: 100 }),
    ]);

    out[String(projectId)] = {
      meta: { fetched_at: new Date().toISOString(), project_id: projectId, start_date: range.start_date, end_date: range.end_date },
      stats: {
        positive_rate: num(stats.data.positive_rate),
        positive_percentage: num(stats.data.positive_percentage),
        negative_percentage: num(stats.data.negative_percentage),
        positive_keywords: stats.data.positive_keywords || [],
        negative_keywords: stats.data.negative_keywords || [],
        daily_stats: stats.data.daily_stats || [],
      },
      negatives: {
        total: negatives.data.total,
        page: negatives.data.page,
        page_size: negatives.data.page_size,
        total_pages: negatives.data.total_pages,
        list: negatives.data.list || [],
      },
    };
    console.log(`项目 ${projectId}（${range.start_date} ~ ${range.end_date}）：正面 ${stats.data.positive_percentage}% / 负面回答 ${negatives.data.total} 条`);
  }

  writeFileSync(outPath, JSON.stringify(out, null, 2), 'utf-8');
  console.log(`已写入 ${outPath}（含项目 ${Object.keys(out).join(', ')}）`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
