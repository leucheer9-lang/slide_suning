// 抽样截图，用于人工确认迁移后的版式。
// 用法：node scripts/shoot-slides.mjs id1 id2 ...
import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';

const BASE = 'http://localhost:5176';
const ids = process.argv.slice(2);
const outDir = path.resolve(import.meta.dirname, '../_shots');
fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
await page.goto(`${BASE}/?export=1`, { waitUntil: 'networkidle2', timeout: 60000 });
await page.waitForFunction('window.__exportApi', { timeout: 30000 });

const order = await page.evaluate(() => window.__exportApi.getOrder());

for (const id of ids) {
  const index = order.indexOf(id);
  if (index === -1) {
    console.log(`未找到页面 id: ${id}`);
    continue;
  }
  await page.evaluate((i) => window.__exportApi.goTo(i), index);
  await new Promise((r) => setTimeout(r, 900));
  const el = await page.$('[data-export-id]');
  const file = path.join(outDir, `${id.replace(/[^\w-]/g, '_')}.png`);
  await el.screenshot({ path: file });
  console.log(`已截图 ${id} -> ${file}`);
}

await browser.close();
