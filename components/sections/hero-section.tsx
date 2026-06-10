export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 py-24 md:py-36 overflow-hidden">
      {/* Radial glow effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(99,102,241,0.18),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(168,85,247,0.12),transparent_55%)]" />

      {/* Decorative dots grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, #a5b4fc 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 bg-indigo-500/15 border border-indigo-400/30 rounded-full px-5 py-2 mb-7">
          <span className="text-indigo-300 text-sm font-semibold tracking-wide">
            ✦ Chính hãng 100%
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.1] tracking-tight"
          style={{ animationDelay: "120ms" }}
        >
          Sản phẩm chính hãng
          <span className="block bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
            giá tốt nhất
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-slide-up text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "260ms" }}
        >
          Tài khoản premium chính hãng, uy tín hàng đầu Việt Nam.
          Hỗ trợ kỹ thuật 24/7, bảo hành toàn bộ sản phẩm.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#featured"
            className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Khám phá ngay
          </a>
          <a
            href="#categories"
            className="border-2 border-white/25 hover:border-white/50 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5"
          >
            Xem danh mục
          </a>
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-in flex flex-wrap items-center justify-center gap-6 mt-14 text-slate-400 text-sm"
          style={{ animationDelay: "600ms" }}
        >
          {[
            "✅ Bảo hành chính hãng",
            "⚡ Kích hoạt ngay lập tức",
            "🔒 Thanh toán an toàn",
            "🎧 Hỗ trợ 24/7",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
