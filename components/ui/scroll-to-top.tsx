"use client";
import { useEffect, useState } from "react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => smoothScrollTo(0)}
      aria-label="Về đầu trang"
      className="fixed bottom-6 right-6 z-50 w-11 h-11 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white rounded-full shadow-lg shadow-indigo-500/30 flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 15l-6-6-6 6" />
      </svg>
    </button>
  );
}
