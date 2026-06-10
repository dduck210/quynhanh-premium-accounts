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
  { duration: "1 năm", price: roundK(monthlyPrice * 12 * 0.8), savings: 20 },
];

export const HOW_TO_BUY = [
  "Chọn gói thời hạn phù hợp với nhu cầu sử dụng",
  "Bấm \"Đặt mua ngay\" hoặc liên hệ Zalo: 0912.345.678",
  "Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử",
  "Nhận thông tin tài khoản qua Zalo trong 5–15 phút",
];

export const productFeatures: Record<string, string[]> = {
  // ── AI CHAT ──────────────────────────────────────────────────────────────────
  "chatgpt-plus": [
    "Truy cập GPT-4o – mô hình AI tiên tiến nhất của OpenAI",
    "Tạo ảnh DALL-E 3 không giới hạn, phân tích file PDF và ảnh",
    "Web browsing thời gian thực, Memory ghi nhớ ngữ cảnh",
    "Custom GPTs và ưu tiên truy cập tính năng mới nhất",
  ],
  "claude-pro": [
    "Claude 3.5 Sonnet – AI hàng đầu về coding và phân tích",
    "Context window 200K token, xử lý tài liệu cực dài",
    "Artifacts: tạo code, app, website ngay trong hội thoại",
    "Priority access, không bị giới hạn tin nhắn giờ cao điểm",
  ],
  "gemini-advanced": [
    "Gemini 1.5 Pro với context window 1 triệu token",
    "Tích hợp trực tiếp Gmail, Docs, Drive, YouTube, Search",
    "Tạo ảnh, phân tích video, xử lý âm thanh đa phương tiện",
    "Google One 2TB cloud storage và ưu tiên model mới nhất",
  ],
  "perplexity-pro": [
    "AI search engine trả lời trực tiếp, trích dẫn nguồn rõ ràng",
    "Dùng GPT-4, Claude 3.5, Grok không giới hạn trong ngày",
    "Tạo ảnh AI (DALL-E 3), upload file PDF/CSV để phân tích",
    "API access 5 req/phút với mô hình cao cấp",
  ],
  "midjourney": [
    "Mô hình V6.1 – tạo ảnh AI chất lượng cao nhất hiện tại",
    "200 fast hours/tháng, Stealth mode ảnh không công khai",
    "Commercial license – dùng ảnh cho mục đích thương mại",
    "Web interface thân thiện, không cần dùng Discord",
  ],
  "copilot-pro": [
    "GPT-4 Turbo tích hợp sẵn vào Word, Excel, PowerPoint",
    "Copilot Designer: tạo ảnh không giới hạn bằng DALL-E 3",
    "Tóm tắt email, soạn nội dung thông minh trong Outlook",
    "Ưu tiên truy cập giờ cao điểm, phản hồi nhanh hơn",
  ],
  "notion-ai": [
    "Viết, chỉnh sửa, tóm tắt bất kỳ nội dung nào trong Notion",
    "AI Q&A: hỏi bất cứ điều gì về toàn bộ workspace của bạn",
    "Dịch nội dung, auto-fill database từ dữ liệu có sẵn",
    "Không giới hạn số lần sử dụng AI trong tháng",
  ],

  // ── ÂM NHẠC ──────────────────────────────────────────────────────────────────
  "spotify-premium": [
    "Nghe nhạc không quảng cáo trên mọi thiết bị",
    "Tải nhạc offline, chất lượng âm thanh 320kbps",
    "100 triệu+ bài hát và 5 triệu+ podcast toàn cầu",
    "Chuyển bài, lặp lại, shuffle tùy ý không giới hạn",
  ],
  "apple-music": [
    "100 triệu bài hát với âm thanh Lossless và Dolby Atmos",
    "Spatial Audio – trải nghiệm âm nhạc 3D như ở trong buổi hòa nhạc",
    "Lời bài hát đồng bộ theo thời gian thực",
    "Tích hợp Siri, HomePod, CarPlay và Apple Watch",
  ],
  "youtube-music": [
    "Nghe nhạc và xem MV không có quảng cáo",
    "Phát nhạc nền khi tắt màn hình điện thoại",
    "80 triệu+ bài hát kèm video chính thức và live concert",
    "Bao gồm YouTube Premium – xem YouTube không ads",
  ],

  // ── DESIGN & PHOTO ────────────────────────────────────────────────────────────
  "adobe-cc": [
    "Bộ 20+ ứng dụng: Photoshop, Illustrator, Premiere, After Effects",
    "100GB cloud storage, Adobe Fonts 20.000+ font bản quyền",
    "Behance Portfolio website miễn phí để showcase work",
    "Cập nhật phiên bản mới nhất liên tục, không phụ phí",
  ],
  "canva-pro": [
    "75 triệu+ template cao cấp cho mọi định dạng thiết kế",
    "Background Remover & Magic Eraser AI một chạm",
    "Brand Kit: lưu màu sắc, font, logo thương hiệu",
    "Lưu trữ 1TB, xuất file không watermark, Magic Studio AI",
  ],
  "figma-pro": [
    "Dự án không giới hạn, version history đầy đủ",
    "Dev Mode: export code CSS/iOS/Android cho developer",
    "Advanced prototyping với animation và interactions",
    "Branching & merging cho làm việc nhóm chuyên nghiệp",
  ],
  "adobe-photoshop": [
    "Generative Fill AI: thêm/xóa đối tượng bằng lệnh văn bản",
    "Neural Filters: thay đổi biểu cảm, làm mịn da, tô màu ảnh cũ",
    "Sky Replacement và Object Selection thông minh 1-click",
    "Hỗ trợ file RAW, TIFF, PSD chất lượng chuyên nghiệp",
  ],
  "adobe-lightroom": [
    "AI Masking: tách nền, bầu trời, đối tượng tự động cực nhanh",
    "Denoise AI: giảm nhiễu ảnh RAW giữ nguyên chi tiết",
    "Đồng bộ chỉnh sửa trên tất cả thiết bị qua cloud",
    "1TB cloud storage và preset chuyên nghiệp không giới hạn",
  ],
  "freepik-premium": [
    "Tải không giới hạn từ 10 triệu+ tài nguyên thiết kế",
    "Không cần ghi nguồn (attribution) cho tất cả tài nguyên",
    "AI Image Generator tạo ảnh, vector, mockup theo yêu cầu",
    "SVG, PSD, AI source files – chỉnh sửa được file gốc",
  ],
  "shutterstock": [
    "400 triệu+ ảnh, vector, video bản quyền cao cấp",
    "Tải không giới hạn, không cần ghi nguồn",
    "Video 4K và footage chuyên nghiệp cho production",
    "Plugin tích hợp trực tiếp Adobe, Canva, Figma",
  ],

  // ── HỌC TẬP ──────────────────────────────────────────────────────────────────
  "coursera-plus": [
    "7.000+ khóa học từ MIT, Stanford, Google, IBM, Meta",
    "Certificates và Professional Certificates được công nhận toàn cầu",
    "Tải video offline, tích hợp LinkedIn hiển thị chứng chỉ",
    "Degree Programs từ các trường đại học top thế giới",
  ],
  "udemy-business": [
    "19.000+ khóa học lập trình, marketing, thiết kế, kinh doanh",
    "Nội dung mới cập nhật hàng tháng từ chuyên gia",
    "Practice Tests và Coding Exercises tích hợp trong khóa học",
    "Offline learning trên app iOS và Android",
  ],
  "duolingo-plus": [
    "Học ngoại ngữ hoàn toàn không có quảng cáo",
    "Tải bài học offline, Unlimited Hearts không bị giới hạn sai",
    "Streak Repair – sửa streak khi lỡ một ngày học",
    "Tiến trình học chi tiết, thống kê và báo cáo sâu",
  ],
  "linkedin-learning": [
    "21.000+ khóa học kinh doanh, công nghệ, thiết kế sáng tạo",
    "Skill Assessments: đánh giá kỹ năng và nhận gợi ý học",
    "Chứng chỉ hiển thị trực tiếp trên hồ sơ LinkedIn",
    "Offline mobile, Learning Paths theo role và career goal",
  ],
  "skillshare-premium": [
    "35.000+ lớp học thiết kế, sáng tạo, kinh doanh, photography",
    "Project-based learning: mỗi lớp có dự án thực hành",
    "Tải video offline, nhận feedback từ giảng viên & học viên",
    "Không giới hạn số lớp học trong gói Premium",
  ],
  "masterclass": [
    "180+ khóa học từ Gordon Ramsay, Scorsese, Serena Williams",
    "Video HD chất lượng cao với workbook bổ trợ chi tiết",
    "MasterClass Live: buổi học trực tiếp với instructor",
    "App mobile, TV app, tải offline học mọi nơi",
  ],
  "quizlet-plus": [
    "AI-powered flashcards: tự động tạo câu hỏi từ nội dung học",
    "Unlimited sets, Offline mode học không cần internet",
    "Advanced Statistics: phân tích điểm yếu và tối ưu việc học",
    "No ads – tập trung hoàn toàn vào việc học",
  ],
  "grammarly-premium": [
    "Sửa ngữ pháp, chính tả, dấu câu với độ chính xác cao",
    "Tone Detector và Clarity Rewrites cải thiện câu rõ ràng hơn",
    "Vocabulary Enhancement gợi ý từ ngữ phong phú đa dạng",
    "Plagiarism Checker so sánh với 16 tỷ trang web",
  ],
  "turnitin": [
    "Đối chiếu với 91 tỷ trang web và 1.5 tỷ bài viết học sinh",
    "AI Writing Detection: phát hiện nội dung viết bởi ChatGPT, etc.",
    "Similarity Report chi tiết, highlight từng đoạn trùng lặp",
    "Integration với LMS: Canvas, Moodle, Blackboard",
  ],
  "chegg": [
    "Giải bài tập từng bước với giải thích chi tiết",
    "Expert Q&A 24/7: đặt câu hỏi, chuyên gia trả lời trong 2h",
    "Textbook Solutions: đáp án từ hàng nghìn sách giáo khoa",
    "Math Solver: giải phương trình, tích phân, đại số tức thì",
  ],
  "codecademy-pro": [
    "Career Paths: Web Dev, Data Science, Cybersecurity, AI",
    "2.000+ bài tập và dự án thực hành có phản hồi tức thì",
    "Interview Prep: luyện câu hỏi phỏng vấn kỹ thuật",
    "AI Assistance: gợi ý code, giải thích lỗi trong IDE",
  ],
  "datacamp": [
    "350+ khóa học Python, R, SQL, Machine Learning, AI",
    "300+ dataset thực tế từ các doanh nghiệp hàng đầu",
    "Projects xây dựng portfolio với bài toán dữ liệu thực",
    "DataLab: Jupyter notebook trên cloud, không cần cài đặt",
  ],
  "pluralsight": [
    "Skill IQ Assessment: đánh giá kỹ năng khách quan 23 phút",
    "Cloud Labs: môi trường thực hành AWS, Azure, GCP thực tế",
    "800+ learning paths Cloud, DevOps, Security, Development",
    "Role IQ đo mức độ thành thạo theo từng vai trò IT",
  ],
  "oreilly": [
    "60.000+ sách và video từ O'Reilly và nhà xuất bản lớn",
    "Live Events: webinar và workshop trực tiếp với chuyên gia",
    "Interactive Labs: môi trường thực hành trực tiếp trong browser",
    "Early Release Content: đọc sách trước khi xuất bản chính thức",
  ],
  "brilliant": [
    "100+ khóa học toán học, khoa học, lập trình tương tác",
    "Học bằng cách giải quyết vấn đề thực tế, không học thuộc",
    "Daily Challenges rèn tư duy phản biện mỗi ngày",
    "Phủ từ Algebra đến Calculus, Physics, Neural Networks",
  ],
  "khan-academy": [
    "Khanmigo AI tutor cá nhân hóa theo trình độ từng học sinh",
    "Toán, Khoa học, Lập trình, SAT prep – hoàn toàn miễn phí",
    "Mastery-based learning: qua từng cấp độ khi thực sự hiểu",
    "Dashboard phụ huynh theo dõi tiến độ học của con em",
  ],

  // ── PHIM ẢNH ──────────────────────────────────────────────────────────────────
  "netflix-premium": [
    "4K Ultra HD + Dolby Vision + Dolby Atmos trên mọi thiết bị",
    "Xem đồng thời trên 4 màn hình, hỗ trợ 5 hồ sơ riêng biệt",
    "100 triệu+ nội dung: phim, series, anime, tài liệu",
    "Netflix Originals độc quyền, tải phim xem offline",
  ],
  "disney-plus": [
    "Toàn bộ vũ trụ Marvel (MCU), Star Wars, Pixar, Disney",
    "4K Ultra HD với Dolby Vision và Dolby Atmos",
    "GroupWatch: xem phim cùng tới 7 người online đồng thời",
    "Download không giới hạn trên 10 thiết bị di động",
  ],
  "hbo-max": [
    "HBO Originals: House of the Dragon, The Last of Us, Succession",
    "4K HDR Dolby Vision, Dolby Atmos không giới hạn",
    "Phim Warner Bros và DC Universe toàn bộ catalog",
    "Tải offline trên iOS và Android",
  ],
  "apple-tv": [
    "Apple Originals: Ted Lasso, Severance, The Morning Show",
    "4K Dolby Vision + HDR10 + Dolby Atmos trên mọi thiết bị",
    "MLS Season Pass: toàn bộ giải bóng đá MLS không quảng cáo",
    "SharePlay: xem phim cùng nhau qua FaceTime",
  ],

  // ── TIỆN ÍCH KHÁC ─────────────────────────────────────────────────────────────
  "lastpass": [
    "Lưu trữ mật khẩu không giới hạn, đồng bộ đa thiết bị",
    "1GB encrypted vault storage cho file bảo mật",
    "Dark Web Monitoring cảnh báo khi thông tin bị rò rỉ",
    "Password Sharing an toàn và Emergency Access",
  ],
  "1password": [
    "Travel Mode: ẩn dữ liệu nhạy cảm khi qua cửa khẩu hải quan",
    "Watchtower cảnh báo mật khẩu yếu, bị rò rỉ hoặc tái sử dụng",
    "SSH Key Agent và Developer tools cho secret management",
    "Item History đầy đủ – khôi phục mật khẩu bất kỳ lúc nào",
  ],
  "dashlane": [
    "Built-in VPN không giới hạn bandwidth (Hotspot Shield)",
    "Dark Web Monitoring liên tục cho email và thông tin cá nhân",
    "Passkeys support – đăng nhập không cần mật khẩu",
    "Password Health Score phân tích và cải thiện bảo mật",
  ],
  "bitwarden": [
    "Open source, code công khai – được kiểm tra bởi cộng đồng",
    "End-to-end encryption zero-knowledge, Bitwarden không đọc được",
    "Built-in 2FA Authenticator (TOTP) thay Google Authenticator",
    "Self-host option: deploy server riêng kiểm soát hoàn toàn",
  ],

  // ── VĂN PHÒNG ────────────────────────────────────────────────────────────────
  "microsoft-365": [
    "Word, Excel, PowerPoint, OneNote, Outlook bản đầy đủ nhất",
    "1TB OneDrive cloud storage đồng bộ mọi thiết bị",
    "Cài đặt trên 5 PC/Mac, 5 tablet và 5 điện thoại",
    "Microsoft Teams và Advanced Security với Defender",
  ],
  "google-workspace": [
    "Email doanh nghiệp với tên miền riêng (@domain.com)",
    "Google Drive 30GB–5TB lưu trữ tập trung",
    "Google Meet: video conference HD không giới hạn thời gian",
    "Admin Console và Vault cho compliance doanh nghiệp",
  ],
  "zoom-pro": [
    "Cuộc họp không giới hạn thời gian (bản free chỉ 40 phút)",
    "Tối đa 100 người tham gia mỗi phiên, Cloud Recording 5GB",
    "AI Companion: tóm tắt cuộc họp, tạo action items tự động",
    "Breakout Rooms, Polls, Q&A cho training và webinar",
  ],
  "slack-pro": [
    "Lịch sử tin nhắn không giới hạn (free chỉ 90 ngày)",
    "Tích hợp 2.600+ app: GitHub, Jira, Google Drive, Zoom",
    "Video/voice calls nhóm không giới hạn, 10GB storage/member",
    "Workflow Builder tự động hóa quy trình không cần code",
  ],
  "dropbox-plus": [
    "2TB cloud storage, Smart Sync không chiếm ổ đĩa máy tính",
    "180-day file recovery và version history đầy đủ",
    "Transfer file lên đến 2GB cho bất kỳ ai",
    "Priority support 24/7 và đồng bộ nhanh hơn",
  ],
  "adobe-acrobat": [
    "Chỉnh sửa text, ảnh trực tiếp trong PDF như Word",
    "OCR nhận diện văn bản trong ảnh scan, PDF quét tay",
    "E-signature: ký và yêu cầu chữ ký điện tử hợp pháp",
    "AI Assistant: tóm tắt và hỏi đáp nội dung tài liệu PDF",
  ],
  "notion-premium": [
    "Blocks không giới hạn – viết, database, board, wiki thoải mái",
    "File upload không giới hạn, 30-day page history",
    "Unlimited guests: mời cộng tác viên ngoài không giới hạn",
    "Notion API access để tích hợp với công cụ khác",
  ],
  "evernote": [
    "Ghi chú với text, ảnh, file, audio, sketch đa phương tiện",
    "Web Clipper: lưu bài viết, trang web vào Evernote tức thì",
    "PDF annotation, highlight và task management tích hợp",
    "Offline Notebooks: truy cập ghi chú không cần internet",
  ],
  "monday-com": [
    "Quản lý dự án với Board, Timeline, Gantt, Calendar view",
    "500 automations/tháng: thông báo, cập nhật trạng thái tự động",
    "Integrations: Slack, Zoom, Google Drive, Jira, GitHub",
    "Custom dashboards theo dõi KPI và tiến độ dự án",
  ],

  // ── VPN ───────────────────────────────────────────────────────────────────────
  "nordvpn": [
    "5.500+ server tại 60 quốc gia, tốc độ cao ổn định",
    "Threat Protection: chặn malware, quảng cáo, tracker",
    "Double VPN mã hóa 2 lớp và Kill Switch bảo vệ tối đa",
    "Meshnet: kết nối thiết bị riêng tư như LAN ảo",
  ],
  "expressvpn": [
    "Lightway Protocol: nhanh hơn OpenVPN 4x, tiết kiệm pin",
    "3.000+ server tại 94 quốc gia, kết nối ổn định",
    "Smart DNS Mediastreamer: xem Netflix US trên Smart TV",
    "No-logs policy đã được kiểm toán độc lập",
  ],
  "surfshark": [
    "Thiết bị không giới hạn – một tài khoản cho cả gia đình",
    "CleanWeb chặn quảng cáo, malware, phishing tích hợp sẵn",
    "NoBorders Mode hoạt động ở các nước hạn chế VPN",
    "MultiHop: kết nối qua 2 server cho privacy tối đa",
  ],
  "protonvpn": [
    "Tor over VPN: truy cập Tor network không cần Tor browser",
    "Secure Core: traffic qua server ở Thụy Sĩ, Iceland",
    "NetShield DNS-based ad blocker + anti-malware",
    "No-logs policy, mã nguồn mở, được kiểm toán độc lập",
  ],
};
