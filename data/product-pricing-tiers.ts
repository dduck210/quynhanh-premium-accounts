import { PricingTier } from "@/data/product-details";

// Actual pricing tiers per product, sourced from price list Excel.
// If a product ID is not listed here, generatePricingTiers() is used as fallback.
export const productPricingTiers: Record<string, PricingTier[]> = {
  // ── AI CHAT ──────────────────────────────────────────────────────────────────
  "chatgpt-plus": [
    { duration: "tháng", label: "Share 1 thiết bị", price: 90000 },
    { duration: "tháng", label: "Share 2 thiết bị", price: 170000 },
    { duration: "tháng", label: "Share 3 thiết bị", price: 250000 },
    { duration: "tháng", label: "Private", price: 299000, isPopular: true },
  ],
  "claude-ai": [
    { duration: "tháng", label: "Standard Seat", price: 450000, isPopular: true },
    { duration: "tháng", label: "Premium Seat", price: 2200000 },
  ],
  "google-ai-ultra": [
    { duration: "tháng", label: "Gói 2 (75k credit)", price: 75000, isPopular: true },
    { duration: "tháng", label: "Gói 1 (285k credit)", price: 285000 },
  ],
  "gemini-pro": [
    { duration: "6 tháng", price: 220000 },
    { duration: "1 năm", price: 300000, isPopular: true },
  ],
  "perplexity-ai": [
    { duration: "1 năm", label: "BH 1 tháng", price: 250000, isPopular: true },
    { duration: "1 năm", label: "BH 2 tháng", price: 350000 },
    { duration: "1 năm", label: "BH 4 tháng", price: 650000 },
  ],
  "copilot": [
    { duration: "tháng", label: "Tài khoản cấp", price: 70000, isPopular: true },
    { duration: "tháng", label: "Nâng chính chủ", price: 399000 },
  ],
  "super-grok": [
    { duration: "1 tháng", price: 300000, isPopular: true },
  ],

  // ── ÂM NHẠC ──────────────────────────────────────────────────────────────────
  "spotify-premium": [
    { duration: "6 tháng", price: 245000 },
    { duration: "1 năm", price: 395000, isPopular: true },
  ],
  "apple-music": [
    { duration: "1 năm", price: 300000, isPopular: true },
  ],
  "qobuz": [
    { duration: "3 tháng", price: 650000, isPopular: true },
    { duration: "1 năm", price: 970000 },
  ],

  // ── DESIGN & PHOTO ────────────────────────────────────────────────────────────
  "capcut-pro": [
    { duration: "tháng", price: 110000 },
    { duration: "6 tháng", price: 300000, isPopular: true },
    { duration: "1 năm", price: 880000 },
  ],
  "canva-pro": [
    { duration: "1 năm", label: "EDU", price: 125000, isPopular: true },
    { duration: "1 năm", label: "PRO", price: 200000 },
  ],
  "adobe-all-app": [
    { duration: "1 tháng", price: 120000, isPopular: true },
    { duration: "3 tháng", price: 225000 },
  ],
  "lightroom-pro": [
    { duration: "1 năm", price: 350000, isPopular: true },
  ],
  "picsart": [
    { duration: "1 năm", label: "Plus", price: 260000, isPopular: true },
    { duration: "1 năm", label: "Pro", price: 370000 },
  ],
  "vsco-x": [
    { duration: "1 năm", price: 360000, isPopular: true },
  ],
  "dazz-cam-pro": [
    { duration: "3 năm", price: 270000, isPopular: true },
  ],

  // ── HỌC TẬP ──────────────────────────────────────────────────────────────────
  "studocu": [
    { duration: "1 tháng", price: 70000 },
    { duration: "3 tháng", price: 150000 },
    { duration: "6 tháng", price: 240000, isPopular: true },
    { duration: "1 năm", price: 360000 },
  ],
  "quizlet-plus": [
    { duration: "1 năm", price: 270000, isPopular: true },
  ],
  "grammarly-premium": [
    { duration: "6 tháng", price: 180000, isPopular: true },
    { duration: "1 năm", price: 280000 },
  ],
  "quillbot-premium": [
    { duration: "tháng", price: 125000 },
    { duration: "6 tháng", price: 280000, isPopular: true },
    { duration: "1 năm", price: 320000 },
  ],
  "turnitin": [
    { duration: "lượt", label: "Đạo văn thường", price: 30000 },
    { duration: "lượt", label: "Đạo văn + AI check", price: 45000, isPopular: true },
    { duration: "tháng", label: "Student (10 lượt/ngày)", price: 150000 },
  ],
  "elsa-speak": [
    { duration: "3 tháng", label: "ELSA Premium", price: 450000, isPopular: true },
    { duration: "1 năm", label: "ELSA Pro", price: 580000 },
    { duration: "1 năm", label: "ELSA Premium", price: 900000 },
  ],
  "scribd": [
    { duration: "1 tháng", price: 70000, isPopular: true },
  ],
  "udemy": [
    { duration: "6 tháng", price: 640000, isPopular: true },
  ],
  "coursera-plus": [
    { duration: "tháng", price: 130000 },
    { duration: "6 tháng", price: 550000, isPopular: true },
    { duration: "1 năm", price: 750000 },
  ],
  "course-hero": [
    { duration: "5 unlocks", price: 80000 },
    { duration: "10 unlocks", price: 150000, isPopular: true },
    { duration: "50 unlocks", price: 380000 },
  ],
  "duolingo-super": [
    { duration: "1 năm", price: 280000, isPopular: true },
  ],
  "memrise-pro": [
    { duration: "Lifetime", price: 450000, isPopular: true },
  ],
  "busuu": [
    { duration: "1 năm", price: 450000, isPopular: true },
  ],
  "quizizz-premium": [
    { duration: "1 năm", price: 450000, isPopular: true },
  ],
  "codecademy-pro": [
    { duration: "1 năm", price: 330000, isPopular: true },
  ],
  "wordwall": [
    { duration: "tháng", label: "Standard", price: 60000, isPopular: true },
    { duration: "1 năm", label: "Standard", price: 399000 },
  ],

  // ── PHIM ẢNH ──────────────────────────────────────────────────────────────────
  "netflix-premium": [
    { duration: "1 tháng", price: 75000, isPopular: true },
    { duration: "3 tháng", price: 210000 },
    { duration: "6 tháng", price: 420000 },
  ],
  "iqiyi": [
    { duration: "3 tháng", price: 100000, isPopular: true },
    { duration: "1 năm", price: 300000 },
  ],
  "youku": [
    { duration: "1 năm", label: "Dùng chung", price: 180000, isPopular: true },
    { duration: "1 năm", label: "Chính chủ", price: 380000 },
  ],
  "disney-plus": [
    { duration: "1 tháng", price: 75000 },
    { duration: "3 tháng", price: 190000 },
    { duration: "6 tháng", price: 340000, isPopular: true },
    { duration: "1 năm", price: 550000 },
  ],

  // ── VĂN PHÒNG ─────────────────────────────────────────────────────────────────
  "microsoft-365": [
    { duration: "1 năm", label: "Slot cá nhân", price: 270000, isPopular: true },
    { duration: "1 năm", label: "Gói Family (5 người)", price: 890000 },
  ],
  "autoDesk": [
    { duration: "1 năm", label: "1 App", price: 320000, isPopular: true },
    { duration: "1 năm", label: "2 App", price: 420000 },
    { duration: "1 năm", label: "3 App", price: 520000 },
    { duration: "1 năm", label: "All App", price: 850000 },
  ],
  "key-windows": [
    { duration: "Vĩnh viễn", price: 190000, isPopular: true },
  ],
  "zoom-pro": [
    { duration: "tháng", label: "100 người", price: 180000, isPopular: true },
    { duration: "tháng", label: "300 người", price: 400000 },
  ],
  "notion-plus": [
    { duration: "1 năm", label: "Plus", price: 670000, isPopular: true },
    { duration: "1 năm", label: "Business", price: 820000 },
    { duration: "1 năm", label: "Enterprise", price: 1020000 },
  ],
  "filmora": [
    { duration: "1 năm", price: 600000, isPopular: true },
  ],
  "camscanner": [
    { duration: "1 năm", price: 450000, isPopular: true },
  ],
  "discord-nitro": [
    { duration: "1 năm", price: 880000, isPopular: true },
  ],
  "linkedin-premium": [
    { duration: "3 tháng", label: "Career", price: 550000, isPopular: true },
    { duration: "1 năm", label: "Career", price: 1250000 },
    { duration: "3 tháng", label: "Business", price: 750000 },
    { duration: "1 năm", label: "Business", price: 1900000 },
  ],

  // ── VPN ───────────────────────────────────────────────────────────────────────
  "nordvpn": [
    { duration: "1 năm", label: "Tài khoản cấp", price: 250000, isPopular: true },
    { duration: "1 năm", label: "Nâng chính chủ", price: 950000 },
  ],
  "hma-vpn": [
    { duration: "tháng", price: 65000 },
    { duration: "1 năm", price: 250000, isPopular: true },
  ],
  "expressvpn": [
    { duration: "tháng", price: 65000 },
    { duration: "1 năm", price: 250000, isPopular: true },
  ],
  "ipvanish-vpn": [
    { duration: "1 năm", price: 250000, isPopular: true },
  ],

  // ── TIỆN ÍCH KHÁC ─────────────────────────────────────────────────────────────
  "icloud-iphone": [
    { duration: "6 tháng", price: 450000, isPopular: true },
    { duration: "1 năm", price: 650000 },
  ],
  "truecaller-premium": [
    { duration: "1 năm", price: 200000, isPopular: true },
  ],
  "bumble-premium": [
    { duration: "tuần", price: 79000 },
    { duration: "tháng", price: 159000, isPopular: true },
    { duration: "3 tháng", price: 300000 },
    { duration: "6 tháng", price: 450000 },
  ],
  "tinder": [
    { duration: "tháng", label: "Platinum", price: 130000, isPopular: true },
    { duration: "6 tháng", label: "Platinum", price: 350000 },
    { duration: "tháng", label: "Gold", price: 140000 },
    { duration: "6 tháng", label: "Gold", price: 420000 },
  ],
};
