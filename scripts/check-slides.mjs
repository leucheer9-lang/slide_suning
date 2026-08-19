// 逐页加载全部幻灯片，收集运行时报错与资源 404，用于迁移后的整体体检。
// 用法：node scripts/check-slides.mjs [baseUrl]
import puppeteer from 'puppeteer';

const BASE = process.argv[2] || 'http://localhost:5176';

const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1600, height: 900 });

const errors = [];
const missing = new Map();
let currentIndex = -1;

page.on('pageerror', (err) => errors.push({ index: currentIndex, message: String(err) }));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push({ index: currentIndex, message: msg.text() });
});
page.on('response', (res) => {
  if (res.status() === 404) {
    const url = res.url().replace(BASE, '');
    if (!missing.has(url)) missing.set(url, currentIndex);
  }
});

await page.goto(`${BASE}/?export=1`, { waitUntil: 'networkidle2', timeout: 60000 });
await page.waitForFunction('window.__exportApi', { timeout: 30000 });

const order = await page.evaluate(() => window.__exportApi.getOrder());
console.log(`共 ${order.length} 页，开始逐页检查...`);

for (let i = 0; i < order.length; i++) {
  currentIndex = i;
  await page.evaluate((idx) => window.__exportApi.goTo(idx), i);
  await new Promise((r) => setTimeout(r, 120));
}

await new Promise((r) => setTimeout(r, 800));
await browser.close();

console.log(`\n=== 运行时报错 ${errors.length} 条`);
for (const e of errors.slice(0, 40)) {
  console.log(`  [第${e.index + 1}页] ${e.message.split('\n')[0]}`);
}

console.log(`\n=== 缺失资源 ${missing.size} 个`);
for (const [url, idx] of missing) console.log(`  [第${idx + 1}页] ${url}`);

console.log('\n页面 id 对照（前 12 条）:', order.slice(0, 12).join(', '));
