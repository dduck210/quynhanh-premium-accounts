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
    <AnimatedSection>
      <section id={categoryId} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-7">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{categoryIcon}</span>
              <h2 className="text-xl md:text-2xl font-black text-gray-900">{categoryName}</h2>
              <span className="bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full">
                {productCount} sản phẩm
              </span>
            </div>
            <a
              href={`/category/${categoryId}`}
              className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm flex items-center gap-1 transition-all duration-200 hover:gap-2"
            >
              Xem tất cả →
            </a>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
