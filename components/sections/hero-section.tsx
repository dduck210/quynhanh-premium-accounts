"use client";
import { useEffect, useRef } from "react";
import { BadgeCheck, Zap, Lock, Headphones } from "lucide-react";
import HeroCtaButtons from "./hero-cta-buttons";

const STATS = [
  { value: 50, suffix: "+", label: "Sản phẩm" },
  { value: 1000, suffix: "+", label: "Khách hàng" },
  { value: 24, suffix: "/7", label: "Hỗ trợ" },
  { value: 100, suffix: "%", label: "Chính hãng" },
];

const TRUST = [
  { icon: BadgeCheck, text: "Chính hãng 100%" },
  { icon: Zap, text: "Giao trong 15 phút" },
  { icon: Lock, text: "Thanh toán an toàn" },
  { icon: Headphones, text: "Hỗ trợ 24/7" },
];

function useCountUp(
  target: number,
  suffix: string,
  ref: React.RefObject<HTMLSpanElement>,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        let start = 0;
        const dur = 1400;
        const step = (ts: number) => {
          if (!startTime) startTime = ts;
          const progress = Math.min((ts - startTime) / dur, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          el.textContent =
            Math.floor(ease * target) + (progress >= 1 ? suffix : "");
          if (progress < 1) requestAnimationFrame(step);
        };
        let startTime = 0;
        requestAnimationFrame(step);
      },
      { threshold: 0.5 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target, suffix, ref]);
}

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  useCountUp(value, suffix, ref);
  return (
    <div className="text-center px-6 py-4 relative">
      <div className="font-display text-4xl md:text-5xl font-light mb-1 gold-text-animated">
        <span ref={ref}>
          {value}
          {suffix}
        </span>
      </div>
      <div
        className="font-sans text-[10px] tracking-[0.2em] uppercase font-medium"
        style={{ color: "#7A5068" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      style={{ backgroundColor: "#FDF5F9" }}
    >
      {/* Particle background */}
      <div className="hero-particles" aria-hidden="true" />

      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(142,80,112,0.20) 0%, transparent 70%)",
          filter: "blur(40px)",
          animation: "floatLuxury 8s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(142,80,112,0.14) 0%, transparent 70%)",
          filter: "blur(60px)",
          animation: "floatLuxury 12s ease-in-out infinite reverse",
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
        {/* Label */}
        <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
          <div className="lux-badge mb-8 mx-auto w-fit">
            <span style={{ color: "var(--lux-gold)" }}>✦</span>
            Chính hãng 100% · Uy tín hàng đầu Việt Nam
          </div>
        </div>

        {/* Main headline */}
        <div className="animate-reveal-up" style={{ animationDelay: "200ms" }}>
          <h1
            className="font-display font-light leading-[1.1] mb-4"
            style={{
              fontSize: "clamp(3rem, 8vw, 7.5rem)",
              color: "#8E5070",
            }}
          >
            Tài khoản
            <span className="block gold-text-animated font-extralight italic">
              Premium
            </span>
            giá tốt nhất
          </h1>
        </div>

        {/* Gold line */}
        <div
          className="mx-auto mb-8 animate-line-expand"
          style={{
            width: "80px",
            height: "1px",
            background: "var(--lux-gold-gradient)",
            animationDelay: "500ms",
            transformOrigin: "center",
          }}
          aria-hidden="true"
        />

        {/* Sub */}
        <p
          className="animate-fade-in text-lg md:text-xl font-light leading-relaxed mb-12 max-w-2xl mx-auto"
          style={{ color: "#7A5068", animationDelay: "400ms" }}
        >
          Hơn 50 phần mềm premium chính hãng — Netflix, ChatGPT, Adobe, Spotify
          và nhiều hơn nữa. Hỗ trợ kỹ thuật 24/7, bảo hành toàn bộ.
        </p>

        {/* CTAs */}
        <div className="animate-fade-in" style={{ animationDelay: "500ms" }}>
          <HeroCtaButtons />
        </div>

        {/* Stats row */}
        <div
          className="animate-fade-in mt-10 mb-8 grid grid-cols-2 sm:grid-cols-4 rounded-xl overflow-hidden border divide-x divide-y sm:divide-y-0"
          style={{
            borderColor: "rgba(142,80,112,0.2)",
            backgroundColor: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(12px)",
            animationDelay: "600ms",
          }}
        >
          {STATS.map((s) => (
            <StatCounter key={s.label} {...s} />
          ))}
        </div>

        {/* Trust badges */}
        <div
          className="animate-fade-in flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs pt-6"
          style={{
            borderTop: "1px solid rgba(142,80,112,0.2)",
            color: "#7A5068",
            animationDelay: "700ms",
          }}
        >
          {TRUST.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-1.5 font-light">
              <Icon
                className="w-3.5 h-3.5"
                style={{ color: "var(--lux-gold)" }}
              />
              {text}
            </span>
          ))}
        </div>

      </div>

      {/* Scroll indicator — absolute bottom so it always sits near the fold */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float-luxury"
        aria-hidden="true"
      >
        <span
          className="font-label text-[9px] tracking-[0.3em] uppercase"
          style={{ color: "#7A5068" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, var(--lux-gold-dim), transparent)" }}
        />
      </div>
    </section>
  );
}
