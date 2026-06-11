import { BadgeCheck, Zap, Lock, Headphones, type LucideIcon } from "lucide-react";

const STATS = [
  { value: "50+", label: "Sản phẩm" },
  { value: "1000+", label: "Khách hàng" },
  { value: "24/7", label: "Hỗ trợ" },
  { value: "100%", label: "Chính hãng" },
];

const TRUST_BADGES: { icon: LucideIcon; text: string }[] = [
  { icon: BadgeCheck, text: "Bảo hành chính hãng" },
  { icon: Zap,        text: "Kích hoạt ngay lập tức" },
  { icon: Lock,       text: "Thanh toán an toàn" },
  { icon: Headphones, text: "Hỗ trợ 24/7" },
];

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 py-24 md:py-36 overflow-hidden">
      {/* Radial glow layers */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(99,102,241,0.22),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_60%,rgba(168,85,247,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(99,102,241,0.1),transparent_50%)]" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.055]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #a5b4fc 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Animated floating orbs */}
      <div className="absolute top-1/4 left-8 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl animate-float pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-8 w-64 h-64 rounded-full bg-purple-600/10 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/5 blur-3xl animate-float pointer-events-none"
        style={{ animationDelay: "1s" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="animate-slide-up inline-flex items-center gap-2 bg-blue-500/15 border border-blue-400/30 rounded-full px-5 py-2 mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
          <span className="text-blue-300 text-sm font-semibold tracking-wide">
            Chính hãng 100% · Uy tín hàng đầu Việt Nam
          </span>
        </div>

        {/* Headline */}
        <h1
          className="animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-[1.08] tracking-tight"
          style={{ animationDelay: "120ms" }}
        >
          Tài khoản premium
          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mt-1">
            giá tốt nhất
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-slide-up text-lg md:text-xl text-slate-300/90 mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ animationDelay: "260ms" }}
        >
          Hơn 50 phần mềm premium chính hãng — Netflix, ChatGPT, Adobe, Spotify
          và nhiều hơn nữa. Hỗ trợ kỹ thuật 24/7, bảo hành toàn bộ hạn dùng.
        </p>

        {/* CTA Buttons */}
        <div
          className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#featured"
            className="relative overflow-hidden bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
          >
            <span className="relative z-10">Khám phá ngay →</span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#categories"
            className="border-2 border-white/25 hover:border-white/50 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-sm"
          >
            Xem danh mục
          </a>
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-in grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14 mb-8 max-w-xl mx-auto"
          style={{ animationDelay: "550ms" }}
        >
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl md:text-3xl font-black text-white leading-none mb-1">
                {s.value}
              </div>
              <div className="text-xs text-slate-400 font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-in flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-400 text-xs sm:text-sm border-t border-white/10 pt-6"
          style={{ animationDelay: "680ms" }}
        >
          {TRUST_BADGES.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5">
              <Icon className="w-3.5 h-3.5 text-blue-400" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
