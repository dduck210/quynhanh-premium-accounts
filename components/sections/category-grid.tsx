import Link from "next/link";
import {
  Bot, Music, Palette, BookOpen, Film, Zap, Briefcase, Shield,
  type LucideIcon,
} from "lucide-react";
import { Category } from "@/data/products";
import AnimatedSection from "../ui/animated-section";

const ICON_MAP: Record<string, LucideIcon> = {
  Bot, Music, Palette, BookOpen, Film, Zap, Briefcase, Shield,
};

const PALETTE = [
  { bg: "rgba(142,80,112,0.10)",  accent: "#8E5070" },
  { bg: "rgba(176,124,151,0.08)",   accent: "#B07C97" },
  { bg: "rgba(230,154,184,0.10)", accent: "#E69AB8" },
  { bg: "rgba(142,80,112,0.07)",  accent: "#8E5070" },
  { bg: "rgba(142,80,112,0.10)",  accent: "#8E5070" },
  { bg: "rgba(176,124,151,0.08)",   accent: "#B07C97" },
  { bg: "rgba(230,154,184,0.10)", accent: "#E69AB8" },
  { bg: "rgba(142,80,112,0.07)",  accent: "#8E5070" },
];

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section
      id="categories"
      className="py-20 border-b"
      style={{ backgroundColor: "var(--lux-carbon)", borderColor: "var(--lux-gold-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="lux-ornament mb-6 text-[10px] tracking-[0.4em]">✦ DANH MỤC ✦</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "var(--lux-cream)" }}>
            Khám phá{" "}
            <span className="gold-text-animated italic font-extralight">danh mục</span>
          </h2>
          <p className="text-sm font-light" style={{ color: "var(--lux-silver)" }}>
            Hơn 50 sản phẩm premium chính hãng
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Zap;
            const { bg, accent } = PALETTE[i % PALETTE.length];
            return (
              <AnimatedSection key={cat.id} delay={i * 50}>
                <Link
                  href={`/category/${cat.id}`}
                  className="group flex flex-col items-center text-center p-6 rounded-xl border transition-[transform,opacity,border-color,box-shadow] duration-300 hover:-translate-y-1 active:opacity-70 active:scale-[0.98]"
                  style={{
                    backgroundColor: "rgba(252,232,240,0.8)",
                    borderColor: "var(--lux-gold-border)",
                    WebkitTapHighlightColor: "transparent",
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5"
                    style={{ backgroundColor: bg }}
                  >
                    <Icon className="w-7 h-7" style={{ color: accent }} strokeWidth={1.5} />
                  </div>

                  {/* No inline color — allows group-hover Tailwind class to work */}
                  <h3
                    className="font-display text-base font-light mb-1 transition-colors duration-200 text-[var(--lux-ivory)] group-hover:text-[var(--lux-cream)]"
                  >
                    {cat.name}
                  </h3>
                  <span className="font-sans font-medium text-[10px] tracking-[0.15em]" style={{ color: accent }}>
                    {cat.count} sản phẩm
                  </span>

                  {/* Gold underline on hover */}
                  <div
                    className="h-px w-0 group-hover:w-8 transition-all duration-400 mt-3"
                    style={{ backgroundColor: accent }}
                  />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
