import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:5173/products/third-party-risk-management', { waitUntil: 'networkidle0' });
  
  const cards = await page.evaluate(() => {
    const els = document.querySelectorAll('.network-card');
    return Array.from(els).map(el => {
      const rect = el.getBoundingClientRect();
      const style = window.getComputedStyle(el);
      return {
        id: el.dataset.category,
        text: el.innerText.trim(),
        rect: { x: rect.x, y: rect.y, width: rect.width, height: rect.height },
        transform: el.style.transform,
        display: style.display,
        visibility: style.visibility,
        opacity: style.opacity
      };
    });
  });
  
  console.log(JSON.stringify(cards, null, 2));
  await browser.close();
})();
