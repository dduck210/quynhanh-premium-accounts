import { Product } from "@/data/products";
import ProductCard from "../product/product-card";
import AnimatedSection from "../ui/animated-section";

export default function FeaturedProducts({ products }: { products: Product[] }) {
  const featuredProducts = products.filter((p) => p.isFeatured);
  return (
    <section
      id="featured"
      className="py-20 border-b"
      style={{ backgroundColor: "var(--lux-obsidian)", borderColor: "var(--lux-gold-border)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-14">
          <div className="lux-ornament mb-6 text-[10px] tracking-[0.4em]">✦ NỔI BẬT ✦</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-3" style={{ color: "var(--lux-cream)" }}>
            Sản phẩm{" "}
            <span className="gold-text-animated italic font-extralight">nổi bật</span>
          </h2>
          <p className="text-sm font-light max-w-md mx-auto" style={{ color: "var(--lux-silver)" }}>
            Những tài khoản premium được tin dùng nhiều nhất
          </p>
        </AnimatedSection>

        {/* Mobile: horizontal scroll */}
        <div className="relative md:hidden">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-3 -mx-4 px-4">
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex-none w-[72vw] sm:w-60">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
          <div
            className="absolute right-0 top-0 bottom-3 w-16 pointer-events-none"
            style={{ backgroundImage: `linear-gradient(to left, var(--lux-obsidian), transparent)` }}
          />
        </div>

        {/* Desktop: grid */}
        <div className="hidden md:grid md:grid-cols-3 xl:grid-cols-6 gap-4">
          {featuredProducts.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 60}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
