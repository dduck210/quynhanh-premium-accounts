import Link from "next/link";
import { Product } from "@/data/products";
import ProductCard from "../product/product-card";
import AnimatedSection from "../ui/animated-section";

interface Props {
  categoryId: string;
  categoryName: string;
  categoryIcon: string;
  productCount: number;
  products: Product[];
}

export default function ProductSection({
  categoryId,
  categoryName,
  categoryIcon,
  productCount,
  products,
}: Props) {
  if (products.length === 0) return null;

  return (
    <section id={categoryId} className="py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-wrap items-end justify-between gap-y-3 mb-8">
          <div className="flex items-center gap-3 min-w-0">
            <span className="flex-shrink-0 text-[10px] tracking-widest" style={{ color: "var(--lux-gold)" }}>✦</span>
            <h2
              className="font-display text-2xl md:text-3xl font-light truncate"
              style={{ color: "var(--lux-cream)" }}
            >
              {categoryName}
            </h2>
            <span className="lux-badge flex-shrink-0">
              {productCount}
            </span>
          </div>
          <Link
            href={`/category/${categoryId}`}
            className="font-sans font-medium text-xs tracking-[0.15em] uppercase transition-colors duration-200 flex-shrink-0 text-[var(--lux-gold-dim)] hover:text-[var(--lux-gold)] active:opacity-70"
          >
            Xem tất cả →
          </Link>
        </AnimatedSection>

        {/* Product grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 70}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
