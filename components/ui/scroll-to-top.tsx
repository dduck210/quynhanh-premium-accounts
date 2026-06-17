"use client";
import { useEffect, useRef } from "react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function ScrollToTop() {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    const onScroll = () => {
      const show = window.scrollY > 400;
      btn.style.opacity = show ? "1" : "0";
      btn.style.pointerEvents = show ? "auto" : "none";
      btn.style.transform = show ? "translateY(0)" : "translateY(8px)";
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      ref={btnRef}
      onClick={() => smoothScrollTo(0)}
      aria-label="Về đầu trang"
      style={{ opacity: 0, pointerEvents: "none", transform: "translateY(8px)" }}
      className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 active:scale-95 bg-[var(--lux-obsidian)] text-[var(--lux-gold)] border-[var(--lux-gold)] hover:bg-[var(--lux-gold)] hover:text-[var(--lux-void)] shadow-[0_4px_20px_rgba(233,30,140,0.30)]"
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
