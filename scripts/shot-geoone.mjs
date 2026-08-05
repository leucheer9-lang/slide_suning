// 通过目录面板跳到指定页，截取 GEO ONE 界面区域，用于与原始截图逐像素比对。
import fs from 'node:fs';
import puppeteer from 'puppeteer';

const URL = 'http://localhost:6562/';
const OUT = 'scripts/_shots';
fs.mkdirSync(OUT, { recursive: true });

const targets = process.argv.slice(2);
if (!targets.length) {
    console.error('用法: node scripts/shot-geoone.mjs <页面标题> [更多标题...]');
    process.exit(1);
}

const browser = await puppeteer.launch({
    channel: 'chrome',
    headless: 'new',
    args: ['--force-device-scale-factor=2', '--window-size=1920,1080'],
});
const page = await browser.newPage();
await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
await page.goto(URL, { waitUntil: 'networkidle0' });

for (const name of targets) {
    // 打开目录面板
    await page.click('button[title="打开目录"]');
    await new Promise((r) => setTimeout(r, 450));

    const ok = await page.evaluate((n) => {
        const items = [...document.querySelectorAll('nav span.truncate')];
        const hit = items.find((el) => el.textContent.trim() === n);
        if (!hit) return false;
        hit.closest('[class*="rounded-xl"]').click();
        return true;
    }, name);

    if (!ok) {
        console.error(`未找到页面: ${name}`);
        continue;
    }

    await page.keyboard.press('Escape');
    await page.evaluate(() => {
        const btn = [...document.querySelectorAll('button')].find((b) => b.textContent.trim() === '✕');
        if (btn) btn.click();
    });
    await new Promise((r) => setTimeout(r, 900));

    const el = await page.$('[data-geoone-root]');
    const file = `${OUT}/${name}.png`;
    if (el) {
        await el.screenshot({ path: file });
    } else {
        await page.screenshot({ path: file });
        console.warn(`  (未找到 [data-geoone-root]，改为整页截图) ${name}`);
    }
    console.log('已保存', file);
}

await browser.close();
