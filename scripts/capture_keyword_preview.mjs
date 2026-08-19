import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots/keyword-preview');
const SLIDE_URL = process.env.SLIDE_URL || 'http://localhost:9300';
const TARGET_NAMES = [
  '数据导入分析',
  '词条生成逻辑',
  '词条打标逻辑',
  '词条拓展逻辑',
  '词条穷举及清洗',
  '词条分类及拓展',
  '词条确定',
];

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: 'new',
    channel: 'chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 2 });
  console.log(`打开 ${SLIDE_URL}`);
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 2000));

  await page.click('button[title="打开目录"]');
  await new Promise((r) => setTimeout(r, 700));

  const items = await page.$$eval('nav.flex-grow .rounded-xl', (els) =>
    els.map((el, i) => {
      const lines = (el.innerText || '').split('\n').map((s) => s.trim()).filter(Boolean);
      const name = lines.find((s) => !/^\d+$/.test(s)) || lines[lines.length - 1] || '';
      return { i, name };
    })
  );
  console.log('目录前40条', items.slice(0, 40).map((x) => `${x.i}:${x.name}`).join(' | '));

  const targets = [];
  const counts = {};
  for (const item of items) {
    const hit = TARGET_NAMES.find((n) => item.name.includes(n));
    if (!hit) continue;
    counts[hit] = (counts[hit] || 0) + 1;
    targets.push({ ...item, label: hit, seq: counts[hit] });
  }

  console.log('命中页：', targets.map((t) => `${t.i + 1} ${t.label} #${t.seq}`).join('\n'));
  if (!targets.length) throw new Error('目录里没找到词条推导页');

  const closeMenu = async () => {
    const btn = await page.$('button.text-zinc-500');
    if (btn) await btn.click();
    await new Promise((r) => setTimeout(r, 400));
  };

  const openMenu = async () => {
    await page.click('button[title="打开目录"]');
    await new Promise((r) => setTimeout(r, 500));
  };

  await closeMenu();

  const written = [];
  for (const t of targets) {
    await openMenu();
    await page.$$eval(
      'nav.flex-grow .rounded-xl',
      (els, i) => els[i]?.click(),
      t.i
    );
    await new Promise((r) => setTimeout(r, 300));
    await closeMenu();

    await page.evaluate(() =>
      Promise.all(
        [...document.images].map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((r) => {
                img.onload = r;
                img.onerror = r;
              })
        )
      )
    );
    await new Promise((r) => setTimeout(r, 600));

    const suffix = counts[t.label] > 1 ? `-${t.seq}` : '';
    const filename = `${String(written.length + 1).padStart(2, '0')}-${t.label}${suffix}.png`;
    const outputPath = path.join(OUTPUT_DIR, filename);

    const slideEl = await page.$('.bg-white.overflow-hidden');
    if (slideEl) {
      await slideEl.screenshot({ path: outputPath });
    } else {
      await page.screenshot({ path: outputPath });
    }
    written.push(outputPath);
    console.log(`截图 ${filename}`);
  }

  await browser.close();
  console.log('OK', written.length);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
