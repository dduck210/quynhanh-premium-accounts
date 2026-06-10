const categoryLinks = [
  "AI Chat",
  "Âm nhạc",
  "Design & Photo",
  "Học tập",
  "Phim ảnh",
  "VPN",
  "Văn phòng",
  "Tiện ích khác",
];
const policyLinks = [
  "Chính sách bảo hành",
  "Chính sách hoàn tiền",
  "Điều khoản sử dụng",
  "Chính sách bảo mật",
  "Hướng dẫn mua hàng",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-indigo-400">Quỳnh Anh</span>
              <span className="text-2xl font-black text-white">Premium</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Cửa hàng tài khoản phần mềm premium chính hãng, uy tín hàng đầu
              Việt Nam.
            </p>
            <p className="text-slate-500 text-xs">
              ⏰ Hỗ trợ: 8:00 – 23:00 mỗi ngày
            </p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Danh mục
            </h3>
            <ul className="space-y-2">
              {categoryLinks.map((cat) => (
                <li key={cat}>
                  <a
                    href="#categories"
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {cat}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Chính sách
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((p) => (
                <li key={p}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>📧 support@menpremium.vn</li>
              <li>💬 Zalo: 0912.345.678</li>
              <li>📘 facebook.com/menpremium</li>
              <li>📍 Hà Nội, Việt Nam</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>© 2024 Quỳnh Anh Premium Accounts. Tất cả quyền được bảo lưu.</p>
          <p>Thiết kế với ❤️ tại Việt Nam</p>
        </div>
      </div>
    </footer>
  );
}
