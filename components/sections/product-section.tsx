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
    <section id={categoryId} className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="flex flex-wrap items-center justify-between gap-y-2 mb-7">
          <div className="flex items-center gap-3 min-w-0">
            <span className="text-2xl flex-shrink-0">{categoryIcon}</span>
            <h2 className="text-xl md:text-2xl font-black text-gray-900 truncate">
              {categoryName}
            </h2>
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full flex-shrink-0">
              {productCount} sản phẩm
            </span>
          </div>
          <Link
            href={`/category/${categoryId}`}
            className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-1 transition-all duration-200 hover:gap-2 flex-shrink-0"
          >
            Xem tất cả →
          </Link>
        </AnimatedSection>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 80}>
              <ProductCard product={product} />
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
