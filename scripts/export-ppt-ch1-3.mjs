import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import PptxGenJS from 'pptxgenjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '..');
const SHOT_DIR = path.join(ROOT, 'export-ppt-ch1-3');
const PPT_PATH = path.join(ROOT, '创维创新谷_品牌调研_GEO体检_KPI.pptx');
const SLIDE_URL = process.env.SLIDE_URL || 'http://localhost:9300';

const START_TITLE = '品牌信息调研及词条策略';
const END_TITLE = '增值服务';

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function safeName(title, index) {
  const cleaned = String(title || 'untitled')
    .replace(/\s+/g, ' ')
    .replace(/[\\/:*?"<>|\n\r]/g, '_')
    .slice(0, 40);
  return `${String(index + 1).padStart(2, '0')}_${cleaned}`;
}

async function launchBrowser() {
  const args = [
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--font-render-hinting=none',
    '--hide-scrollbars',
  ];
  try {
    return await puppeteer.launch({ headless: 'new', channel: 'chrome', args });
  } catch {
    return await puppeteer.launch({
      headless: 'new',
      executablePath:
        process.env.PUPPETEER_EXECUTABLE_PATH ||
        'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      args,
    });
  }
}

async function openToc(page) {
  await page.evaluate(() => {
    const btn = document.querySelector('button[title="打开目录"]');
    btn?.click();
  });
  await sleep(500);
}

async function closeToc(page) {
  await page.evaluate(() => {
    const closeBtn = Array.from(document.querySelectorAll('button')).find(
      (b) => b.textContent.trim() === '✕'
    );
    closeBtn?.click();
  });
  await sleep(400);
}

async function readToc(page) {
  return page.evaluate(() =>
    Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]')).map(
      (el, index) => ({
        index,
        title: (el.querySelector('.truncate')?.textContent || '').replace(/\s+/g, ' ').trim(),
      })
    )
  );
}

async function jumpTo(page, index) {
  await openToc(page);
  await page.evaluate((idx) => {
    const els = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
    els[idx]?.click();
  }, index);
  await sleep(300);
  await closeToc(page);
}

async function waitForSlideReady(page) {
  await page.evaluate(() => document.fonts.ready);
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
  await sleep(800);
}

async function screenshotSlide(page, filePath) {
  const slide = await page.$('div[style*="1920px"]');
  const opts = { path: filePath, type: 'jpeg', quality: 90 };
  if (slide) {
    await slide.screenshot(opts);
  } else {
    await page.screenshot(opts);
  }
}

async function capture() {
  fs.rmSync(SHOT_DIR, { recursive: true, force: true });
  fs.mkdirSync(SHOT_DIR, { recursive: true });

  const browser = await launchBrowser();
  const page = await browser.newPage();
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 2 });

  console.log(`打开 ${SLIDE_URL} ...`);
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 60000 });
  await page.evaluate(() => document.fonts.ready);
  await sleep(2500);

  await page.addStyleTag({
    content: `
      button[title="打开目录"],
      button[title="全屏演示"],
      .pointer-events-none.opacity-20 { display: none !important; }
    `,
  });

  await openToc(page);
  const items = await readToc(page);
  await closeToc(page);

  const start = items.findIndex((it) => it.title.includes(START_TITLE));
  const end = items.findLastIndex((it) => it.title.includes(END_TITLE));
  if (start < 0 || end < 0 || end < start) {
    console.error('目录项预览:', items.map((it) => `${it.index}:${it.title}`).join('\n'));
    throw new Error(`未找到导出区间：start=${start} end=${end}`);
  }

  const range = items.slice(start, end + 1);
  fs.writeFileSync(
    path.join(SHOT_DIR, '_toc.json'),
    JSON.stringify({ start, end, range }, null, 2),
    'utf-8'
  );
  console.log(`总页 ${items.length}，导出 ${range.length} 页（${start + 1}–${end + 1}）`);

  await jumpTo(page, start);
  await waitForSlideReady(page);

  const files = [];
  for (let i = 0; i < range.length; i++) {
    const item = range[i];
    await waitForSlideReady(page);
    const file = path.join(SHOT_DIR, `${safeName(item.title, i)}.jpg`);
    await screenshotSlide(page, file);
    files.push({ file, title: item.title });
    console.log(`[${i + 1}/${range.length}] ${item.title}`);

    if (i < range.length - 1) {
      await page.keyboard.press('ArrowRight');
      await sleep(700);
    }
  }

  await browser.close();
  return files;
}

async function buildPpt(files) {
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'WIDE_16x9', width: 13.333, height: 7.5 });
  pptx.layout = 'WIDE_16x9';
  pptx.title = '创维创新谷 GEO规划方案 · 品牌调研 / GEO体检 / KPI';
  pptx.author = 'GEO索引未来';

  for (const item of files) {
    const slide = pptx.addSlide();
    slide.addImage({ path: item.file, x: 0, y: 0, w: 13.333, h: 7.5 });
    slide.addNotes(item.title);
  }

  await pptx.writeFile({ fileName: PPT_PATH });
  console.log(`\nPPT 已生成：${PPT_PATH}`);
}

const files = await capture();
await buildPpt(files);
console.log(`完成，共 ${files.length} 页`);
