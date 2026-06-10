import Link from "next/link";
import { categories } from "@/data/products";
import AnimatedSection from "../ui/animated-section";

export default function CategoryGrid() {
  return (
    <AnimatedSection>
      <section id="categories" className="py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
              Danh mục sản phẩm
            </h2>
            <p className="text-gray-500">
              Khám phá hơn 50 sản phẩm premium chính hãng
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <Link
                key={cat.id}
                href={`/category/${cat.id}`}
                className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-indigo-200 hover:shadow-lg hover:shadow-indigo-100/40 transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                <div
                  className={`w-14 h-14 rounded-2xl ${cat.bgColor} flex items-center justify-center text-3xl mx-auto mb-3 transition-transform duration-400 group-hover:scale-115 group-hover:-translate-y-0.5`}
                >
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-indigo-700 transition-colors duration-200">
                  {cat.name}
                </h3>
                <span className={`text-xs font-medium ${cat.textColor}`}>
                  {cat.count} sản phẩm
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
