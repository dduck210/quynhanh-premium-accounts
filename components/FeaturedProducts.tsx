import { featuredProducts } from "@/data/products";
import ProductCard from "./ProductCard";
import AnimatedSection from "./AnimatedSection";

export default function FeaturedProducts() {
  return (
    <AnimatedSection>
      <section id="featured" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Nổi bật</h2>
            <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              HOT
            </span>
          </div>

          {/* Horizontal scroll with right gradient fade */}
          <div className="relative">
            <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4">
              {featuredProducts.map((product) => (
                <div key={product.id} className="flex-none w-56 sm:w-64">
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
            {/* Right fade mask */}
            <div className="absolute right-0 top-0 bottom-3 w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
