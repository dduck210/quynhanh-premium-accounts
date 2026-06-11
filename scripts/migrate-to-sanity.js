/**
 * Data migration script: push all static TS data into Sanity CMS.
 * Usage: SANITY_WRITE_TOKEN=<token> node scripts/migrate-to-sanity.js
 *
 * Get a write token at: https://www.sanity.io/manage → project → API → Tokens → Add API token (Editor role)
 */

const { createClient } = require('@sanity/client')

const PROJECT_ID = 'sdneme9k'
const DATASET = 'production'
const WRITE_TOKEN = process.env.SANITY_WRITE_TOKEN

if (!WRITE_TOKEN) {
  console.error('Set SANITY_WRITE_TOKEN env var first.')
  console.error('Get it at: https://www.sanity.io/manage → project → API → Tokens')
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: '2024-01-01',
  token: WRITE_TOKEN,
  useCdn: false,
})

// ── DATA ────────────────────────────────────────────────────────────────────

const categories = [
  { id: 'ai-chat',      name: 'AI Chat',         icon: 'Bot',       bgColor: 'bg-purple-100', textColor: 'text-purple-700' },
  { id: 'am-nhac',      name: 'Âm nhạc',          icon: 'Music',     bgColor: 'bg-green-100',  textColor: 'text-green-700'  },
  { id: 'design-photo', name: 'Design & Photo',   icon: 'Palette',   bgColor: 'bg-pink-100',   textColor: 'text-pink-700'   },
  { id: 'hoc-tap',      name: 'Học tập',           icon: 'BookOpen',  bgColor: 'bg-blue-100',   textColor: 'text-blue-700'   },
  { id: 'phim-anh',     name: 'Phim ảnh',          icon: 'Film',      bgColor: 'bg-red-100',    textColor: 'text-red-700'    },
  { id: 'tien-ich',     name: 'Tiện ích khác',     icon: 'Zap',       bgColor: 'bg-yellow-100', textColor: 'text-yellow-700' },
  { id: 'van-phong',    name: 'Văn phòng',         icon: 'Briefcase', bgColor: 'bg-indigo-100', textColor: 'text-indigo-700' },
  { id: 'vpn',          name: 'VPN',               icon: 'Shield',    bgColor: 'bg-slate-100',  textColor: 'text-slate-700'  },
]

const pricingTiers = {
  'chatgpt-plus':      [{ duration: 'tháng', label: 'Share 1 thiết bị', price: 90000 }, { duration: 'tháng', label: 'Share 2 thiết bị', price: 170000 }, { duration: 'tháng', label: 'Share 3 thiết bị', price: 250000 }, { duration: 'tháng', label: 'Private', price: 299000, isPopular: true }],
  'claude-ai':         [{ duration: 'tháng', label: 'Standard Seat', price: 450000, isPopular: true }, { duration: 'tháng', label: 'Premium Seat', price: 2200000 }],
  'google-ai-ultra':   [{ duration: 'tháng', label: 'Gói 2 (75k credit)', price: 75000, isPopular: true }, { duration: 'tháng', label: 'Gói 1 (285k credit)', price: 285000 }],
  'gemini-pro':        [{ duration: '6 tháng', price: 220000 }, { duration: '1 năm', price: 300000, isPopular: true }],
  'perplexity-ai':     [{ duration: '1 năm', label: 'BH 1 tháng', price: 250000, isPopular: true }, { duration: '1 năm', label: 'BH 2 tháng', price: 350000 }, { duration: '1 năm', label: 'BH 4 tháng', price: 650000 }],
  'copilot':           [{ duration: 'tháng', label: 'Tài khoản cấp', price: 70000, isPopular: true }, { duration: 'tháng', label: 'Nâng chính chủ', price: 399000 }],
  'super-grok':        [{ duration: '1 tháng', price: 300000, isPopular: true }],
  'spotify-premium':   [{ duration: '6 tháng', price: 245000 }, { duration: '1 năm', price: 395000, isPopular: true }],
  'apple-music':       [{ duration: '1 năm', price: 300000, isPopular: true }],
  'qobuz':             [{ duration: '3 tháng', price: 650000, isPopular: true }, { duration: '1 năm', price: 970000 }],
  'capcut-pro':        [{ duration: 'tháng', price: 110000 }, { duration: '6 tháng', price: 300000, isPopular: true }, { duration: '1 năm', price: 880000 }],
  'canva-pro':         [{ duration: '1 năm', label: 'EDU', price: 125000, isPopular: true }, { duration: '1 năm', label: 'PRO', price: 200000 }],
  'adobe-all-app':     [{ duration: '1 tháng', price: 120000, isPopular: true }, { duration: '3 tháng', price: 225000 }],
  'lightroom-pro':     [{ duration: '1 năm', price: 350000, isPopular: true }],
  'picsart':           [{ duration: '1 năm', label: 'Plus', price: 260000, isPopular: true }, { duration: '1 năm', label: 'Pro', price: 370000 }],
  'vsco-x':            [{ duration: '1 năm', price: 360000, isPopular: true }],
  'dazz-cam-pro':      [{ duration: '3 năm', price: 270000, isPopular: true }],
  'studocu':           [{ duration: '1 tháng', price: 70000 }, { duration: '3 tháng', price: 150000 }, { duration: '6 tháng', price: 240000, isPopular: true }, { duration: '1 năm', price: 360000 }],
  'quizlet-plus':      [{ duration: '1 năm', price: 270000, isPopular: true }],
  'grammarly-premium': [{ duration: '6 tháng', price: 180000, isPopular: true }, { duration: '1 năm', price: 280000 }],
  'quillbot-premium':  [{ duration: 'tháng', price: 125000 }, { duration: '6 tháng', price: 280000, isPopular: true }, { duration: '1 năm', price: 320000 }],
  'turnitin':          [{ duration: 'lượt', label: 'Đạo văn thường', price: 30000 }, { duration: 'lượt', label: 'Đạo văn + AI check', price: 45000, isPopular: true }, { duration: 'tháng', label: 'Student (10 lượt/ngày)', price: 150000 }],
  'elsa-speak':        [{ duration: '3 tháng', label: 'ELSA Premium', price: 450000, isPopular: true }, { duration: '1 năm', label: 'ELSA Pro', price: 580000 }, { duration: '1 năm', label: 'ELSA Premium', price: 900000 }],
  'scribd':            [{ duration: '1 tháng', price: 70000, isPopular: true }],
  'udemy':             [{ duration: '6 tháng', price: 640000, isPopular: true }],
  'coursera-plus':     [{ duration: 'tháng', price: 130000 }, { duration: '6 tháng', price: 550000, isPopular: true }, { duration: '1 năm', price: 750000 }],
  'course-hero':       [{ duration: '5 unlocks', price: 80000 }, { duration: '10 unlocks', price: 150000, isPopular: true }, { duration: '50 unlocks', price: 380000 }],
  'duolingo-super':    [{ duration: '1 năm', price: 280000, isPopular: true }],
  'memrise-pro':       [{ duration: 'Lifetime', price: 450000, isPopular: true }],
  'busuu':             [{ duration: '1 năm', price: 450000, isPopular: true }],
  'quizizz-premium':   [{ duration: '1 năm', price: 450000, isPopular: true }],
  'codecademy-pro':    [{ duration: '1 năm', price: 330000, isPopular: true }],
  'wordwall':          [{ duration: 'tháng', label: 'Standard', price: 60000, isPopular: true }, { duration: '1 năm', label: 'Standard', price: 399000 }],
  'netflix-premium':   [{ duration: '1 tháng', price: 75000, isPopular: true }, { duration: '3 tháng', price: 210000 }, { duration: '6 tháng', price: 420000 }],
  'iqiyi':             [{ duration: '3 tháng', price: 100000, isPopular: true }, { duration: '1 năm', price: 300000 }],
  'youku':             [{ duration: '1 năm', label: 'Dùng chung', price: 180000, isPopular: true }, { duration: '1 năm', label: 'Chính chủ', price: 380000 }],
  'disney-plus':       [{ duration: '1 tháng', price: 75000 }, { duration: '3 tháng', price: 190000 }, { duration: '6 tháng', price: 340000, isPopular: true }, { duration: '1 năm', price: 550000 }],
  'microsoft-365':     [{ duration: '1 năm', label: 'Slot cá nhân', price: 270000, isPopular: true }, { duration: '1 năm', label: 'Gói Family (5 người)', price: 890000 }],
  'autoDesk':          [{ duration: '1 năm', label: '1 App', price: 320000, isPopular: true }, { duration: '1 năm', label: '2 App', price: 420000 }, { duration: '1 năm', label: '3 App', price: 520000 }, { duration: '1 năm', label: 'All App', price: 850000 }],
  'key-windows':       [{ duration: 'Vĩnh viễn', price: 190000, isPopular: true }],
  'zoom-pro':          [{ duration: 'tháng', label: '100 người', price: 180000, isPopular: true }, { duration: 'tháng', label: '300 người', price: 400000 }],
  'notion-plus':       [{ duration: '1 năm', label: 'Plus', price: 670000, isPopular: true }, { duration: '1 năm', label: 'Business', price: 820000 }, { duration: '1 năm', label: 'Enterprise', price: 1020000 }],
  'filmora':           [{ duration: '1 năm', price: 600000, isPopular: true }],
  'camscanner':        [{ duration: '1 năm', price: 450000, isPopular: true }],
  'discord-nitro':     [{ duration: '1 năm', price: 880000, isPopular: true }],
  'linkedin-premium':  [{ duration: '3 tháng', label: 'Career', price: 550000, isPopular: true }, { duration: '1 năm', label: 'Career', price: 1250000 }, { duration: '3 tháng', label: 'Business', price: 750000 }, { duration: '1 năm', label: 'Business', price: 1900000 }],
  'nordvpn':           [{ duration: '1 năm', label: 'Tài khoản cấp', price: 250000, isPopular: true }, { duration: '1 năm', label: 'Nâng chính chủ', price: 950000 }],
  'hma-vpn':           [{ duration: 'tháng', price: 65000 }, { duration: '1 năm', price: 250000, isPopular: true }],
  'expressvpn':        [{ duration: 'tháng', price: 65000 }, { duration: '1 năm', price: 250000, isPopular: true }],
  'ipvanish-vpn':      [{ duration: '1 năm', price: 250000, isPopular: true }],
  'icloud-iphone':     [{ duration: '6 tháng', price: 450000, isPopular: true }, { duration: '1 năm', price: 650000 }],
  'truecaller-premium':[{ duration: '1 năm', price: 200000, isPopular: true }],
  'bumble-premium':    [{ duration: 'tuần', price: 79000 }, { duration: 'tháng', price: 159000, isPopular: true }, { duration: '3 tháng', price: 300000 }, { duration: '6 tháng', price: 450000 }],
  'tinder':            [{ duration: 'tháng', label: 'Platinum', price: 130000, isPopular: true }, { duration: '6 tháng', label: 'Platinum', price: 350000 }, { duration: 'tháng', label: 'Gold', price: 140000 }, { duration: '6 tháng', label: 'Gold', price: 420000 }],
}

const productFeatures = {
  'chatgpt-plus':      ['Gói share 7 thiết bị: 90k/1 thiết bị — 170k/2 thiết bị — 250k/3 thiết bị cố định/tháng', 'Gói private: 299k/tháng — tài khoản riêng, toàn quyền kiểm soát', 'Gói nâng chính chủ: 480k/tháng — khách gửi acc ChatGPT, nâng không lỗi', 'ChatGPT Business: 550k/tháng — add mail vào workspace shop, dùng độc lập'],
  'claude-ai':         ['Standard Seat 450k/slot — context 200K, Claude Code, Team workspace', 'Premium Seat 2.2tr/slot — usage gấp 5 lần, phù hợp công việc cường độ cao', 'Add trực tiếp bằng Gmail, quản lý team, Connectors tích hợp sẵn', 'Ưu đãi tốt khi mua số lượng lớn, bảo hành trong suốt thời gian sử dụng'],
  'google-ai-ultra':   ['Gói 1: 25.000đ credit — 285k/tháng, 6TB Google Drive, Antigravity Ultra', 'Gói 2: 25.000đ credit — 75k/tháng, toàn quyền lợi Gemini cao cấp', 'Bảo hành 30 ngày (Gói 1) và 24 giờ (Gói 2) theo điều khoản slot', 'Lưu ý: sử dụng đúng số credit gói đã chọn, không vượt quá hạn mức'],
  'gemini-pro':        ['Google AI Pro kèm Gemini + 500GB Drive mở rộng + NotebookLM', 'Nâng qua family invite — 220k/6 tháng hoặc 300k/năm, ổn định', 'Chỉ cần địa chỉ email, không cần mật khẩu, bảo mật an toàn', 'Thêm 500GB Drive chỉ 150k, bảo hành đủ hạn sử dụng'],
  'perplexity-ai':     ['Nâng chính chủ qua mail — 250k/năm (BH 1 tháng), 350k (BH 2 tháng)', 'Gói bảo hành cao nhất: 650k/năm — bảo hành đến 4 tháng', 'AI search engine trả lời trực tiếp với trích dẫn nguồn rõ ràng', 'Dùng GPT-4, Claude không giới hạn, upload file PDF/CSV phân tích'],
  'copilot':           ['Tài khoản shop cấp 70k/tháng — sử dụng không đổi thông tin', 'Hoặc nâng chính chủ qua mail 399k/tháng — toàn quyền tài khoản', 'Copilot AI tích hợp Microsoft 365: Word, Excel, Outlook thông minh', 'Bảo hành đủ hạn, bảo mật an toàn cho cả 2 loại gói'],
  'super-grok':        ['Nâng chính chủ 300k/tháng — cần mail và pass tài khoản cần nâng', 'Grok AI từ xAI, khả năng phân tích real-time data từ X (Twitter)', 'Truy cập Super Grok không giới hạn, Aurora image generation', 'Ổn định, bảo hành đủ hạn sử dụng, hỗ trợ nhanh khi có vấn đề'],
  'spotify-premium':   ['Spotify Family Premium — nâng tài khoản cá nhân khách, nâng trước giao dịch sau', '395k/năm hoặc 245k/6 tháng — giá tốt nhất thị trường', 'Nghe nhạc không quảng cáo, tải offline, âm thanh 320kbps', '100 triệu+ bài hát và podcast, bảo hành đủ hạn sử dụng'],
  'apple-music':       ['300k/năm — nâng tài khoản cá nhân khách, nâng trước giao dịch sau', '100 triệu bài hát với Lossless Audio và Dolby Atmos Spatial', 'Lyrics đồng bộ thời gian thực, tích hợp Siri và Apple Watch', 'Bảo hành đủ hạn, bảo mật tuyệt đối tài khoản khách'],
  'qobuz':             ['650k/3 tháng hoặc 970k/năm — âm nhạc Hi-Res lossless đỉnh cao', 'Nâng chính chủ, bảo hành list nhạc yêu thích và đủ thời hạn gói', 'Chất lượng FLAC 24-bit/192kHz — tốt hơn CD, hơn Spotify', 'Thư viện 100 triệu+ track, liner notes và thông tin album đầy đủ'],
  'capcut-pro':        ['Shop cấp 110k/tháng — đổi pass, dùng riêng tư tối đa 2 thiết bị cùng lúc', 'Shop cấp fam 300k/6 tháng; 880k/năm — dùng 2-3 thiết bị cùng lúc, ĐT & PC', 'Gói chính chủ cá nhân 350k/5.5 tháng — gửi gmail chưa đăng ký CapCut', 'Edit video AI: auto-captions, remove background, templates chuyên nghiệp'],
  'canva-pro':         ['200k/năm (PRO) hoặc 125k/năm (EDU) — nâng chính chủ mail khách', '75 triệu+ template, Background Remover AI, Magic Studio tích hợp', 'Brand Kit lưu màu, font, logo thương hiệu — 1TB cloud storage', 'Có bill thanh toán gói, bảo hành đủ hạn, sử dụng riêng tư 100%'],
  'adobe-all-app':     ['120k/tháng hoặc 225k/3 tháng — login qua Ultraview/Teamview cố định', 'Dùng 2 PC/Mac cùng lúc, bao gồm hỗ trợ Nano Banana AI', 'Photoshop, Illustrator, Premiere Pro, After Effects và 20+ ứng dụng', 'Bảo hành 24h nếu acc lỗi — yêu cầu tự sao lưu dữ liệu của bạn'],
  'lightroom-pro':     ['350k/năm — nâng chính chủ, chỉ cần tài khoản khách, dùng trên mobile', 'AI Masking tách nền, bầu trời, đối tượng tự động cực nhanh', 'Denoise AI giảm nhiễu ảnh RAW, đồng bộ chỉnh sửa trên tất cả thiết bị', 'Bảo hành đủ hạn, bảo mật an toàn tuyệt đối'],
  'picsart':           ['Plus 260k/năm hoặc Pro 370k/năm — nâng chính chủ tài khoản khách', 'AI Remove Background, AI Photo Enhancer, tạo ảnh AI từ text', '3000+ templates thiết kế, hiệu ứng và sticker độc quyền', 'Bảo hành đủ hạn, bảo mật an toàn tài khoản'],
  'vsco-x':            ['360k/năm — nâng chính chủ, chỉ cần tài khoản khách', '200+ preset cao cấp từ nhiếp ảnh gia chuyên nghiệp toàn cầu', 'Video editing tools, Montage tự động ghép clip thành story', 'Bảo hành đủ hạn, bảo mật an toàn tài khoản'],
  'dazz-cam-pro':      ['270k/3 năm — tài khoản cấp, login cố định 1 thiết bị', 'Mô phỏng máy ảnh film vintage: Kodak, Fujifilm, Polaroid chân thực', 'Light leaks, grain và dust overlay tạo cảm giác analog hoàn hảo', 'Bảo hành full 3 năm — không thay đổi thông tin đăng nhập'],
  'studocu':           ['70k/tháng, 150k/3 tháng, 240k/6 tháng, 360k/12 tháng', 'Nâng chính chủ qua mail khách — bảo hành full thời hạn', 'Tải tài liệu học không giới hạn từ sinh viên khắp thế giới', 'AI Study Tools: giải thích, tóm tắt tài liệu học tự động'],
  'quizlet-plus':      ['270k/năm — nâng chính chủ qua mail khách, bảo hành full', 'AI Flashcard Generator tự động tạo câu hỏi từ nội dung bài học', 'Offline mode học không cần internet, thống kê tiến độ chi tiết', 'Expert Solutions: đáp án giải thích từng bước cho 300M+ bài tập'],
  'grammarly-premium': ['Loại 1 EDU: 180k/6th, 280k/năm — Loại 2: 180k/3th, 240k/6th, 380k/năm — Loại 3 AI: 210k/3th, 270k/6th, 420k/năm', 'Tài khoản cấp đổi pass dùng riêng tư, login tối đa 5 thiết bị', 'Sửa ngữ pháp, Tone Detector, Clarity Rewrites, Plagiarism Checker', 'Bảo hành full thời hạn cho tất cả loại tài khoản'],
  'quillbot-premium':  ['Private 125k/tháng — đổi pass, tối đa 5 thiết bị cùng lúc', 'Share 280k/6 tháng hoặc 320k/năm — cố định 1–2 thiết bị', 'Paraphrase không giới hạn, Summarizer, Grammar Checker AI mạnh', 'Bảo hành full thời hạn, bảo mật an toàn tài khoản'],
  'turnitin':          ['30k/lượt (đạo văn thường) — >80 trang: 35k/lượt — 45k/lượt (đạo văn + AI detection)', 'Check file lẻ: không giới hạn số trang, setting theo ý, không lưu bài', 'Student account 150k/tháng: 10 check/ngày, tài khoản riêng tư', 'Hạ đạo văn AI: gửi kết quả check AI sẽ được báo giá'],
  'elsa-speak':        ['Pro 580k/năm — Premium 450k/3 tháng hoặc 900k/năm', 'Nâng chính chủ: cần email và pass — bảo hành full thời hạn', 'AI phát hiện lỗi phát âm tiếng Anh theo từng âm tiết cực chính xác', '5000+ bài học phát âm, ngữ điệu và hội thoại tự nhiên'],
  'scribd':            ['70k/tháng — tài khoản shop cấp, sử dụng riêng tư', 'Hàng triệu sách, tài liệu, audiobook, sheet nhạc không giới hạn', 'Đọc offline, tóm tắt AI, đề xuất nội dung cá nhân hóa', 'Bảo hành full thời hạn'],
  'udemy':             ['640k/6 tháng — tài khoản shop cấp, riêng tư', 'Hàng nghìn khóa học lập trình, marketing, thiết kế, kinh doanh', 'Certificate khi hoàn thành, cập nhật nội dung liên tục', 'Không thay đổi thông tin — bảo hành full thời hạn'],
  'coursera-plus':     ['130k/tháng, 550k/6 tháng, 750k/12 tháng — cấp sẵn, độc quyền tại VN', 'Nhận chứng chỉ mang tên mình sau khi tốt nghiệp khóa học', 'Học không giới hạn 7000+ khóa có tag Coursera Plus từ MIT, Stanford', 'Không thay đổi Email — đổi password vẫn được'],
  'course-hero':       ['80k/5 unlocks — 150k/10 unlocks — 380k/50 unlocks', 'Mở khóa tài liệu, đáp án bài tập từ sinh viên khắp thế giới', 'Giải thích từng bước, AI Tutor hỗ trợ giải bài tập', 'Đặt unlock linh hoạt, giao hàng nhanh trong ngày'],
  'duolingo-super':    ['280k/năm — nâng chính chủ, chỉ cần địa chỉ email', 'Học ngoại ngữ không quảng cáo, Unlimited Hearts không bị giới hạn sai', 'Streak Repair, tải bài học offline, thống kê tiến độ chi tiết', 'Bảo hành full thời hạn'],
  'memrise-pro':       ['450k/lifetime — nâng chính chủ, cần tài khoản mới chưa đăng ký', 'Học ngôn ngữ bằng video thực tế từ người bản địa', 'AI-powered spaced repetition tối ưu hóa thời điểm ôn tập', 'Bảo hành 1 năm — acc new, chưa qua đăng ký trước đó'],
  'busuu':             ['450k/năm — nâng chính chủ, cần tài khoản khách', 'Học 12 ngoại ngữ với giáo viên bản địa phản hồi bài viết', 'Official certificates được công nhận bởi các công ty quốc tế', 'Bảo hành full thời hạn, bảo mật an toàn'],
  'quizizz-premium':   ['450k/năm — nâng chính chủ, cần tài khoản khách', 'Tạo quiz, flashcard, bài học tương tác cho học sinh/sinh viên', 'AI tự động tạo câu hỏi từ tài liệu PDF, PowerPoint của bạn', 'Bảo hành full thời hạn, bảo mật an toàn'],
  'codecademy-pro':    ['330k/năm — tài khoản shop cấp, riêng tư', 'Lộ trình học Web Dev, Data Science, Cybersecurity, AI thực tế', '2000+ bài tập và dự án tương tác, Interview Prep kỹ thuật', 'Không thay đổi thông tin — bảo hành full thời hạn'],
  'wordwall':          ['Stand 60k/tháng hoặc 399k/năm — Pro 75k/tháng hoặc 600k/năm', 'Nâng chính chủ hoặc cấp tài khoản theo yêu cầu', 'Tạo 40+ loại hoạt động tương tác: quiz, match, crossword, anagram', 'Bảo hành full thời hạn'],
  'netflix-premium':   ['Loại 1: 75k/tháng — 210k/3 tháng — 420k/6 tháng (ổn định)', 'Loại 2: 85k/tháng — 250k/3 tháng (siêu ổn định, có bot lấy mã)', 'Loại 3: 75k/tháng (order trước 20-30 phút)', 'Cả 3 loại: xem 1 thiết bị, profile riêng có mã PIN, 4K Ultra HD, bảo hành full'],
  'iqiyi':             ['100k/3 tháng hoặc 300k/năm — tài khoản shop cấp, đăng nhập 1 thiết bị', 'Gói nâng chính chủ: 650k/12 tháng — toàn quyền tài khoản cá nhân', 'Phim Hoa ngữ, Hàn Quốc, anime cực phong phú, chất lượng 4K', 'Bảo hành full thời hạn'],
  'youku':             ['Tài khoản cấp 180k/năm — dùng chung, xem 1 thiết bị cùng lúc', 'Nâng chính chủ 380k/năm — cần ID+pass, bảo hành theo hạn gói', 'Kho phim Trung Quốc khổng lồ, độc quyền Youku Originals', 'Bảo hành full thời hạn'],
  'disney-plus':       ['75k/tháng, 190k/3 tháng, 340k/6 tháng, 550k/12 tháng', 'Dùng VPN để xem nội dung đầy đủ, đăng nhập 1 thiết bị cố định', 'Marvel, Star Wars, Pixar, Disney Originals 4K Ultra HD', 'Bảo hành theo hạn gói — không thay đổi thông tin tài khoản'],
  'microsoft-365':     ['270k/năm/slot + 1TB OneDrive — add thẳng vào mail đang sử dụng', 'Hoặc 890k/năm tài khoản chủ fam, add thêm 5 người, bảo mật an toàn', 'Word, Excel, PowerPoint, OneNote, Outlook đầy đủ bản desktop', 'Bảo hành full thời hạn'],
  'autoDesk':          ['320k/1app — 420k/2app — 520k/3app — 850k/All App/năm', 'AutoCAD, Revit, 3ds Max, Maya, Inventor và 100+ phần mềm khác', 'Tài khoản riêng tư, cấp trực tiếp, bảo hành đủ hạn', 'Bảo hành đủ hạn — hỗ trợ chuyển app khi cần'],
  'key-windows':       ['190k/năm — kích hoạt vĩnh viễn 1 PC', 'Windows 10 Home/Pro hoặc Windows 11 Home/Pro', 'Key chính hãng Microsoft, kích hoạt online tức thì', 'Hỗ trợ kích hoạt nếu gặp lỗi, bảo hành 1 năm'],
  'zoom-pro':          ['180k/tháng (100 người) hoặc 400k/tháng (300 người)', 'Nâng chính chủ qua tài khoản khách — họp không giới hạn thời gian', 'Cloud Recording 5GB, AI Companion tóm tắt và tạo action items', 'Bảo hành đủ hạn, bảo mật an toàn'],
  'notion-plus':       ['Plus 670k — Business 820k — Enterprise 1.02tr/năm', 'Nâng chính chủ qua tài khoản khách — blocks và file không giới hạn', 'Database, wiki, kanban, calendar — all-in-one workspace mạnh mẽ', 'Bảo hành đủ hạn, bảo mật an toàn'],
  'filmora':           ['600k/năm/thiết bị — tài khoản riêng tư, đổi được mật khẩu', 'Thêm email thứ 2 tự quản lý, +150k/thiết bị thêm', 'AI Video Editing: auto-cut, color match, motion tracking thông minh', 'Export 4K, không watermark, hàng nghìn template và effect cao cấp'],
  'camscanner':        ['450k/năm — nâng chính chủ qua tài khoản khách', 'Scan tài liệu AI: làm thẳng, nét, loại bỏ bóng tự động', 'OCR nhận diện văn bản từ ảnh, PDF, hỗ trợ tiếng Việt', 'Bảo mật an toàn, bảo hành đủ hạn'],
  'discord-nitro':     ['880k/năm — nâng chính chủ qua tài khoản khách', 'Upload file đến 500MB, stream 4K 60fps, server boost x2', 'Custom emoji, avatar, profile, banner và sticker độc quyền', 'Bảo mật an toàn, bảo hành đủ hạn'],
  'linkedin-premium':  ['Business: 319k/1th, 750k/3th, 1.9tr/năm — Career: 550k/3th, 1.25tr/năm', 'Nâng chính chủ tài khoản đang sử dụng — bảo hành đầy đủ hạn', 'InMail credits, xem ai xem profile, AI Resume & Cover Letter', 'LinkedIn Learning 21000+ khóa học, Job Insights đầy đủ'],
  'nordvpn':           ['Tài khoản cấp 250k/năm, login cố định 2 thiết bị — không đổi thông tin', 'Hoặc nâng chính chủ 950k/năm — bảo hành full thời hạn', '5500+ server tại 60 quốc gia, Threat Protection chặn malware', 'Double VPN, Kill Switch, Meshnet kết nối thiết bị như LAN ảo'],
  'hma-vpn':           ['250k/năm (3 thiết bị login cố định) hoặc 65k/tháng (5 thiết bị)', 'Gói 65k/tháng: giao cả tài khoản, tự quản lý', 'HMA VPN 290+ quốc gia, IP Shuffle tự động thay IP theo lịch', 'Bảo hành full thời hạn theo gói đã chọn'],
  'expressvpn':        ['250k/năm (3 thiết bị cố định) hoặc 65k/tháng (5 thiết bị, giao acc)', 'Lightway Protocol: nhanh hơn OpenVPN 4x, tiết kiệm pin', '3000+ server tại 94 quốc gia, Smart DNS cho Smart TV', 'Bảo hành full thời hạn, bảo mật an toàn'],
  'ipvanish-vpn':      ['250k/năm — tài khoản cấp, login cố định 1 thiết bị', '2200+ server tại 75 quốc gia, tốc độ cao ổn định', 'No-logs policy, SOCKS5 proxy cho torrent, Kill Switch', 'Bảo hành full thời hạn — không thay đổi thông tin tài khoản'],
  'icloud-iphone':     ['450k/6 tháng hoặc 650k/12 tháng — nâng chính chủ 400GB', 'Chỉ cần địa chỉ iCloud, không cần mật khẩu — bảo mật tuyệt đối', 'Đồng bộ ảnh, video, danh bạ, ghi chú tự động mọi thiết bị Apple', 'Bảo hành đủ hạn, an toàn cho toàn bộ dữ liệu cá nhân'],
  'truecaller-premium':['200k/năm — nâng chính chủ, cần tài khoản khách', 'Who Viewed My Profile, Ghost Call ẩn danh, No Ads', 'AI-powered spam block tự động, Contact Requests không giới hạn', 'Bảo hành đủ hạn, bảo mật an toàn'],
  'bumble-premium':    ['79k/tuần — 159k/tháng — 300k/3 tháng — 450k/6 tháng — 700k/vĩnh viễn', 'Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn', 'SuperSwipe, Spotlight, Rematch, Beeline — toàn bộ tính năng Premium', 'Bảo hành đủ hạn sử dụng, bảo mật an toàn tài khoản'],
  'tinder':            ['Platinum 130k/tháng, 350k/6 tháng — Gold 140k/tháng, 420k/6 tháng', 'Nâng chính chủ, cần tài khoản sử dụng trên 1 tháng', 'Unlimited Likes, Top Picks, Rewind, Boost và See Who Likes You', 'Bảo hành đủ hạn, bảo mật an toàn tài khoản'],
}

const products = [
  { id: 'chatgpt-plus',       name: 'ChatGPT Plus',           categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 90000,  originalPrice: 480000, logoEmoji: '🤖', logoColor: '#10a37f', duration: 'tháng',    isFeatured: true,  isSale: true,  description: 'GPT-4o dùng chung 7 thiết bị, tài khoản shop cấp, bảo hành full' },
  { id: 'claude-ai',          name: 'Claude AI',               categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 450000,                         logoEmoji: '🧠', logoColor: '#cc785c', duration: 'tháng',    isNew: true,                   description: 'Standard Seat 450k/slot — Claude Code, context 200K, Team workspace' },
  { id: 'google-ai-ultra',    name: 'Google AI Ultra',         categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 75000,                          logoEmoji: '✨', logoColor: '#4285F4', duration: 'tháng',    isNew: true,                   description: '25.000đ credit, 6TB Google Drive, toàn bộ quyền lợi Antigravity Ultra' },
  { id: 'gemini-pro',         name: 'Gemini (Google AI Pro)',  categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 300000,                         logoEmoji: '🔮', logoColor: '#4285F4', duration: 'năm',      isFeatured: true,              description: 'Google AI Pro + 500GB Drive mở rộng + NotebookLM, nâng chính chủ' },
  { id: 'perplexity-ai',      name: 'Perplexity AI',           categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 250000,                         logoEmoji: '🔍', logoColor: '#20808D', duration: 'năm',                                     description: 'Nâng chính chủ qua mail — bảo hành 1–4 tháng theo gói chọn' },
  { id: 'copilot',            name: 'Copilot',                 categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 70000,                          logoEmoji: '💡', logoColor: '#0078d4', duration: 'tháng',                                   description: 'Tài khoản shop cấp 70k/tháng, hoặc nâng chính chủ 399k/tháng' },
  { id: 'super-grok',         name: 'Super Grok AI',           categoryId: 'ai-chat',      categoryName: 'AI Chat',        price: 300000,                         logoEmoji: '⚡', logoColor: '#1a1a1a', duration: 'tháng',                                   description: 'Nâng chính chủ 300k/tháng — cần mail + pass, ổn định bảo hành đủ hạn' },
  { id: 'spotify-premium',    name: 'Spotify Family',          categoryId: 'am-nhac',      categoryName: 'Âm nhạc',        price: 395000,                         logoEmoji: '🎵', logoColor: '#1DB954', duration: 'năm',      isFeatured: true,              description: 'Nâng tài khoản cá nhân khách, nâng trước giao dịch sau, bảo hành đủ hạn' },
  { id: 'apple-music',        name: 'Apple Music',             categoryId: 'am-nhac',      categoryName: 'Âm nhạc',        price: 300000,                         logoEmoji: '🎶', logoColor: '#fc3c44', duration: 'năm',                                     description: 'Nâng tài khoản cá nhân khách, nâng trước giao dịch sau, bảo hành đủ hạn' },
  { id: 'qobuz',              name: 'Qobuz',                   categoryId: 'am-nhac',      categoryName: 'Âm nhạc',        price: 650000,                         logoEmoji: '🎼', logoColor: '#0c4a6e', duration: '3 tháng',                                 description: 'Nâng chính chủ, bảo hành list nhạc và đủ hạn, nhạc Hi-Res lossless' },
  { id: 'capcut-pro',         name: 'CapCut Pro',              categoryId: 'design-photo', categoryName: 'Design & Photo', price: 110000,                         logoEmoji: '🎬', logoColor: '#000000', duration: 'tháng',                                   description: 'Tài khoản shop cấp riêng tư, đổi được pass, dùng 2 thiết bị cùng lúc' },
  { id: 'canva-pro',          name: 'Canva Pro',               categoryId: 'design-photo', categoryName: 'Design & Photo', price: 200000,                         logoEmoji: '🖼️', logoColor: '#00C4CC', duration: 'năm',                                     description: 'Nâng chính chủ, sử dụng riêng tư, có bill thanh toán gói' },
  { id: 'adobe-all-app',      name: 'Adobe All App',           categoryId: 'design-photo', categoryName: 'Design & Photo', price: 120000,                         logoEmoji: '🎭', logoColor: '#FF0000', duration: 'tháng',                                   description: 'Login cố định qua Ultraview/Teamview, dùng 2 PC/Mac cùng lúc' },
  { id: 'lightroom-pro',      name: 'Lightroom Pro',           categoryId: 'design-photo', categoryName: 'Design & Photo', price: 350000,                         logoEmoji: '📷', logoColor: '#31A8FF', duration: 'năm',                                     description: 'Nâng chính chủ, chỉ cần tài khoản khách, sử dụng trên mobile' },
  { id: 'picsart',            name: 'Picsart Plus',            categoryId: 'design-photo', categoryName: 'Design & Photo', price: 260000, originalPrice: 370000,  logoEmoji: '✏️', logoColor: '#EF5FA7', duration: 'năm',      isSale: true,                  description: 'Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn' },
  { id: 'vsco-x',             name: 'VSCO X',                  categoryId: 'design-photo', categoryName: 'Design & Photo', price: 360000,                         logoEmoji: '📸', logoColor: '#111111', duration: 'năm',                                     description: 'Nâng chính chủ, cần tài khoản khách, bảo hành đủ hạn' },
  { id: 'dazz-cam-pro',       name: 'Dazz Cam Pro',            categoryId: 'design-photo', categoryName: 'Design & Photo', price: 270000,                         logoEmoji: '🎞️', logoColor: '#c2410c', duration: '3 năm',    isNew: true,                   description: 'Tài khoản cấp, login cố định 1 thiết bị, bảo hành full thời hạn' },
  { id: 'studocu',            name: 'Studocu',                 categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 70000,                          logoEmoji: '📖', logoColor: '#0064FF', duration: 'tháng',                                   description: 'Nâng chính chủ qua mail khách, bảo hành full thời hạn' },
  { id: 'quizlet-plus',       name: 'Quizlet Plus',            categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 270000,                         logoEmoji: '📋', logoColor: '#4257B2', duration: 'năm',                                     description: 'Nâng chính chủ qua mail khách, bảo hành full thời hạn' },
  { id: 'grammarly-premium',  name: 'Grammarly Premium',       categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 180000,                         logoEmoji: '✍️', logoColor: '#15C39A', duration: '6 tháng',                                 description: 'EDU/AI — tài khoản cấp, đổi pass, login 1–5 thiết bị theo gói' },
  { id: 'quillbot-premium',   name: 'Quillbot Premium',        categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 125000,                         logoEmoji: '🖊️', logoColor: '#5B35D5', duration: 'tháng',                                   description: 'Tài khoản riêng tư, đổi pass, tối đa 5 thiết bị cùng lúc' },
  { id: 'turnitin',           name: 'Turnitin',                categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 30000,                          logoEmoji: '🔎', logoColor: '#E2001A', duration: 'lượt',                                    description: 'Check đạo văn thường 30k/lượt, check AI+đạo văn 45k/lượt, không lưu bài' },
  { id: 'elsa-speak',         name: 'Elsa Speak Premium',      categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 450000,                         logoEmoji: '🗣️', logoColor: '#5b21b6', duration: '3 tháng',                                 description: 'Nâng chính chủ, cần email và pass, bảo hành full thời hạn' },
  { id: 'scribd',             name: 'Scribd',                  categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 70000,                          logoEmoji: '📚', logoColor: '#1E7B85', duration: 'tháng',                                   description: 'Tài khoản shop cấp, sử dụng riêng tư, bảo hành full thời hạn' },
  { id: 'udemy',              name: 'Udemy',                   categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 640000,                         logoEmoji: '🎓', logoColor: '#A435F0', duration: '6 tháng',                                 description: 'Tài khoản shop cấp, riêng tư, không thay đổi thông tin, bảo hành full' },
  { id: 'coursera-plus',      name: 'Coursera Plus',           categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 130000,                         logoEmoji: '🏫', logoColor: '#0056D2', duration: 'tháng',                                   description: 'Cấp sẵn, nhận chứng chỉ mang tên mình, học không giới hạn Coursera Plus' },
  { id: 'course-hero',        name: 'Course Hero',             categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 80000,                          logoEmoji: '🦸', logoColor: '#ED5B21', duration: '5 unlocks',                               description: '80k/5 unlocks — 150k/10 unlocks — 380k/50 unlocks' },
  { id: 'duolingo-super',     name: 'Duolingo Super',          categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 280000,                         logoEmoji: '🦜', logoColor: '#58CC02', duration: 'năm',                                     description: 'Nâng chính chủ, chỉ cần địa chỉ email khách, bảo hành full thời hạn' },
  { id: 'memrise-pro',        name: 'Memrise Pro',             categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 450000,                         logoEmoji: '🌱', logoColor: '#4CAF50', duration: 'lifetime', isNew: true,                   description: 'Nâng chính chủ lifetime, cần tài khoản mới chưa đăng ký, bảo hành 1 năm' },
  { id: 'busuu',              name: 'Busuu',                   categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 450000,                         logoEmoji: '🌍', logoColor: '#3ab54a', duration: 'năm',                                     description: 'Nâng chính chủ, cần tài khoản khách, bảo hành full thời hạn' },
  { id: 'quizizz-premium',    name: 'Quizizz Premium',         categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 450000,                         logoEmoji: '🧩', logoColor: '#8854d0', duration: 'năm',                                     description: 'Nâng chính chủ, cần tài khoản khách, bảo hành full thời hạn' },
  { id: 'codecademy-pro',     name: 'Codecademy',              categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 330000,                         logoEmoji: '💻', logoColor: '#1F4056', duration: 'năm',                                     description: 'Tài khoản shop cấp, riêng tư, không thay đổi thông tin, bảo hành full' },
  { id: 'wordwall',           name: 'Wordwall',                categoryId: 'hoc-tap',      categoryName: 'Học tập',        price: 60000,  originalPrice: 75000,   logoEmoji: '🎯', logoColor: '#e97b17', duration: 'tháng',    isSale: true,                  description: 'Gói Standard 60k hoặc Pro 75k/tháng, nâng chính chủ hoặc cấp tài khoản' },
  { id: 'netflix-premium',    name: 'Netflix',                 categoryId: 'phim-anh',     categoryName: 'Phim ảnh',       price: 75000,                          logoEmoji: '🎬', logoColor: '#E50914', duration: 'tháng',    isFeatured: true,              description: 'Xem cùng lúc 1 thiết bị, profile riêng có mã pin, chất lượng 4K Ultra HD' },
  { id: 'iqiyi',              name: 'iQiyi',                   categoryId: 'phim-anh',     categoryName: 'Phim ảnh',       price: 100000,                         logoEmoji: '🐼', logoColor: '#00b44c', duration: '3 tháng',                                 description: 'Tài khoản shop cấp, đăng nhập cố định 1 thiết bị, bảo hành full thời hạn' },
  { id: 'youku',              name: 'Youku',                   categoryId: 'phim-anh',     categoryName: 'Phim ảnh',       price: 180000,                         logoEmoji: '📺', logoColor: '#e60012', duration: 'năm',                                     description: 'Tài khoản cấp dùng chung, xem cùng lúc 1 thiết bị, hoặc nâng chính chủ' },
  { id: 'disney-plus',        name: 'Disney+',                 categoryId: 'phim-anh',     categoryName: 'Phim ảnh',       price: 75000,                          logoEmoji: '🏰', logoColor: '#113CCF', duration: 'tháng',    isFeatured: true,              description: 'Dùng VPN để xem, đăng nhập 1 thiết bị cố định, bảo hành theo hạn gói' },
  { id: 'microsoft-365',      name: 'Office 365 Family',       categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 270000,                         logoEmoji: '📊', logoColor: '#D83B01', duration: 'năm',      isFeatured: true,              description: '270k/năm/slot + 1TB OneDrive, add thẳng vào mail đang dùng, bảo mật an toàn' },
  { id: 'autoDesk',           name: 'AutoDesk',                categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 320000, originalPrice: 850000,  logoEmoji: '🏗️', logoColor: '#0696D7', duration: 'năm',      isSale: true,                  description: '320k/1app — 420k/2app — 520k/3app — 850k/All App, tài khoản riêng tư' },
  { id: 'key-windows',        name: 'Key Windows 10/11',       categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 190000,                         logoEmoji: '🪟', logoColor: '#0078d4', duration: 'năm',                                     description: 'Kích hoạt 1 PC vĩnh viễn, Windows 10 hoặc Windows 11' },
  { id: 'zoom-pro',           name: 'Zoom Pro',                categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 180000,                         logoEmoji: '📹', logoColor: '#2D8CFF', duration: 'tháng',                                   description: 'Nâng chính chủ qua tài khoản khách, họp 100 người, bảo hành đủ hạn' },
  { id: 'notion-plus',        name: 'Notion Plus',             categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 670000, originalPrice: 820000,  logoEmoji: '📝', logoColor: '#6366f1', duration: 'năm',      isSale: true,                  description: 'Nâng chính chủ, cần tài khoản khách, Plus 670k / Business 820k' },
  { id: 'filmora',            name: 'Wondershare Filmora',     categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 600000,                         logoEmoji: '🎥', logoColor: '#00b386', duration: 'năm',                                     description: 'Tài khoản riêng tư, đổi được mật khẩu, thêm email thứ 2 tự quản lý' },
  { id: 'camscanner',         name: 'CamScanner',              categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 450000,                         logoEmoji: '📄', logoColor: '#0066cc', duration: 'năm',                                     description: 'Nâng chính chủ qua tài khoản khách, bảo mật an toàn, bảo hành đủ hạn' },
  { id: 'discord-nitro',      name: 'Discord Nitro',           categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 880000,                         logoEmoji: '🎮', logoColor: '#5865F2', duration: 'năm',      isNew: true,                   description: 'Nâng chính chủ qua tài khoản khách, bảo hành đủ hạn' },
  { id: 'linkedin-premium',   name: 'LinkedIn Premium',        categoryId: 'van-phong',    categoryName: 'Văn phòng',      price: 550000,                         logoEmoji: '💼', logoColor: '#0A66C2', duration: '3 tháng',                                 description: 'Career 550k/3tháng hoặc Business 750k/3tháng, nâng chính chủ, bảo hành đủ hạn' },
  { id: 'nordvpn',            name: 'NordVPN',                 categoryId: 'vpn',          categoryName: 'VPN',            price: 250000,                         logoEmoji: '🛡️', logoColor: '#4687FF', duration: 'năm',                                     description: 'Tài khoản cấp 250k/năm, login cố định 2 thiết bị, hoặc nâng chính chủ 950k' },
  { id: 'hma-vpn',            name: 'HMA VPN',                 categoryId: 'vpn',          categoryName: 'VPN',            price: 250000,                         logoEmoji: '🐴', logoColor: '#F7941D', duration: 'năm',                                     description: 'Tài khoản cấp 250k/năm (3 thiết bị) hoặc 65k/tháng (5 thiết bị)' },
  { id: 'expressvpn',         name: 'ExpressVPN',              categoryId: 'vpn',          categoryName: 'VPN',            price: 250000,                         logoEmoji: '⚡', logoColor: '#DA3940', duration: 'năm',                                     description: 'Tài khoản cấp 250k/năm (3 thiết bị) hoặc 65k/tháng (5 thiết bị)' },
  { id: 'ipvanish-vpn',       name: 'IP Vanish VPN',           categoryId: 'vpn',          categoryName: 'VPN',            price: 250000,                         logoEmoji: '🔒', logoColor: '#6D4AFF', duration: 'năm',                                     description: 'Tài khoản cấp, login cố định 1 thiết bị, bảo hành full thời hạn' },
  { id: 'icloud-iphone',      name: 'iCloud iPhone',           categoryId: 'tien-ich',     categoryName: 'Tiện ích khác',  price: 450000,                         logoEmoji: '☁️', logoColor: '#3b82f6', duration: '6 tháng',  isNew: true,                   description: 'Nâng chính chủ 400GB, chỉ cần địa chỉ iCloud khách, bảo hành đủ hạn' },
  { id: 'truecaller-premium', name: 'TrueCaller Premium',      categoryId: 'tien-ich',     categoryName: 'Tiện ích khác',  price: 200000,                         logoEmoji: '📞', logoColor: '#0099cc', duration: 'năm',                                     description: 'Nâng chính chủ, cần tài khoản khách, bảo mật an toàn, bảo hành đủ hạn' },
  { id: 'bumble-premium',     name: 'Bumble Premium',          categoryId: 'tien-ich',     categoryName: 'Tiện ích khác',  price: 79000,                          logoEmoji: '🐝', logoColor: '#FFB300', duration: 'tuần',                                    description: '79k/tuần — 159k/tháng — 700k/vĩnh viễn, nâng chính chủ tài khoản khách' },
  { id: 'tinder',             name: 'Tinder',                  categoryId: 'tien-ich',     categoryName: 'Tiện ích khác',  price: 130000,                         logoEmoji: '🔥', logoColor: '#FD5564', duration: 'tháng',                                   description: 'Platinum 130k/tháng hoặc Gold 140k/tháng, nâng chính chủ acc trên 1 tháng' },
]

// ── MIGRATION ───────────────────────────────────────────────────────────────

async function migrate() {
  console.log('Starting migration to Sanity...\n')
  const tx = client.transaction()

  // Categories
  for (const cat of categories) {
    tx.createOrReplace({
      _type: 'category',
      _id: `category-${cat.id}`,
      id: { _type: 'slug', current: cat.id },
      name: cat.name,
      icon: cat.icon,
      bgColor: cat.bgColor,
      textColor: cat.textColor,
    })
  }
  console.log(`Queued ${categories.length} categories`)

  // Products
  for (const p of products) {
    tx.createOrReplace({
      _type: 'product',
      _id: `product-${p.id}`,
      id: { _type: 'slug', current: p.id },
      name: p.name,
      categoryId: p.categoryId,
      categoryName: p.categoryName,
      price: p.price,
      ...(p.originalPrice ? { originalPrice: p.originalPrice } : {}),
      duration: p.duration,
      logoEmoji: p.logoEmoji,
      logoColor: p.logoColor,
      description: p.description,
      isFeatured: p.isFeatured ?? false,
      isSale: p.isSale ?? false,
      isNew: p.isNew ?? false,
      features: productFeatures[p.id] ?? [],
      pricingTiers: (pricingTiers[p.id] ?? []).map((t, i) => ({
        _key: `tier-${i}`,
        duration: t.duration,
        ...(t.label ? { label: t.label } : {}),
        price: t.price,
        isPopular: t.isPopular ?? false,
        ...(t.savings ? { savings: t.savings } : {}),
      })),
    })
  }
  console.log(`Queued ${products.length} products`)

  // Site settings
  tx.createOrReplace({
    _type: 'siteSettings',
    _id: 'siteSettings',
    zaloUrl: 'https://zalo.me/0339502155',
    zaloPhone: '0339502155',
    facebookUrl: 'https://facebook.com/',
    messengerUrl: 'https://m.me/',
    howToBuySteps: [
      'Chọn gói thời hạn phù hợp với nhu cầu sử dụng',
      'Bấm "Đặt mua ngay" hoặc liên hệ Zalo: 0339502155',
      'Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử',
      'Nhận thông tin tài khoản qua Zalo trong 5–15 phút',
    ],
  })
  console.log('Queued site settings')

  await tx.commit({ visibility: 'async' })
  console.log('\nMigration complete!')
}

migrate().catch(err => { console.error(err); process.exit(1) })
