const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });
  
  await page.goto('http://localhost:5173/solutions/vendor-risk-management', { waitUntil: 'networkidle0' });
  
  await page.screenshot({ path: '/Users/ashu/.gemini/antigravity-ide/brain/2987a0aa-5f70-4a2b-87ea-b100cd8ed223/vrm_screenshot.png', fullPage: true });
  
  await browser.close();
})();
