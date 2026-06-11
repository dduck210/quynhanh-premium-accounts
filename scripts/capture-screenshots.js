const puppeteer = require("puppeteer");
const path = require("path");
const fs = require("fs");

const OUT = path.join(__dirname, "../plans/screenshots");
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

const BASE = "http://localhost:3000";

const pages = [
  { name: "home-desktop", url: "/", width: 1440, height: 900, scroll: 0 },
  { name: "home-cards-desktop", url: "/", width: 1440, height: 900, scroll: 900 },
  { name: "home-mobile", url: "/", width: 390, height: 844, scroll: 0 },
  { name: "product-detail-svg", url: "/product/claude-ai", width: 1440, height: 900, scroll: 0 },
  { name: "product-detail-png", url: "/product/chatgpt-plus", width: 1440, height: 900, scroll: 0 },
  { name: "product-detail-emoji", url: "/product/copilot", width: 1440, height: 900, scroll: 0 },
];

(async () => {
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  for (const p of pages) {
    await page.setViewport({ width: p.width, height: p.height });
    await page.goto(BASE + p.url, { waitUntil: "domcontentloaded", timeout: 30000 });
    await new Promise((r) => setTimeout(r, 1500));
    if (p.scroll) await page.evaluate((y) => window.scrollTo(0, y), p.scroll);
    await new Promise((r) => setTimeout(r, 500));
    const file = path.join(OUT, `${p.name}.png`);
    await page.screenshot({ path: file, fullPage: false });
    console.log(`OK  ${p.name}`);
  }

  await browser.close();
  console.log("Done");
})().catch((e) => { console.error(e.message); process.exit(1); });
