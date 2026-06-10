import { featuredProducts } from "@/data/products";
import ProductCard from "../product/product-card";
import AnimatedSection from "../ui/animated-section";

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">Nổi bật</h2>
            <span className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              HOT
            </span>
          </div>
        </AnimatedSection>

        {/* Mobile: horizontal scroll */}
        <div className="relative md:hidden">
          <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex-none w-56 sm:w-64">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div className="absolute right-0 top-0 bottom-3 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-5 gap-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
