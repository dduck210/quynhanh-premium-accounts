const MESSAGES = [
  "✦ Chất lượng – Ưu đãi – Uy tín",
  "⚡ Kích hoạt trong 15 phút",
  "🛡️ Bảo hành toàn bộ hạn dùng",
  "🎧 Hỗ trợ kỹ thuật 24/7",
  "💳 Thanh toán an toàn & bảo mật",
  "🔥 Hơn 1000 khách hàng tin tưởng",
];

export default function AnnouncementBar() {
  /* Duplicate the list so the marquee loops seamlessly */
  const track = [...MESSAGES, ...MESSAGES];

  return (
    <div className="bg-indigo-950 text-white text-xs py-2 overflow-hidden">
      {/* Mobile: scrolling marquee */}
      <div className="sm:hidden flex items-center">
        <div className="marquee-track flex gap-10 whitespace-nowrap">
          {track.map((msg, i) => (
            <span key={i} className="text-indigo-200 font-medium tracking-wide flex-shrink-0">
              {msg}
            </span>
          ))}
        </div>
      </div>

      {/* Desktop: static layout */}
      <div className="hidden sm:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between gap-4">
        <p className="font-medium tracking-wide text-indigo-100">
          ✦ Chất lượng – Ưu đãi – Uy tín &nbsp;|&nbsp; Quỳnh Anh Premium
          Accounts &nbsp;|&nbsp; Hỗ trợ 24/7
        </p>
        <div className="flex items-center gap-5 text-indigo-300 flex-shrink-0">
          <span>⚡ Kích hoạt trong 15 phút</span>
          <span>🛡️ Bảo hành toàn bộ hạn dùng</span>
        </div>
      </div>
    </div>
  );
}
