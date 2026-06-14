"use client";

export default function HeroCtaButtons() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      className="animate-slide-up flex flex-col sm:flex-row gap-4 justify-center"
      style={{ animationDelay: "400ms" }}
    >
      <a
        href="#featured"
        onClick={scrollTo("featured")}
        className="relative overflow-hidden bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5 group"
      >
        <span className="relative z-10">Khám phá ngay →</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </a>
      <a
        href="#categories"
        onClick={scrollTo("categories")}
        className="border-2 border-white/25 hover:border-white/50 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:bg-white/10 hover:-translate-y-0.5 backdrop-blur-sm"
      >
        Xem danh mục
      </a>
    </div>
  );
}
