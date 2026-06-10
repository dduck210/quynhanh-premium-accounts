export default function AnnouncementBar() {
  return (
    <div className="bg-indigo-950 text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="font-medium tracking-wide text-indigo-100 truncate">
          <span className="sm:hidden">✦ Quỳnh Anh Premium Accounts</span>
          <span className="hidden sm:inline">
            ✦ Chất lượng – Ưu đãi – Uy tín &nbsp;|&nbsp; Quỳnh Anh Premium
            Accounts &nbsp;|&nbsp; Hỗ trợ 24/7
          </span>
        </p>
        <div className="hidden sm:flex items-center gap-5 text-indigo-300 flex-shrink-0">
          <span>⚡ Kích hoạt trong 15 phút</span>
          <span>🛡️ Bảo hành toàn bộ hạn dùng</span>
        </div>
      </div>
    </div>
  );
}
