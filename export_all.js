import puppeteer from 'puppeteer';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'export-screenshots-all');
const COVER_DIR = path.join(OUTPUT_DIR, 'video-covers');
const OUTPUT_PPT = path.join(__dirname, '创维创新谷_GEO规划方案.pptx');
const SLIDE_URL = process.env.SLIDE_URL || 'http://localhost:5199';
const PUBLIC_VIDEOS = path.join(__dirname, 'public', 'videos');

const PPT_W = 10;
const PPT_H = 5.625;

const TITLE_VIDEO_FALLBACK = {
  '内容Agent系统': 'content-agent-demo.mp4',
  'Geo One数据系统演示': 'geo-one-demo.mp4',
  'GEO ONE数据系统后台运行录屏演示': 'geo-monitor-demo.mp4',
  '内容撰写Agent演示': 'content-agent-demo.mp4',
  '用户真评系统演示': 'dazhong-zhenping-demo.mp4',
};

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

function fallbackVideoByTitle(title) {
  const raw = String(title || '').replace(/^\d+/, '').trim();
  if (TITLE_VIDEO_FALLBACK[raw]) return TITLE_VIDEO_FALLBACK[raw];
  if (TITLE_VIDEO_FALLBACK[title]) return TITLE_VIDEO_FALLBACK[title];
  for (const [key, file] of Object.entries(TITLE_VIDEO_FALLBACK)) {
    if (String(title).includes(key)) return file;
  }
  return null;
}

function resolveVideoPath(src, title) {
  if (src) {
    try {
      const pathname = decodeURIComponent(new URL(src, SLIDE_URL).pathname);
      const local = path.join(__dirname, 'public', pathname.replace(/^\//, '').replaceAll('/', path.sep));
      if (fs.existsSync(local)) return local;
    } catch {
      /* ignore */
    }
    const base = path.basename(String(src).split('?')[0]);
    const byName = path.join(PUBLIC_VIDEOS, base);
    if (base && fs.existsSync(byName)) return byName;
  }
  const fallback = fallbackVideoByTitle(title);
  if (fallback) {
    const p = path.join(PUBLIC_VIDEOS, fallback);
    if (fs.existsSync(p)) return p;
  }
  return null;
}

function toDataUri(buffer, mime = 'image/jpeg') {
  return `data:${mime};base64,${buffer.toString('base64')}`;
}

async function hideChrome(page) {
  await page.evaluate(() => {
    document.querySelectorAll('button[title="打开目录"], button[title="全屏演示"]').forEach((b) => {
      b.style.display = 'none';
    });
    document.querySelectorAll('.pointer-events-none.opacity-20').forEach((el) => {
      el.style.display = 'none';
    });
  });
}

async function waitForSlideReady(page) {
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all(
      [...document.images].map((img) =>
        img.complete ? Promise.resolve() : new Promise((r) => {
          img.onload = r;
          img.onerror = r;
        })
      )
    );
    const video = document.querySelector('video');
    if (!video) return;
    if (video.readyState < 2) {
      await new Promise((resolve) => {
        const done = () => resolve();
        video.addEventListener('loadeddata', done, { once: true });
        video.addEventListener('error', done, { once: true });
        setTimeout(done, 6000);
      });
    }
    try {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        video.currentTime = Math.min(0.15, video.duration / 4);
        await new Promise((resolve) => {
          const done = () => resolve();
          video.addEventListener('seeked', done, { once: true });
          setTimeout(done, 1500);
        });
      }
    } catch {
      /* ignore */
    }
  });
}

async function collectVideoInfo(page) {
  return page.evaluate(() => {
    const slide = document.querySelector('.bg-white.overflow-hidden');
    const video = document.querySelector('video');
    if (!slide || !video) return null;
    const sr = slide.getBoundingClientRect();
    const host = video.parentElement || video;
    const vr = host.getBoundingClientRect();
    if (sr.width < 10 || sr.height < 10 || vr.width < 10 || vr.height < 10) return null;
    return {
      src: video.currentSrc || video.getAttribute('src') || '',
      x: (vr.left - sr.left) / sr.width,
      y: (vr.top - sr.top) / sr.height,
      w: vr.width / sr.width,
      h: vr.height / sr.height,
    };
  });
}

async function main() {
  console.log('开始导出全部幻灯片为 PPT（含视频页嵌入视频）...');
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  fs.mkdirSync(COVER_DIR, { recursive: true });

  const chromePath =
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

  console.log('启动浏览器...');
  const browser = await puppeteer.launch({
    headless: 'new',
    executablePath: fs.existsSync(chromePath) ? chromePath : undefined,
    defaultViewport: { width: 1984, height: 1144, deviceScaleFactor: 2 },
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--font-render-hinting=none', '--autoplay-policy=no-user-gesture-required'],
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 2 });

  console.log(`打开幻灯片系统: ${SLIDE_URL}`);
  try {
    await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 60000 });
  } catch (e) {
    console.error(`无法打开 ${SLIDE_URL}，请确认 Vite 已启动。`);
    await browser.close();
    process.exit(1);
  }

  await page.evaluate(() => document.fonts.ready);
  await sleep(3000);

  console.log('读取目录...');
  await page.click('button[title="打开目录"]');
  await sleep(800);

  const slideItems = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
    return elements.map((el, index) => {
      const id = el.getAttribute('data-rfd-draggable-id') || '';
      const titleSpan = el.querySelector('.truncate');
      const title = titleSpan ? titleSpan.textContent.trim() : '';
      return { id, index, title };
    });
  });

  if (slideItems.length === 0) {
    console.error('目录中没有找到幻灯片。');
    await browser.close();
    process.exit(1);
  }

  console.log(`共 ${slideItems.length} 页`);
  slideItems.forEach((s, i) => {
    console.log(`  [${String(i + 1).padStart(3, '0')}] ${s.title}`);
  });

  await page.evaluate(() => {
    const items = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
    if (items[0]) items[0].click();
  });
  await sleep(400);

  const closeBtn = await page.$('button.text-zinc-500');
  if (closeBtn) {
    await closeBtn.click();
    await sleep(400);
  }

  await hideChrome(page);

  const pptx = new pptxgen();
  pptx.defineLayout({ name: 'LAYOUT_16x9', width: PPT_W, height: PPT_H });
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'GEO索引未来';
  pptx.title = '创维创新谷 GEO规划方案';
  pptx.subject = '创维创新谷 GEO规划方案';

  let videoCount = 0;

  for (let i = 0; i < slideItems.length; i++) {
    const info = slideItems[i];
    console.log(`[${i + 1}/${slideItems.length}] ${info.title}`);

    await waitForSlideReady(page);
    await sleep(700);

    const slideEl = await page.$('.bg-white.overflow-hidden');
    let screenshotBuffer;
    if (slideEl) {
      screenshotBuffer = await slideEl.screenshot({ type: 'jpeg', quality: 92 });
    } else {
      console.warn('  未找到幻灯片容器，改用全屏截图');
      screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 92 });
    }

    const imgName = `slide_${String(i + 1).padStart(3, '0')}.jpg`;
    const imgPath = path.join(OUTPUT_DIR, imgName);
    fs.writeFileSync(imgPath, screenshotBuffer);

    const videoInfo = await collectVideoInfo(page);
    const videoPath = resolveVideoPath(videoInfo?.src || '', info.title);

    const slide = pptx.addSlide();
    slide.background = { fill: 'FFFFFF' };
    slide.addImage({
      data: toDataUri(screenshotBuffer),
      x: 0,
      y: 0,
      w: '100%',
      h: '100%',
    });

    if (videoPath && videoInfo) {
      const x = Math.max(0, videoInfo.x * PPT_W);
      const y = Math.max(0, videoInfo.y * PPT_H);
      const w = Math.min(PPT_W - x, videoInfo.w * PPT_W);
      const h = Math.min(PPT_H - y, videoInfo.h * PPT_H);

      let coverBuf = screenshotBuffer;
      const hostEl = await page.$('.bg-white.overflow-hidden video');
      if (hostEl) {
        try {
          const parentHandle = await hostEl.evaluateHandle((el) => el.parentElement || el);
          coverBuf = await parentHandle.screenshot({ type: 'jpeg', quality: 92 });
        } catch {
          coverBuf = screenshotBuffer;
        }
      }
      const coverPath = path.join(COVER_DIR, `cover_${String(i + 1).padStart(3, '0')}.jpg`);
      fs.writeFileSync(coverPath, coverBuf);

      try {
        slide.addMedia({
          type: 'video',
          path: videoPath,
          cover: toDataUri(coverBuf),
          x,
          y,
          w,
          h,
        });
        videoCount += 1;
        console.log(`  已嵌入视频: ${path.basename(videoPath)}  (${w.toFixed(2)}" × ${h.toFixed(2)}")`);
      } catch (err) {
        console.warn(`  视频嵌入失败，已保留截图: ${err.message}`);
      }
    } else if (fallbackVideoByTitle(info.title) && !videoInfo) {
      console.warn(`  标题匹配到视频但页面上未找到 video 元素: ${info.title}`);
    }

    if (i < slideItems.length - 1) {
      await page.keyboard.press('ArrowRight');
      await sleep(900);
    }
  }

  console.log(`正在生成 PPTX（其中 ${videoCount} 页含视频）...`);
  await pptx.writeFile({ fileName: OUTPUT_PPT });
  console.log(`导出完成: ${OUTPUT_PPT}`);

  await browser.close();
}

main().catch((err) => {
  console.error('导出失败:', err);
  process.exit(1);
});
