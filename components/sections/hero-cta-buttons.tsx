"use client";
import { smoothScrollTo } from "@/lib/smooth-scroll";

export default function HeroCtaButtons() {
  const scrollTo = (id: string) => () => {
    const el = document.getElementById(id);
    if (!el) return;
    smoothScrollTo(el.getBoundingClientRect().top + window.scrollY);
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button type="button" onClick={scrollTo("featured")} className="lux-btn-primary">
        Khám phá ngay →
      </button>
      <button type="button" onClick={scrollTo("categories")} className="lux-btn-outline">
        Xem danh mục
      </button>
    </div>
  );
}
