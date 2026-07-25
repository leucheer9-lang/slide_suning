import puppeteer from 'puppeteer';

async function run() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:5176', { waitUntil: 'networkidle0' });
    
    // Open menu
    await page.click('button[title="打开目录"]');
    await new Promise(r => setTimeout(r, 1000));
    
    // Click the save button
    await page.evaluate(() => {
        const btns = Array.from(document.querySelectorAll('button'));
        const saveBtn = btns.find(b => b.textContent && b.textContent.includes('保存目录修改'));
        if (saveBtn) {
            saveBtn.click();
            console.log("Clicked save");
        } else {
            console.log("Save button not found");
        }
    });
    
    // Wait for api call
    await new Promise(r => setTimeout(r, 2000));
    console.log("Finished saving order via frontend UI");
    await browser.close();
}
run();
