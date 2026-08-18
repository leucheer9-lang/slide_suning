import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.join(__dirname, '..', 'export-screenshots-new');
const URL = process.env.SLIDE_URL || 'http://localhost:9300';

const TARGETS = ['品牌基础信息'];

fs.mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  headless: 'new',
  executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 1 });
await page.goto(URL, { waitUntil: 'networkidle2', timeout: 60000 });
await page.evaluate(() => document.fonts.ready);
await new Promise((r) => setTimeout(r, 3000));

await page.click('button[title="打开目录"]');
await new Promise((r) => setTimeout(r, 600));

const items = await page.evaluate(() =>
  Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]')).map((el, index) => ({
    index,
    title: el.querySelector('.truncate')?.textContent ?? '',
  }))
);

fs.writeFileSync(path.join(OUT, '_toc.json'), JSON.stringify(items, null, 2), 'utf-8');

const picked = items.filter((it) => TARGETS.some((t) => it.title.includes(t)));
console.log(`总幻灯片 ${items.length} 张，命中目标 ${picked.length} 张`);

for (const [n, item] of picked.entries()) {
  await page.evaluate((idx) => {
    const els = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
    els[idx]?.click();
  }, item.index);
  await new Promise((r) => setTimeout(r, 900));

  // 关闭目录抽屉，避免遮挡
  await page.keyboard.press('Escape').catch(() => {});
  await page.evaluate(() => {
    const closeBtn = Array.from(document.querySelectorAll('button')).find((b) => b.textContent.trim() === '✕');
    closeBtn?.click();
  });
  await new Promise((r) => setTimeout(r, 700));

  const slide = await page.$('div[style*="1920px"]');
  const file = path.join(OUT, `${String(n + 1).padStart(2, '0')}_${item.title.replace(/[\\/:*?"<>|]/g, '_')}.png`);
  if (slide) {
    await slide.screenshot({ path: file });
  } else {
    await page.screenshot({ path: file });
  }
  console.log(`已截图: ${item.title}`);

  await page.click('button[title="打开目录"]');
  await new Promise((r) => setTimeout(r, 500));
}

await browser.close();
console.log(`完成，输出目录: ${OUT}`);
