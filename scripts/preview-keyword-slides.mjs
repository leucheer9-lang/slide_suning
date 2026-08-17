import fs from 'node:fs';
import path from 'node:path';
import puppeteer from 'puppeteer';

const OUT_DIR = path.resolve('preview-keywords');
const TARGET_NAMES = new Set(['词条穷举及清洗', '词条分类及拓展', '词条确定']);

fs.mkdirSync(OUT_DIR, { recursive: true });

async function hideChrome(page) {
  await page.evaluate(() => {
    document.querySelectorAll('button').forEach((btn) => {
      if (
        btn.title === '打开目录' ||
        btn.title === '全屏演示' ||
        btn.innerHTML.includes('w-5 h-4 flex')
      ) {
        btn.style.display = 'none';
      }
    });
    document.querySelectorAll('.pointer-events-none.opacity-20').forEach((el) => {
      el.style.display = 'none';
    });
  });
}

async function run() {
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: { width: 1920, height: 1080, deviceScaleFactor: 1 },
    args: ['--window-size=1920,1080'],
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:5176/?s=0', { waitUntil: 'networkidle0', timeout: 60000 });

  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('button')].find((b) => b.title === '打开目录');
    btn?.click();
  });
  await new Promise((r) => setTimeout(r, 400));

  const slides = await page.evaluate(() =>
    [...document.querySelectorAll('nav span.truncate')].map((el, i) => ({
      index: i,
      name: el.textContent.trim(),
    })),
  );

  await page.evaluate(() => {
    const close = [...document.querySelectorAll('button')].find((b) => b.textContent.includes('✕'));
    close?.click();
  });

  const targets = slides.filter((s) => TARGET_NAMES.has(s.name));
  console.log(JSON.stringify(targets, null, 2));

  const files = [];
  for (const slide of targets) {
    await page.goto(`http://127.0.0.1:5176/?s=${slide.index}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });
    await new Promise((r) => setTimeout(r, 600));
    await hideChrome(page);

    const handle = await page.evaluateHandle(() => {
      const wrapper = document.querySelector('.origin-center');
      if (wrapper) {
        wrapper.style.transform = 'none';
        wrapper.style.zoom = '1';
        return wrapper;
      }
      return document.body;
    });

    const seq = String(files.length + 1).padStart(2, '0');
    const fileName = `${seq}_s${slide.index}_${slide.name}.png`;
    const filePath = path.join(OUT_DIR, fileName);
    await handle.asElement().screenshot({ path: filePath, type: 'png' });
    files.push(fileName);
    console.log('saved', fileName);
  }

  await browser.close();
  console.log('DONE', files.length);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
