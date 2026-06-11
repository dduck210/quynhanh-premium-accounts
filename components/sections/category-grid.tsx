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

export default function CategoryGrid({ categories }: { categories: Category[] }) {
  return (
    <section id="categories" className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            Danh mục sản phẩm
          </h2>
          <p className="text-gray-500">
            Khám phá hơn 50 sản phẩm premium chính hãng
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const Icon = ICON_MAP[cat.icon] ?? Zap;
            return (
              <AnimatedSection key={cat.id} delay={i * 55}>
                <Link
                  href={`/category/${cat.id}`}
                  className="block bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl ${cat.bgColor} flex items-center justify-center mx-auto mb-3 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5`}
                  >
                    <Icon className={`w-7 h-7 ${cat.textColor}`} strokeWidth={1.75} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-blue-700 transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <span className={`text-xs font-medium ${cat.textColor}`}>
                    {cat.count} sản phẩm
                  </span>
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
