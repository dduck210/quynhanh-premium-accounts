export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  price: number;
  originalPrice?: number;
  logoEmoji: string;
  logoColor: string;
  duration: string;
  description: string;
  isFeatured?: boolean;
  isSale?: boolean;
  isNew?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  bgColor: string;
  textColor: string;
}

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("vi-VN").format(price) + "đ";

export const categories: Category[] = [
  { id: "ai-chat",     name: "AI Chat",        icon: "🤖", count: 7,  bgColor: "bg-purple-100", textColor: "text-purple-700" },
  { id: "am-nhac",     name: "Âm nhạc",         icon: "🎵", count: 3,  bgColor: "bg-green-100",  textColor: "text-green-700"  },
  { id: "design-photo",name: "Design & Photo",  icon: "🎨", count: 7,  bgColor: "bg-pink-100",   textColor: "text-pink-700"   },
  { id: "hoc-tap",     name: "Học tập",          icon: "📚", count: 16, bgColor: "bg-blue-100",   textColor: "text-blue-700"   },
  { id: "phim-anh",    name: "Phim ảnh",         icon: "🎬", count: 4,  bgColor: "bg-red-100",    textColor: "text-red-700"    },
  { id: "tien-ich",    name: "Tiện ích khác",    icon: "⚡", count: 4,  bgColor: "bg-yellow-100", textColor: "text-yellow-700" },
  { id: "van-phong",   name: "Văn phòng",        icon: "💼", count: 9,  bgColor: "bg-indigo-100", textColor: "text-indigo-700" },
  { id: "vpn",         name: "VPN",              icon: "🔒", count: 4,  bgColor: "bg-slate-100",  textColor: "text-slate-700"  },
];

export const products: Product[] = [
  // ── AI CHAT (7) ──────────────────────────────────────────────────────────────
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 125000, originalPrice: 480000,
    logoEmoji: "🤖", logoColor: "#10a37f", duration: "tháng",
    description: "GPT-4o dùng chung 7 thiết bị, tài khoản shop cấp, bảo hành full",
    isFeatured: true, isSale: true,
  },
  {
    id: "claude-ai",
    name: "Claude AI",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 450000,
    logoEmoji: "🧠", logoColor: "#cc785c", duration: "tháng",
    description: "Standard Seat 450k/slot — Claude Code, context 200K, Team workspace",
    isNew: true,
  },
  {
    id: "google-ai-ultra",
    name: "Google AI Ultra",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 75000,
    logoEmoji: "✨", logoColor: "#4285F4", duration: "tháng",
    description: "25.000đ credit, 6TB Google Drive, toàn bộ quyền lợi Antigravity Ultra",
    isNew: true,
  },
  {
    id: "gemini-pro",
    name: "Gemini (Google AI Pro)",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 300000,
    logoEmoji: "🔮", logoColor: "#4285F4", duration: "năm",
    description: "Google AI Pro + 500GB Drive mở rộng + NotebookLM, nâng chính chủ",
    isFeatured: true,
  },
  {
    id: "perplexity-ai",
    name: "Perplexity AI",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 250000,
    logoEmoji: "🔍", logoColor: "#20808D", duration: "năm",
    description: "Nâng chính chủ qua mail — bảo hành 1–4 tháng theo gói chọn",
  },
  {
    id: "copilot",
    name: "Copilot",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 70000,
    logoEmoji: "💡", logoColor: "#0078d4", duration: "tháng",
    description: "Tài khoản shop cấp 70k/tháng, hoặc nâng chính chủ 399k/tháng",
  },
  {
    id: "super-grok",
    name: "Super Grok AI",
    categoryId: "ai-chat", categoryName: "AI Chat",
    price: 150000,
    logoEmoji: "⚡", logoColor: "#1a1a1a", duration: "tháng",
    description: "Từ 150k/tháng — gói nâng chính chủ 300k/tháng, cần mail + pass, ổn định bảo hành đủ hạn",
  },

  // ── ÂM NHẠC (3) ──────────────────────────────────────────────────────────────
  {
    id: "spotify-premium",
    name: "Spotify Family",
    categoryId: "am-nhac", categoryName: "Âm nhạc",
    price: 395000,
    logoEmoji: "🎵", logoColor: "#1DB954", duration: "năm",
    description: "Nâng tài khoản cá nhân khách, nâng trước giao dịch sau, bảo hành đủ hạn",
    isFeatured: true,
  },
  {
    id: "apple-music",
    name: "Apple Music",
    categoryId: "am-nhac", categoryName: "Âm nhạc",
    price: 300000,
    logoEmoji: "🎶", logoColor: "#fc3c44", duration: "năm",
    description: "Nâng tài khoản cá nhân khách, nâng trước giao dịch sau, bảo hành đủ hạn",
  },
  {
    id: "qobuz",
    name: "Qobuz",
    categoryId: "am-nhac", categoryName: "Âm nhạc",
    price: 650000,
    logoEmoji: "🎼", logoColor: "#0c4a6e", duration: "3 tháng",
    description: "Nâng chính chủ, bảo hành list nhạc và đủ hạn, nhạc Hi-Res lossless",
  },

  // ── DESIGN & PHOTO (7) ───────────────────────────────────────────────────────
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 110000,
    logoEmoji: "🎬", logoColor: "#000000", duration: "tháng",
    description: "Tài khoản shop cấp riêng tư, đổi được pass, dùng 2 thiết bị cùng lúc",
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 200000,
    logoEmoji: "🖼️", logoColor: "#00C4CC", duration: "năm",
    description: "Nâng chính chủ, sử dụng riêng tư, có bill thanh toán gói",
  },
  {
    id: "adobe-all-app",
    name: "Adobe All App",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 120000,
    logoEmoji: "🎭", logoColor: "#FF0000", duration: "tháng",
    description: "Login cố định qua Ultraview/Teamview, dùng 2 PC/Mac cùng lúc, hỗ trợ Nano Banana",
  },
  {
    id: "lightroom-pro",
    name: "Lightroom Pro",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 350000,
    logoEmoji: "📷", logoColor: "#31A8FF", duration: "năm",
    description: "Nâng chính chủ, chỉ cần tài khoản khách, sử dụng trên mobile",
  },
  {
    id: "picsart",
    name: "Picsart Plus",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 260000, originalPrice: 370000,
    logoEmoji: "✏️", logoColor: "#EF5FA7", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn",
    isSale: true,
  },
  {
    id: "vsco-x",
    name: "VSCO X",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 360000,
    logoEmoji: "📸", logoColor: "#111111", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn",
  },
  {
    id: "dazz-cam-pro",
    name: "Dazz Cam Pro",
    categoryId: "design-photo", categoryName: "Design & Photo",
    price: 270000,
    logoEmoji: "🎞️", logoColor: "#c2410c", duration: "3 năm",
    description: "Tài khoản cấp, login cố định 1 thiết bị, bảo hành full thời hạn",
    isNew: true,
  },

  // ── HỌC TẬP (16) ─────────────────────────────────────────────────────────────
  {
    id: "studocu",
    name: "Studocu",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 70000,
    logoEmoji: "📖", logoColor: "#0064FF", duration: "tháng",
    description: "Nâng chính chủ qua mail khách, bảo hành full thời hạn",
  },
  {
    id: "quizlet-plus",
    name: "Quizlet Plus",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 270000,
    logoEmoji: "📋", logoColor: "#4257B2", duration: "năm",
    description: "Nâng chính chủ qua mail khách, bảo hành full thời hạn",
  },
  {
    id: "grammarly-premium",
    name: "Grammarly Premium",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 180000,
    logoEmoji: "✍️", logoColor: "#15C39A", duration: "6 tháng",
    description: "EDU/AI — tài khoản cấp, đổi pass, login 1–5 thiết bị theo gói",
  },
  {
    id: "quillbot-premium",
    name: "Quillbot Premium",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 125000,
    logoEmoji: "🖊️", logoColor: "#5B35D5", duration: "tháng",
    description: "Tài khoản riêng tư, đổi pass, tối đa 5 thiết bị cùng lúc",
  },
  {
    id: "turnitin",
    name: "Turnitin",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 30000,
    logoEmoji: "🔎", logoColor: "#E2001A", duration: "lượt",
    description: "Check đạo văn thường 30k/lượt, check AI+đạo văn 45k/lượt, không lưu bài",
  },
  {
    id: "elsa-speak",
    name: "Elsa Speak Premium",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 450000,
    logoEmoji: "🗣️", logoColor: "#5b21b6", duration: "3 tháng",
    description: "Nâng chính chủ, cần email và pass, bảo hành full thời hạn",
  },
  {
    id: "scribd",
    name: "Scribd",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 70000,
    logoEmoji: "📚", logoColor: "#1E7B85", duration: "tháng",
    description: "Tài khoản shop cấp, sử dụng riêng tư, bảo hành full thời hạn",
  },
  {
    id: "udemy",
    name: "Udemy",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 640000,
    logoEmoji: "🎓", logoColor: "#A435F0", duration: "6 tháng",
    description: "Tài khoản shop cấp, riêng tư, không thay đổi thông tin, bảo hành full",
  },
  {
    id: "coursera-plus",
    name: "Coursera Plus",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 130000,
    logoEmoji: "🏫", logoColor: "#0056D2", duration: "tháng",
    description: "Cấp sẵn, nhận chứng chỉ mang tên mình, học không giới hạn Coursera Plus",
  },
  {
    id: "course-hero",
    name: "Course Hero",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 80000,
    logoEmoji: "🦸", logoColor: "#ED5B21", duration: "5 unlocks",
    description: "80k/5 unlocks — 150k/10 unlocks — 380k/50 unlocks, mở khóa tài liệu học",
  },
  {
    id: "duolingo-super",
    name: "Duolingo Super",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 280000,
    logoEmoji: "🦜", logoColor: "#58CC02", duration: "năm",
    description: "Nâng chính chủ, chỉ cần địa chỉ email khách, bảo hành full thời hạn",
  },
  {
    id: "memrise-pro",
    name: "Memrise Pro",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 450000,
    logoEmoji: "🌱", logoColor: "#4CAF50", duration: "lifetime",
    description: "Nâng chính chủ lifetime, cần tài khoản mới chưa đăng ký, bảo hành 1 năm",
    isNew: true,
  },
  {
    id: "busuu",
    name: "Busuu",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 450000,
    logoEmoji: "🌍", logoColor: "#3ab54a", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, bảo hành full thời hạn",
  },
  {
    id: "quizizz-premium",
    name: "Quizizz Premium",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 450000,
    logoEmoji: "🧩", logoColor: "#8854d0", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, bảo hành full thời hạn",
  },
  {
    id: "codecademy-pro",
    name: "Codecademy",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 330000,
    logoEmoji: "💻", logoColor: "#1F4056", duration: "năm",
    description: "Tài khoản shop cấp, riêng tư, không thay đổi thông tin, bảo hành full",
  },
  {
    id: "wordwall",
    name: "Wordwall",
    categoryId: "hoc-tap", categoryName: "Học tập",
    price: 60000, originalPrice: 75000,
    logoEmoji: "🎯", logoColor: "#e97b17", duration: "tháng",
    description: "Gói Standard 60k hoặc Pro 75k/tháng, nâng chính chủ hoặc cấp tài khoản",
    isSale: true,
  },

  // ── PHIM ẢNH (4) ─────────────────────────────────────────────────────────────
  {
    id: "netflix-premium",
    name: "Netflix",
    categoryId: "phim-anh", categoryName: "Phim ảnh",
    price: 75000,
    logoEmoji: "🎬", logoColor: "#E50914", duration: "tháng",
    description: "Xem cùng lúc 1 thiết bị, profile riêng có mã pin, chất lượng 4K Ultra HD",
    isFeatured: true,
  },
  {
    id: "iqiyi",
    name: "iQiyi",
    categoryId: "phim-anh", categoryName: "Phim ảnh",
    price: 100000,
    logoEmoji: "🐼", logoColor: "#00b44c", duration: "3 tháng",
    description: "Tài khoản shop cấp, đăng nhập cố định 1 thiết bị, bảo hành full thời hạn",
  },
  {
    id: "youku",
    name: "Youku",
    categoryId: "phim-anh", categoryName: "Phim ảnh",
    price: 180000,
    logoEmoji: "📺", logoColor: "#e60012", duration: "năm",
    description: "Tài khoản cấp dùng chung, xem cùng lúc 1 thiết bị, hoặc nâng chính chủ",
  },
  {
    id: "disney-plus",
    name: "Disney+",
    categoryId: "phim-anh", categoryName: "Phim ảnh",
    price: 75000,
    logoEmoji: "🏰", logoColor: "#113CCF", duration: "tháng",
    description: "Dùng VPN để xem, đăng nhập 1 thiết bị cố định, bảo hành theo hạn gói",
    isFeatured: true,
  },

  // ── VĂN PHÒNG (9) ────────────────────────────────────────────────────────────
  {
    id: "microsoft-365",
    name: "Office 365 Family",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 270000,
    logoEmoji: "📊", logoColor: "#D83B01", duration: "năm",
    description: "270k/năm/slot + 1TB OneDrive, add thẳng vào mail đang dùng, bảo mật an toàn",
    isFeatured: true,
  },
  {
    id: "autoDesk",
    name: "AutoDesk",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 320000, originalPrice: 850000,
    logoEmoji: "🏗️", logoColor: "#0696D7", duration: "năm",
    description: "320k/1app — 420k/2app — 520k/3app — 850k/All App, tài khoản riêng tư",
    isSale: true,
  },
  {
    id: "key-windows",
    name: "Key Windows 10/11",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 190000,
    logoEmoji: "🪟", logoColor: "#0078d4", duration: "năm",
    description: "Kích hoạt 1 PC vĩnh viễn, Windows 10 hoặc Windows 11",
  },
  {
    id: "zoom-pro",
    name: "Zoom Pro",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 180000,
    logoEmoji: "📹", logoColor: "#2D8CFF", duration: "tháng",
    description: "Nâng chính chủ qua tài khoản khách, họp 100 người, bảo hành đủ hạn",
  },
  {
    id: "notion-plus",
    name: "Notion Plus",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 670000, originalPrice: 820000,
    logoEmoji: "📝", logoColor: "#6366f1", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, Plus 670k / Business 820k / Enterprise 1.02tr",
    isSale: true,
  },
  {
    id: "filmora",
    name: "Wondershare Filmora",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 600000,
    logoEmoji: "🎥", logoColor: "#00b386", duration: "năm",
    description: "Tài khoản riêng tư, đổi được mật khẩu, thêm email thứ 2 tự quản lý",
  },
  {
    id: "camscanner",
    name: "CamScanner",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 450000,
    logoEmoji: "📄", logoColor: "#0066cc", duration: "năm",
    description: "Nâng chính chủ qua tài khoản khách, bảo mật an toàn, bảo hành đủ hạn",
  },
  {
    id: "discord-nitro",
    name: "Discord Nitro",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 880000,
    logoEmoji: "🎮", logoColor: "#5865F2", duration: "năm",
    description: "Nâng chính chủ qua tài khoản khách, bảo hành đủ hạn",
    isNew: true,
  },
  {
    id: "linkedin-premium",
    name: "LinkedIn Premium",
    categoryId: "van-phong", categoryName: "Văn phòng",
    price: 550000,
    logoEmoji: "💼", logoColor: "#0A66C2", duration: "3 tháng",
    description: "Career 550k/3tháng hoặc Business 750k/3tháng, nâng chính chủ, bảo hành đủ hạn",
  },

  // ── VPN (4) ───────────────────────────────────────────────────────────────────
  {
    id: "nordvpn",
    name: "NordVPN",
    categoryId: "vpn", categoryName: "VPN",
    price: 250000,
    logoEmoji: "🛡️", logoColor: "#4687FF", duration: "năm",
    description: "Tài khoản cấp 250k/năm, login cố định 2 thiết bị, hoặc nâng chính chủ 950k",
  },
  {
    id: "hma-vpn",
    name: "HMA VPN",
    categoryId: "vpn", categoryName: "VPN",
    price: 250000,
    logoEmoji: "🐴", logoColor: "#F7941D", duration: "năm",
    description: "Tài khoản cấp 250k/năm (3 thiết bị) hoặc 65k/tháng (5 thiết bị, giao acc)",
  },
  {
    id: "expressvpn",
    name: "ExpressVPN",
    categoryId: "vpn", categoryName: "VPN",
    price: 250000,
    logoEmoji: "⚡", logoColor: "#DA3940", duration: "năm",
    description: "Tài khoản cấp 250k/năm (3 thiết bị) hoặc 65k/tháng (5 thiết bị), bảo hành full",
  },
  {
    id: "ipvanish-vpn",
    name: "IP Vanish VPN",
    categoryId: "vpn", categoryName: "VPN",
    price: 250000,
    logoEmoji: "🔒", logoColor: "#6D4AFF", duration: "năm",
    description: "Tài khoản cấp, login cố định 1 thiết bị, bảo hành full thời hạn",
  },

  // ── TIỆN ÍCH KHÁC (4) ────────────────────────────────────────────────────────
  {
    id: "icloud-iphone",
    name: "iCloud iPhone",
    categoryId: "tien-ich", categoryName: "Tiện ích khác",
    price: 450000,
    logoEmoji: "☁️", logoColor: "#3b82f6", duration: "6 tháng",
    description: "Nâng chính chủ 400GB, chỉ cần địa chỉ iCloud khách, bảo hành đủ hạn",
    isNew: true,
  },
  {
    id: "truecaller-premium",
    name: "TrueCaller Premium",
    categoryId: "tien-ich", categoryName: "Tiện ích khác",
    price: 200000,
    logoEmoji: "📞", logoColor: "#0099cc", duration: "năm",
    description: "Nâng chính chủ, cần tài khoản khách, bảo mật an toàn, bảo hành đủ hạn",
  },
  {
    id: "bumble-premium",
    name: "Bumble Premium",
    categoryId: "tien-ich", categoryName: "Tiện ích khác",
    price: 79000,
    logoEmoji: "🐝", logoColor: "#FFB300", duration: "tuần",
    description: "79k/tuần — 159k/tháng — 700k/vĩnh viễn, nâng chính chủ tài khoản khách",
  },
  {
    id: "tinder",
    name: "Tinder",
    categoryId: "tien-ich", categoryName: "Tiện ích khác",
    price: 130000,
    logoEmoji: "🔥", logoColor: "#FD5564", duration: "tháng",
    description: "Platinum 130k/tháng hoặc Gold 140k/tháng, nâng chính chủ acc sử dụng trên 1 tháng",
  },
];

export const featuredProducts = products.filter((p) => p.isFeatured);
