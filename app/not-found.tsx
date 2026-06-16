import Link from "next/link";

export default function NotFound() {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      <div className="text-center">
        <div className="lux-ornament mb-6 text-[9px] tracking-[0.4em]">✦ LỖI ✦</div>

        <div
          className="font-display font-light select-none mb-4 leading-none"
          style={{ fontSize: "clamp(6rem, 20vw, 12rem)", color: "var(--lux-gold)", opacity: 0.15 }}
          aria-hidden="true"
        >
          404
        </div>

        <h1
          className="font-display text-2xl md:text-3xl font-light mb-3 -mt-8"
          style={{ color: "var(--lux-cream)" }}
        >
          Trang không tồn tại
        </h1>
        <p className="font-sans text-sm font-light mb-10 max-w-xs mx-auto" style={{ color: "var(--lux-silver)" }}>
          Trang bạn tìm kiếm đã bị xóa hoặc đường dẫn không đúng.
        </p>

        <Link
          href="/"
          className="lux-btn-primary"
        >
          Về trang chủ
        </Link>
      </div>
    </main>
  );
}
