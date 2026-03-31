import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, '../screenshots');
const SLIDE_URL = 'http://localhost:5176';

async function main() {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();
  // 1984×1144 → 留 64px 边距，让 slide zoom = 1.0（原始 1920×1080）
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 1 });

  console.log(`正在打开 ${SLIDE_URL}...`);
  await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 20000 });
  await new Promise((r) => setTimeout(r, 2500));

  // ① 打开目录面板，从 DOM 中读取真实总页数
  await page.click('button[title="打开目录"]');
  await new Promise((r) => setTimeout(r, 600));

  const totalSlides = await page.$$eval('nav.flex-grow [draggable]', (els) => els.length);
  console.log(`✅ 检测到总页数：${totalSlides}`);

  // ② 关闭目录面板，回到第一页（按住左键回到开头）
  const closeBtn = await page.$('button.text-zinc-500');
  if (closeBtn) await closeBtn.click();
  await new Promise((r) => setTimeout(r, 400));

  // 回到第一页
  for (let i = 0; i < totalSlides; i++) {
    await page.keyboard.press('ArrowLeft');
  }
  await new Promise((r) => setTimeout(r, 500));

  // ③ 逐页截图
  for (let i = 0; i < totalSlides; i++) {
    const outputPath = path.join(OUTPUT_DIR, `slide_${String(i + 1).padStart(3, '0')}.png`);

    const slideEl = await page.$('.bg-white.overflow-hidden');
    if (slideEl) {
      await slideEl.screenshot({ path: outputPath });
    } else {
      await page.screenshot({ path: outputPath });
    }

    console.log(`[${i + 1}/${totalSlides}] 截图 → ${path.basename(outputPath)}`);

    if (i < totalSlides - 1) {
      await page.keyboard.press('ArrowRight');
      await new Promise((r) => setTimeout(r, 900));
    }
  }

  await browser.close();
  console.log(`\n✅ 全部 ${totalSlides} 张截图已保存至 screenshots/`);
}

main().catch((err) => {
  console.error('截图失败:', err);
  process.exit(1);
});
