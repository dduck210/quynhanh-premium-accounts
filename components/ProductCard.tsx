import Link from "next/link";
import { Product, formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/product/${product.id}`}
      className="relative bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-indigo-100/60 border border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden group cursor-pointer"
    >
      {/* Sale / New badge */}
      {product.isSale && !product.isNew && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 leading-5">
          Sale
        </span>
      )}
      {product.isNew && (
        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 leading-5">
          Mới
        </span>
      )}

      <div className="p-4 flex flex-col flex-1">
        {/* Logo with float on hover */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-3 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
          style={{ backgroundColor: product.logoColor + "22" }}
        >
          {product.logoEmoji}
        </div>

        {/* Category pill */}
        <span className="inline-block text-[11px] font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-0.5 rounded-full mb-2 w-fit">
          {product.categoryName}
        </span>

        {/* Name & description */}
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-3">
          {product.description}
        </p>

        {/* Pricing */}
        <div className="flex items-baseline gap-1.5 mb-3 flex-wrap">
          <span className="text-lg font-black text-indigo-600">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-xs text-gray-400 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
          <span className="text-xs text-gray-400">/{product.duration}</span>
        </div>

        {/* CTA */}
        <div className="block w-full py-2 px-3 rounded-lg border border-indigo-200 text-indigo-600 text-xs font-semibold text-center transition-all duration-200 group-hover:bg-indigo-600 group-hover:text-white group-hover:border-indigo-600 group-hover:shadow-md group-hover:shadow-indigo-200">
          Xem chi tiết
        </div>
      </div>
    </Link>
  );
}
