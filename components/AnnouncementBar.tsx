export default function AnnouncementBar() {
  return (
    <div className="bg-indigo-950 text-white text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="font-medium tracking-wide text-indigo-100">
          ✦ Chất lượng – Ưu đãi – Uy tín &nbsp;|&nbsp; Quỳnh Anh Premium Accounts &nbsp;|&nbsp; Hỗ trợ 24/7
        </p>
        <div className="hidden sm:flex items-center gap-5 text-indigo-300 flex-shrink-0">
          <span>📧 support@menpremium.vn</span>
          <span>💬 Zalo: 0912.345.678</span>
        </div>
      </div>
    </div>
  );
}
