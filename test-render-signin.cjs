const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', error => console.log('PAGE ERROR:', error.message));
  await page.goto('http://localhost:5173/signin', { waitUntil: 'networkidle0' });
  const html = await page.evaluate(() => document.getElementById('root').innerHTML);
  console.log('ROOT HTML:', html);
  await browser.close();
})();
