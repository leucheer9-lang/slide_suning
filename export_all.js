import puppeteer from 'puppeteer';
import pptxgen from 'pptxgenjs';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_DIR = path.join(__dirname, 'export-screenshots-all');
const OUTPUT_PPT = path.join(__dirname, 'All_GEO_Report.pptx');
const SLIDE_URL = 'http://localhost:6562';

async function main() {
  console.log('🚀 开始从演示系统导出 所有PPT (全套幻灯片)...');
  
  // 确保截图目录存在
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  console.log('💻 启动浏览器...');
  const browser = await puppeteer.launch({
    headless: 'new',
    defaultViewport: { width: 1984, height: 1144, deviceScaleFactor: 2 },
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
    ],
  });

  const page = await browser.newPage();
  // 4K 级别高解析度截图以获得极致画质
  await page.setViewport({ width: 1984, height: 1144, deviceScaleFactor: 2 });

  console.log(`🌐 正在打开幻灯片系统: ${SLIDE_URL}...`);
  try {
    await page.goto(SLIDE_URL, { waitUntil: 'networkidle2', timeout: 30000 });
  } catch (e) {
    console.error(`❌ 无法打开页面 ${SLIDE_URL}。请确保 Vite 开发服务器已在端口 6562 上运行！`);
    await browser.close();
    process.exit(1);
  }

  // 等待字体和动画加载就绪
  console.log('⏳ 等待系统就绪、字体加载...');
  await page.evaluate(() => document.fonts.ready);
  await new Promise((r) => setTimeout(r, 4000));

  // 打开目录提取所有幻灯片索引
  console.log('📂 正在获取所有幻灯片列表...');
  await page.click('button[title="打开目录"]');
  await new Promise((r) => setTimeout(r, 800));

  const slideItems = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
    return elements.map((el, index) => {
      const id = el.getAttribute('data-rfd-draggable-id') || '';
      // 获取幻灯片的显示标题
      const titleSpan = el.querySelector('.truncate');
      const title = titleSpan ? titleSpan.textContent : '';
      return { id, index, title };
    });
  });

  if (slideItems.length === 0) {
    console.error('❌ 未在目录中找到任何幻灯片！');
    await browser.close();
    process.exit(1);
  }

  console.log(`🎯 成功定位到目标幻灯片（共 ${slideItems.length} 页）：`);
  slideItems.forEach((slide, idx) => {
    console.log(`   [${idx + 1}] 幻灯片原索引: ${slide.index + 1} | 标题: ${slide.title} | ID: ${slide.id}`);
  });

  // 关闭目录面板
  const closeBtn = await page.$('button.text-zinc-500');
  if (closeBtn) {
    await closeBtn.click();
    await new Promise((r) => setTimeout(r, 400));
  }

  // 初始化 PPTX 生成器
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';

  // 循环逐个截图并添加到 PPTX
  for (let i = 0; i < slideItems.length; i++) {
    const slideInfo = slideItems[i];
    console.log(`📸 [${i + 1}/${slideItems.length}] 正在处理: ${slideInfo.title}...`);

    // 重新打开目录面板点击跳转
    await page.click('button[title="打开目录"]');
    await new Promise((r) => setTimeout(r, 400));

    // 获取并点击对应索引的按钮
    await page.evaluate((targetIdx) => {
      const items = Array.from(document.querySelectorAll('nav.flex-grow [data-rfd-draggable-id]'));
      if (items[targetIdx]) {
        items[targetIdx].click();
      }
    }, slideInfo.index);

    await new Promise((r) => setTimeout(r, 400));

    // 关闭目录面板
    const closeBtnInner = await page.$('button.text-zinc-500');
    if (closeBtnInner) {
      await closeBtnInner.click();
      await new Promise((r) => setTimeout(r, 400));
    }

    // 等待当前页面的所有高精图片和字体加载完毕
    await page.evaluate(() =>
      Promise.all(
        [...document.images].map((img) =>
          img.complete ? Promise.resolve() : new Promise((r) => { img.onload = r; img.onerror = r; })
        )
      )
    );
    // 给动画和重新渲染留一些缓冲时间
    await new Promise((r) => setTimeout(r, 1200));

    // 对 .bg-white.overflow-hidden 容器进行截图（完美无边框的 1920x1080 幻灯片本身）
    const slideEl = await page.$('.bg-white.overflow-hidden');
    let screenshotBuffer;
    
    if (slideEl) {
      screenshotBuffer = await slideEl.screenshot({ type: 'jpeg', quality: 90 });
    } else {
      console.warn('⚠️ 未找到 .bg-white.overflow-hidden 元素，改用全屏截图');
      screenshotBuffer = await page.screenshot({ type: 'jpeg', quality: 90 });
    }

    // 保存临时截图文件以备后用/调试
    const imgName = `slide_${String(i + 1).padStart(3, '0')}.jpg`;
    const imgPath = path.join(OUTPUT_DIR, imgName);
    fs.writeFileSync(imgPath, screenshotBuffer);

    // 将图片以 base64 形式添加至 PPT 幻灯片中，保证独立性和画质
    const slide = pptx.addSlide();
    slide.background = { fill: 'FFFFFF' }; // 保证无白边背景
    slide.addImage({
      data: `image/jpeg;base64,${screenshotBuffer.toString('base64')}`,
      x: 0,
      y: 0,
      w: '100%',
      h: '100%'
    });

    console.log(`   ✅ 截图已保存并添加至 PPTX [${imgName}]`);
  }

  console.log('💾 正在生成并保存 PPTX 文件...');
  await pptx.writeFile({ fileName: OUTPUT_PPT });
  console.log(`🎉 导出完成！已成功将所有目标幻灯片保存至：${OUTPUT_PPT}`);

  await browser.close();
}

main().catch((err) => {
  console.error('❌ 发生异常:', err);
  process.exit(1);
});
