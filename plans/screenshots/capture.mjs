import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BASE = "https://quynhanh-premium-accounts.vercel.app";
const OUT = __dirname;

const DT = { width: 1440, height: 900 };
const MB = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true };

const pages = [
  // ── HOMEPAGE ────────────────────────────────────────────
  { name: "home-01-hero",          url: "/",  vp: DT, scroll: 0,    fullPage: false },
  { name: "home-02-featured",      url: "/",  vp: DT, scroll: 750,  fullPage: false },
  { name: "home-03-product-grid",  url: "/",  vp: DT, scroll: 1500, fullPage: false },
  { name: "home-04-footer",        url: "/",  vp: DT, scroll: 9999, fullPage: false },
  { name: "home-fullpage",         url: "/",  vp: DT, fullPage: true },

  // ── 8 CATEGORIES ────────────────────────────────────────
  { name: "cat-ai-chat",      url: "/category/ai-chat",      vp: DT, fullPage: true },
  { name: "cat-am-nhac",      url: "/category/am-nhac",      vp: DT, fullPage: true },
  { name: "cat-design-photo", url: "/category/design-photo", vp: DT, fullPage: true },
  { name: "cat-hoc-tap",      url: "/category/hoc-tap",      vp: DT, fullPage: true },
  { name: "cat-phim-anh",     url: "/category/phim-anh",     vp: DT, fullPage: true },
  { name: "cat-tien-ich",     url: "/category/tien-ich",     vp: DT, fullPage: true },
  { name: "cat-van-phong",    url: "/category/van-phong",    vp: DT, fullPage: true },
  { name: "cat-vpn",          url: "/category/vpn",          vp: DT, fullPage: true },

  // ── 54 PRODUCT DETAIL PAGES ─────────────────────────────
  // AI Chat (7)
  { name: "prod-chatgpt-plus",     url: "/product/chatgpt-plus",     vp: DT, fullPage: true },
  { name: "prod-claude-ai",        url: "/product/claude-ai",        vp: DT, fullPage: true },
  { name: "prod-google-ai-ultra",  url: "/product/google-ai-ultra",  vp: DT, fullPage: true },
  { name: "prod-gemini-pro",       url: "/product/gemini-pro",       vp: DT, fullPage: true },
  { name: "prod-perplexity-ai",    url: "/product/perplexity-ai",    vp: DT, fullPage: true },
  { name: "prod-copilot",          url: "/product/copilot",          vp: DT, fullPage: true },
  { name: "prod-super-grok",       url: "/product/super-grok",       vp: DT, fullPage: true },
  // Âm nhạc (3)
  { name: "prod-spotify-premium",  url: "/product/spotify-premium",  vp: DT, fullPage: true },
  { name: "prod-apple-music",      url: "/product/apple-music",      vp: DT, fullPage: true },
  { name: "prod-qobuz",            url: "/product/qobuz",            vp: DT, fullPage: true },
  // Design & Photo (7)
  { name: "prod-capcut-pro",       url: "/product/capcut-pro",       vp: DT, fullPage: true },
  { name: "prod-canva-pro",        url: "/product/canva-pro",        vp: DT, fullPage: true },
  { name: "prod-adobe-all-app",    url: "/product/adobe-all-app",    vp: DT, fullPage: true },
  { name: "prod-lightroom-pro",    url: "/product/lightroom-pro",    vp: DT, fullPage: true },
  { name: "prod-picsart",          url: "/product/picsart",          vp: DT, fullPage: true },
  { name: "prod-vsco-x",           url: "/product/vsco-x",           vp: DT, fullPage: true },
  { name: "prod-dazz-cam-pro",     url: "/product/dazz-cam-pro",     vp: DT, fullPage: true },
  // Học tập (16)
  { name: "prod-studocu",          url: "/product/studocu",          vp: DT, fullPage: true },
  { name: "prod-quizlet-plus",     url: "/product/quizlet-plus",     vp: DT, fullPage: true },
  { name: "prod-grammarly-premium",url: "/product/grammarly-premium",vp: DT, fullPage: true },
  { name: "prod-quillbot-premium", url: "/product/quillbot-premium", vp: DT, fullPage: true },
  { name: "prod-turnitin",         url: "/product/turnitin",         vp: DT, fullPage: true },
  { name: "prod-elsa-speak",       url: "/product/elsa-speak",       vp: DT, fullPage: true },
  { name: "prod-scribd",           url: "/product/scribd",           vp: DT, fullPage: true },
  { name: "prod-udemy",            url: "/product/udemy",            vp: DT, fullPage: true },
  { name: "prod-coursera-plus",    url: "/product/coursera-plus",    vp: DT, fullPage: true },
  { name: "prod-course-hero",      url: "/product/course-hero",      vp: DT, fullPage: true },
  { name: "prod-duolingo-super",   url: "/product/duolingo-super",   vp: DT, fullPage: true },
  { name: "prod-memrise-pro",      url: "/product/memrise-pro",      vp: DT, fullPage: true },
  { name: "prod-busuu",            url: "/product/busuu",            vp: DT, fullPage: true },
  { name: "prod-quizizz-premium",  url: "/product/quizizz-premium",  vp: DT, fullPage: true },
  { name: "prod-codecademy-pro",   url: "/product/codecademy-pro",   vp: DT, fullPage: true },
  { name: "prod-wordwall",         url: "/product/wordwall",         vp: DT, fullPage: true },
  // Phim ảnh (4)
  { name: "prod-netflix-premium",  url: "/product/netflix-premium",  vp: DT, fullPage: true },
  { name: "prod-iqiyi",            url: "/product/iqiyi",            vp: DT, fullPage: true },
  { name: "prod-youku",            url: "/product/youku",            vp: DT, fullPage: true },
  { name: "prod-disney-plus",      url: "/product/disney-plus",      vp: DT, fullPage: true },
  // Văn phòng (9)
  { name: "prod-microsoft-365",    url: "/product/microsoft-365",    vp: DT, fullPage: true },
  { name: "prod-autoDesk",         url: "/product/autoDesk",         vp: DT, fullPage: true },
  { name: "prod-key-windows",      url: "/product/key-windows",      vp: DT, fullPage: true },
  { name: "prod-zoom-pro",         url: "/product/zoom-pro",         vp: DT, fullPage: true },
  { name: "prod-notion-plus",      url: "/product/notion-plus",      vp: DT, fullPage: true },
  { name: "prod-filmora",          url: "/product/filmora",          vp: DT, fullPage: true },
  { name: "prod-camscanner",       url: "/product/camscanner",       vp: DT, fullPage: true },
  { name: "prod-discord-nitro",    url: "/product/discord-nitro",    vp: DT, fullPage: true },
  { name: "prod-linkedin-premium", url: "/product/linkedin-premium", vp: DT, fullPage: true },
  // Tiện ích khác (4)
  { name: "prod-icloud-iphone",    url: "/product/icloud-iphone",    vp: DT, fullPage: true },
  { name: "prod-truecaller-premium",url: "/product/truecaller-premium",vp: DT, fullPage: true },
  { name: "prod-bumble-premium",   url: "/product/bumble-premium",   vp: DT, fullPage: true },
  { name: "prod-tinder",           url: "/product/tinder",           vp: DT, fullPage: true },
  // VPN (4)
  { name: "prod-nordvpn",          url: "/product/nordvpn",          vp: DT, fullPage: true },
  { name: "prod-hma-vpn",          url: "/product/hma-vpn",          vp: DT, fullPage: true },
  { name: "prod-expressvpn",       url: "/product/expressvpn",       vp: DT, fullPage: true },
  { name: "prod-ipvanish-vpn",     url: "/product/ipvanish-vpn",     vp: DT, fullPage: true },

  // ── MOBILE ──────────────────────────────────────────────
  { name: "mobile-home-fullpage",  url: "/",                         vp: MB, fullPage: true },
  { name: "mobile-cat-ai-chat",    url: "/category/ai-chat",         vp: MB, fullPage: true },
  { name: "mobile-cat-hoc-tap",    url: "/category/hoc-tap",         vp: MB, fullPage: true },
  { name: "mobile-prod-chatgpt",   url: "/product/chatgpt-plus",     vp: MB, fullPage: true },
  { name: "mobile-prod-netflix",   url: "/product/netflix-premium",  vp: MB, fullPage: true },
  { name: "mobile-prod-canva",     url: "/product/canva-pro",        vp: MB, fullPage: true },
];

const browser = await puppeteer.launch({ headless: true, args: ["--no-sandbox"] });
let count = 0;

for (const p of pages) {
  const page = await browser.newPage();
  await page.setViewport(p.vp);
  try {
    await page.goto(BASE + p.url, { waitUntil: "networkidle2", timeout: 40000 });
    await new Promise(r => setTimeout(r, 1500));
    if (p.scroll) {
      await page.evaluate((y) => window.scrollTo({ top: y, behavior: "instant" }), p.scroll);
      await new Promise(r => setTimeout(r, 700));
    }
    const file = path.join(OUT, `${p.name}.png`);
    await page.screenshot({ path: file, fullPage: !!p.fullPage });
    count++;
    console.log(`✅ [${count}/${pages.length}] ${p.name}`);
  } catch (e) {
    console.log(`❌ [${p.name}] ${e.message}`);
  }
  await page.close();
}

await browser.close();
console.log(`\n🎉 Done — ${count}/${pages.length} screenshots saved.`);
