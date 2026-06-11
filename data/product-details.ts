export interface PricingTier {
  duration: string;
  price: number;
  isPopular?: boolean;
  savings?: number;
}

const roundK = (n: number): number => Math.round(n / 1000) * 1000;

export const generatePricingTiers = (monthlyPrice: number): PricingTier[] => [
  { duration: "1 tháng", price: monthlyPrice },
  { duration: "3 tháng", price: roundK(monthlyPrice * 3 * 0.9), savings: 10 },
  { duration: "6 tháng", price: roundK(monthlyPrice * 6 * 0.85), savings: 15, isPopular: true },
  { duration: "1 năm",   price: roundK(monthlyPrice * 12 * 0.8), savings: 20 },
];

export const HOW_TO_BUY = [
  "Chọn gói thời hạn phù hợp với nhu cầu sử dụng",
  "Bấm \"Đặt mua ngay\" hoặc liên hệ Zalo: 0339502155",
  "Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử",
  "Nhận thông tin tài khoản qua Zalo trong 5–15 phút",
];

export const productFeatures: Record<string, string[]> = {
  // ── AI CHAT ──────────────────────────────────────────────────────────────────
  "chatgpt-plus": [
    "Gói share 7 thiết bị: 90k/1 thiết bị — 170k/2 thiết bị — 250k/3 thiết bị cố định/tháng",
    "Gói private: 299k/tháng — tài khoản riêng, toàn quyền kiểm soát",
    "Gói nâng chính chủ: 480k/tháng — khách gửi acc ChatGPT, nâng không lỗi",
    "ChatGPT Business: 550k/tháng — add mail vào workspace shop, dùng độc lập",
  ],
  "claude-ai": [
    "Standard Seat 450k/slot — context 200K, Claude Code, Team workspace",
    "Premium Seat 2.2tr/slot — usage gấp 5 lần, phù hợp công việc cường độ cao",
    "Add trực tiếp bằng Gmail, quản lý team, Connectors tích hợp sẵn",
    "Ưu đãi tốt khi mua số lượng lớn, bảo hành trong suốt thời gian sử dụng",
  ],
  "google-ai-ultra": [
    "Gói 1: 25.000đ credit — 285k/tháng, 6TB Google Drive, Antigravity Ultra",
    "Gói 2: 25.000đ credit — 75k/tháng, toàn quyền lợi Gemini cao cấp",
    "Bảo hành 30 ngày (Gói 1) và 24 giờ (Gói 2) theo điều khoản slot",
    "Lưu ý: sử dụng đúng số credit gói đã chọn, không vượt quá hạn mức",
  ],
  "gemini-pro": [
    "Google AI Pro kèm Gemini + 500GB Drive mở rộng + NotebookLM",
    "Nâng qua family invite — 220k/6 tháng hoặc 300k/năm, ổn định",
    "Chỉ cần địa chỉ email, không cần mật khẩu, bảo mật an toàn",
    "Thêm 500GB Drive chỉ 150k, bảo hành đủ hạn sử dụng",
  ],
  "perplexity-ai": [
    "Nâng chính chủ qua mail — 250k/năm (BH 1 tháng), 350k (BH 2 tháng)",
    "Gói bảo hành cao nhất: 650k/năm — bảo hành đến 4 tháng",
    "AI search engine trả lời trực tiếp với trích dẫn nguồn rõ ràng",
    "Dùng GPT-4, Claude không giới hạn, upload file PDF/CSV phân tích",
  ],
  copilot: [
    "Tài khoản shop cấp 70k/tháng — sử dụng không đổi thông tin",
    "Hoặc nâng chính chủ qua mail 399k/tháng — toàn quyền tài khoản",
    "Copilot AI tích hợp Microsoft 365: Word, Excel, Outlook thông minh",
    "Bảo hành đủ hạn, bảo mật an toàn cho cả 2 loại gói",
  ],
  "super-grok": [
    "Nâng chính chủ 300k/tháng — cần mail và pass tài khoản cần nâng",
    "Grok AI từ xAI, khả năng phân tích real-time data từ X (Twitter)",
    "Truy cập Super Grok không giới hạn, Aurora image generation",
    "Ổn định, bảo hành đủ hạn sử dụng, hỗ trợ nhanh khi có vấn đề",
  ],

  // ── ÂM NHẠC ──────────────────────────────────────────────────────────────────
  "spotify-premium": [
    "Spotify Family Premium — nâng tài khoản cá nhân khách, nâng trước giao dịch sau",
    "395k/năm hoặc 245k/6 tháng — giá tốt nhất thị trường",
    "Nghe nhạc không quảng cáo, tải offline, âm thanh 320kbps",
    "100 triệu+ bài hát và podcast, bảo hành đủ hạn sử dụng",
  ],
  "apple-music": [
    "300k/năm — nâng tài khoản cá nhân khách, nâng trước giao dịch sau",
    "100 triệu bài hát với Lossless Audio và Dolby Atmos Spatial",
    "Lyrics đồng bộ thời gian thực, tích hợp Siri và Apple Watch",
    "Bảo hành đủ hạn, bảo mật tuyệt đối tài khoản khách",
  ],
  qobuz: [
    "650k/3 tháng hoặc 970k/năm — âm nhạc Hi-Res lossless đỉnh cao",
    "Nâng chính chủ, bảo hành list nhạc yêu thích và đủ thời hạn gói",
    "Chất lượng FLAC 24-bit/192kHz — tốt hơn CD, hơn Spotify",
    "Thư viện 100 triệu+ track, liner notes và thông tin album đầy đủ",
  ],

  // ── DESIGN & PHOTO ────────────────────────────────────────────────────────────
  "capcut-pro": [
    "Shop cấp 110k/tháng — đổi pass, dùng riêng tư tối đa 2 thiết bị cùng lúc",
    "Shop cấp fam (chung cloud, không dùng web): 300k/6 tháng; 880k/năm — dùng 2-3 thiết bị cùng lúc, ĐT & PC",
    "Gói chính chủ cá nhân 350k/5.5 tháng — gửi gmail chưa đăng ký CapCut, max 3 thiết bị",
    "Edit video AI: auto-captions, remove background, templates chuyên nghiệp",
  ],
  "canva-pro": [
    "200k/năm (PRO) hoặc 125k/năm (EDU) — nâng chính chủ mail khách",
    "75 triệu+ template, Background Remover AI, Magic Studio tích hợp",
    "Brand Kit lưu màu, font, logo thương hiệu — 1TB cloud storage",
    "Có bill thanh toán gói, bảo hành đủ hạn, sử dụng riêng tư 100%",
  ],
  "adobe-all-app": [
    "120k/tháng hoặc 225k/3 tháng — login qua Ultraview/Teamview cố định",
    "Dùng 2 PC/Mac cùng lúc, bao gồm hỗ trợ Nano Banana AI",
    "Photoshop, Illustrator, Premiere Pro, After Effects và 20+ ứng dụng",
    "Bảo hành 24h nếu acc lỗi — yêu cầu tự sao lưu dữ liệu của bạn",
  ],
  "lightroom-pro": [
    "350k/năm — nâng chính chủ, chỉ cần tài khoản khách, dùng trên mobile",
    "AI Masking tách nền, bầu trời, đối tượng tự động cực nhanh",
    "Denoise AI giảm nhiễu ảnh RAW, đồng bộ chỉnh sửa trên tất cả thiết bị",
    "Bảo hành đủ hạn, bảo mật an toàn tuyệt đối",
  ],
  picsart: [
    "Plus 260k/năm hoặc Pro 370k/năm — nâng chính chủ tài khoản khách",
    "AI Remove Background, AI Photo Enhancer, tạo ảnh AI từ text",
    "3000+ templates thiết kế, hiệu ứng và sticker độc quyền",
    "Bảo hành đủ hạn, bảo mật an toàn tài khoản",
  ],
  "vsco-x": [
    "360k/năm — nâng chính chủ, chỉ cần tài khoản khách",
    "200+ preset cao cấp từ nhiếp ảnh gia chuyên nghiệp toàn cầu",
    "Video editing tools, Montage tự động ghép clip thành story",
    "Bảo hành đủ hạn, bảo mật an toàn tài khoản",
  ],
  "dazz-cam-pro": [
    "270k/3 năm — tài khoản cấp, login cố định 1 thiết bị",
    "Mô phỏng máy ảnh film vintage: Kodak, Fujifilm, Polaroid chân thực",
    "Light leaks, grain và dust overlay tạo cảm giác analog hoàn hảo",
    "Bảo hành full 3 năm — không thay đổi thông tin đăng nhập",
  ],

  // ── HỌC TẬP ──────────────────────────────────────────────────────────────────
  studocu: [
    "70k/tháng, 150k/3 tháng, 240k/6 tháng, 360k/12 tháng",
    "Nâng chính chủ qua mail khách — bảo hành full thời hạn",
    "Tải tài liệu học không giới hạn từ sinh viên khắp thế giới",
    "AI Study Tools: giải thích, tóm tắt tài liệu học tự động",
  ],
  "quizlet-plus": [
    "270k/năm — nâng chính chủ qua mail khách, bảo hành full",
    "AI Flashcard Generator tự động tạo câu hỏi từ nội dung bài học",
    "Offline mode học không cần internet, thống kê tiến độ chi tiết",
    "Expert Solutions: đáp án giải thích từng bước cho 300M+ bài tập",
  ],
  "grammarly-premium": [
    "Loại 1 EDU: 180k/6th, 280k/năm — Loại 2: 180k/3th, 240k/6th, 380k/năm — Loại 3 AI: 210k/3th, 270k/6th, 420k/năm",
    "Tài khoản cấp đổi pass dùng riêng tư, login tối đa 5 thiết bị",
    "Sửa ngữ pháp, Tone Detector, Clarity Rewrites, Plagiarism Checker",
    "Bảo hành full thời hạn cho tất cả loại tài khoản",
  ],
  "quillbot-premium": [
    "Private 125k/tháng — đổi pass, tối đa 5 thiết bị cùng lúc",
    "Share 280k/6 tháng hoặc 320k/năm — cố định 1–2 thiết bị",
    "Paraphrase không giới hạn, Summarizer, Grammar Checker AI mạnh",
    "Bảo hành full thời hạn, bảo mật an toàn tài khoản",
  ],
  turnitin: [
    "30k/lượt (đạo văn thường) — >80 trang: 35k/lượt — 45k/lượt (đạo văn + AI detection)",
    "Check file lẻ: không giới hạn số trang, setting theo ý, không lưu bài",
    "Student account 150k/tháng: 10 check/ngày, tài khoản riêng tư",
    "Hạ đạo văn AI: gửi kết quả check AI sẽ được báo giá",
  ],
  "elsa-speak": [
    "Pro 580k/năm — Premium 450k/3 tháng hoặc 900k/năm",
    "Nâng chính chủ: cần email và pass — bảo hành full thời hạn",
    "AI phát hiện lỗi phát âm tiếng Anh theo từng âm tiết cực chính xác",
    "5000+ bài học phát âm, ngữ điệu và hội thoại tự nhiên",
  ],
  scribd: [
    "70k/tháng — tài khoản shop cấp, sử dụng riêng tư",
    "Hàng triệu sách, tài liệu, audiobook, sheet nhạc không giới hạn",
    "Đọc offline, tóm tắt AI, đề xuất nội dung cá nhân hóa",
    "Bảo hành full thời hạn",
  ],
  udemy: [
    "640k/6 tháng — tài khoản shop cấp, riêng tư",
    "Hàng nghìn khóa học lập trình, marketing, thiết kế, kinh doanh",
    "Certificate khi hoàn thành, cập nhật nội dung liên tục",
    "Không thay đổi thông tin — bảo hành full thời hạn",
  ],
  "coursera-plus": [
    "130k/tháng, 550k/6 tháng, 750k/12 tháng — cấp sẵn, độc quyền tại VN",
    "Nhận chứng chỉ mang tên mình sau khi tốt nghiệp khóa học",
    "Học không giới hạn 7000+ khóa có tag Coursera Plus từ MIT, Stanford",
    "Không thay đổi Email — đổi password vẫn được",
  ],
  "course-hero": [
    "80k/5 unlocks — 150k/10 unlocks — 380k/50 unlocks",
    "Mở khóa tài liệu, đáp án bài tập từ sinh viên khắp thế giới",
    "Giải thích từng bước, AI Tutor hỗ trợ giải bài tập",
    "Đặt unlock linh hoạt, giao hàng nhanh trong ngày",
  ],
  "duolingo-super": [
    "280k/năm — nâng chính chủ, chỉ cần địa chỉ email",
    "Học ngoại ngữ không quảng cáo, Unlimited Hearts không bị giới hạn sai",
    "Streak Repair, tải bài học offline, thống kê tiến độ chi tiết",
    "Bảo hành full thời hạn",
  ],
  "memrise-pro": [
    "450k/lifetime — nâng chính chủ, cần tài khoản mới chưa đăng ký",
    "Học ngôn ngữ bằng video thực tế từ người bản địa",
    "AI-powered spaced repetition tối ưu hóa thời điểm ôn tập",
    "Bảo hành 1 năm — acc new, chưa qua đăng ký trước đó",
  ],
  busuu: [
    "450k/năm — nâng chính chủ, cần tài khoản khách",
    "Học 12 ngoại ngữ với giáo viên bản địa phản hồi bài viết",
    "Official certificates được công nhận bởi các công ty quốc tế",
    "Bảo hành full thời hạn, bảo mật an toàn",
  ],
  "quizizz-premium": [
    "450k/năm — nâng chính chủ, cần tài khoản khách",
    "Tạo quiz, flashcard, bài học tương tác cho học sinh/sinh viên",
    "AI tự động tạo câu hỏi từ tài liệu PDF, PowerPoint của bạn",
    "Bảo hành full thời hạn, bảo mật an toàn",
  ],
  "codecademy-pro": [
    "330k/năm — tài khoản shop cấp, riêng tư",
    "Lộ trình học Web Dev, Data Science, Cybersecurity, AI thực tế",
    "2000+ bài tập và dự án tương tác, Interview Prep kỹ thuật",
    "Không thay đổi thông tin — bảo hành full thời hạn",
  ],
  wordwall: [
    "Stand 60k/tháng hoặc 399k/năm — Pro 75k/tháng hoặc 600k/năm",
    "Nâng chính chủ hoặc cấp tài khoản theo yêu cầu",
    "Tạo 40+ loại hoạt động tương tác: quiz, match, crossword, anagram",
    "Bảo hành full thời hạn",
  ],

  // ── PHIM ẢNH ──────────────────────────────────────────────────────────────────
  "netflix-premium": [
    "Loại 1: 75k/tháng — 210k/3 tháng — 420k/6 tháng (ổn định, có web lấy mã hộ gia đình)",
    "Loại 2: 85k/tháng — 250k/3 tháng (siêu ổn định, có bot và web lấy mã riêng)",
    "Loại 3: 75k/tháng (order trước 20-30 phút, không cần cập nhật hộ gia đình)",
    "Cả 3 loại: xem 1 thiết bị, profile riêng có mã PIN, 4K Ultra HD, bảo hành full",
  ],
  iqiyi: [
    "100k/3 tháng hoặc 300k/năm — tài khoản shop cấp, đăng nhập 1 thiết bị",
    "Gói nâng chính chủ: 650k/12 tháng — toàn quyền tài khoản cá nhân",
    "Phim Hoa ngữ, Hàn Quốc, anime cực phong phú, chất lượng 4K",
    "Bảo hành full thời hạn",
  ],
  youku: [
    "Tài khoản cấp 180k/năm — dùng chung, xem 1 thiết bị cùng lúc",
    "Nâng chính chủ 380k/năm — cần ID+pass, bảo hành theo hạn gói",
    "Kho phim Trung Quốc khổng lồ, độc quyền Youku Originals",
    "Bảo hành full thời hạn",
  ],
  "disney-plus": [
    "75k/tháng, 190k/3 tháng, 340k/6 tháng, 550k/12 tháng",
    "Dùng VPN để xem nội dung đầy đủ, đăng nhập 1 thiết bị cố định",
    "Marvel, Star Wars, Pixar, Disney Originals 4K Ultra HD",
    "Bảo hành theo hạn gói — không thay đổi thông tin tài khoản",
  ],

  // ── VĂN PHÒNG ────────────────────────────────────────────────────────────────
  "microsoft-365": [
    "270k/năm/slot + 1TB OneDrive — add thẳng vào mail đang sử dụng",
    "Hoặc 890k/năm tài khoản chủ fam, add thêm 5 người, bảo mật an toàn",
    "Word, Excel, PowerPoint, OneNote, Outlook đầy đủ bản desktop",
    "Bảo hành full thời hạn",
  ],
  autoDesk: [
    "320k/1app — 420k/2app — 520k/3app — 850k/All App/năm",
    "AutoCAD, Revit, 3ds Max, Maya, Inventor và 100+ phần mềm khác",
    "Tài khoản riêng tư, cấp trực tiếp, bảo hành đủ hạn",
    "Bảo hành đủ hạn — hỗ trợ chuyển app khi cần",
  ],
  "key-windows": [
    "190k/năm — kích hoạt vĩnh viễn 1 PC",
    "Windows 10 Home/Pro hoặc Windows 11 Home/Pro",
    "Key chính hãng Microsoft, kích hoạt online tức thì",
    "Hỗ trợ kích hoạt nếu gặp lỗi, bảo hành 1 năm",
  ],
  "zoom-pro": [
    "180k/tháng (100 người) hoặc 400k/tháng (300 người)",
    "Nâng chính chủ qua tài khoản khách — họp không giới hạn thời gian",
    "Cloud Recording 5GB, AI Companion tóm tắt và tạo action items",
    "Bảo hành đủ hạn, bảo mật an toàn",
  ],
  "notion-plus": [
    "Plus 670k — Business 820k — Enterprise 1.02tr/năm",
    "Nâng chính chủ qua tài khoản khách — blocks và file không giới hạn",
    "Database, wiki, kanban, calendar — all-in-one workspace mạnh mẽ",
    "Bảo hành đủ hạn, bảo mật an toàn",
  ],
  filmora: [
    "600k/năm/thiết bị — tài khoản riêng tư, đổi được mật khẩu",
    "Thêm email thứ 2 tự quản lý, +150k/thiết bị thêm",
    "AI Video Editing: auto-cut, color match, motion tracking thông minh",
    "Export 4K, không watermark, hàng nghìn template và effect cao cấp",
  ],
  camscanner: [
    "450k/năm — nâng chính chủ qua tài khoản khách",
    "Scan tài liệu AI: làm thẳng, nét, loại bỏ bóng tự động",
    "OCR nhận diện văn bản từ ảnh, PDF, hỗ trợ tiếng Việt",
    "Bảo mật an toàn, bảo hành đủ hạn",
  ],
  "discord-nitro": [
    "880k/năm — nâng chính chủ qua tài khoản khách",
    "Upload file đến 500MB, stream 4K 60fps, server boost x2",
    "Custom emoji, avatar, profile, banner và sticker độc quyền",
    "Bảo mật an toàn, bảo hành đủ hạn",
  ],
  "linkedin-premium": [
    "Business: 319k/1th, 750k/3th, 1.9tr/năm — Career: 550k/3th, 1.25tr/năm",
    "Nâng chính chủ tài khoản đang sử dụng — bảo hành đầy đủ hạn",
    "InMail credits, xem ai xem profile, AI Resume & Cover Letter",
    "LinkedIn Learning 21000+ khóa học, Job Insights đầy đủ",
  ],

  // ── VPN ───────────────────────────────────────────────────────────────────────
  nordvpn: [
    "Tài khoản cấp 250k/năm, login cố định 2 thiết bị — không đổi thông tin",
    "Hoặc nâng chính chủ 950k/năm — bảo hành full thời hạn",
    "5500+ server tại 60 quốc gia, Threat Protection chặn malware",
    "Double VPN, Kill Switch, Meshnet kết nối thiết bị như LAN ảo",
  ],
  "hma-vpn": [
    "250k/năm (3 thiết bị login cố định) hoặc 65k/tháng (5 thiết bị)",
    "Gói 65k/tháng: giao cả tài khoản, tự quản lý",
    "HMA VPN 290+ quốc gia, IP Shuffle tự động thay IP theo lịch",
    "Bảo hành full thời hạn theo gói đã chọn",
  ],
  expressvpn: [
    "250k/năm (3 thiết bị cố định) hoặc 65k/tháng (5 thiết bị, giao acc)",
    "Lightway Protocol: nhanh hơn OpenVPN 4x, tiết kiệm pin",
    "3000+ server tại 94 quốc gia, Smart DNS cho Smart TV",
    "Bảo hành full thời hạn, bảo mật an toàn",
  ],
  "ipvanish-vpn": [
    "250k/năm — tài khoản cấp, login cố định 1 thiết bị",
    "2200+ server tại 75 quốc gia, tốc độ cao ổn định",
    "No-logs policy, SOCKS5 proxy cho torrent, Kill Switch",
    "Bảo hành full thời hạn — không thay đổi thông tin tài khoản",
  ],

  // ── TIỆN ÍCH KHÁC ─────────────────────────────────────────────────────────────
  "icloud-iphone": [
    "450k/6 tháng hoặc 650k/12 tháng — nâng chính chủ 400GB",
    "Chỉ cần địa chỉ iCloud, không cần mật khẩu — bảo mật tuyệt đối",
    "Đồng bộ ảnh, video, danh bạ, ghi chú tự động mọi thiết bị Apple",
    "Bảo hành đủ hạn, an toàn cho toàn bộ dữ liệu cá nhân",
  ],
  "truecaller-premium": [
    "200k/năm — nâng chính chủ, cần tài khoản khách",
    "Who Viewed My Profile, Ghost Call ẩn danh, No Ads",
    "AI-powered spam block tự động, Contact Requests không giới hạn",
    "Bảo hành đủ hạn, bảo mật an toàn",
  ],
  "bumble-premium": [
    "79k/tuần — 159k/tháng — 300k/3 tháng — 450k/6 tháng — 700k/vĩnh viễn",
    "Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn",
    "SuperSwipe, Spotlight, Rematch, Beeline — toàn bộ tính năng Premium",
    "Bảo hành đủ hạn sử dụng, bảo mật an toàn tài khoản",
  ],
  tinder: [
    "Platinum 130k/tháng, 350k/6 tháng — Gold 140k/tháng, 420k/6 tháng",
    "Nâng chính chủ, cần tài khoản sử dụng trên 1 tháng",
    "Unlimited Likes, Top Picks, Rewind, Boost và See Who Likes You",
    "Bảo hành đủ hạn, bảo mật an toàn tài khoản",
  ],
};
