"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Product, formatPrice } from "@/data/products";
import BrandSvgIcon from "./brand-svg-icon";
import { BRAND_ICON_MAP } from "@/lib/product-brand-icons";

function ProductLogo({ product }: { product: Product }) {
  const [err, setErr] = useState(false);

  if (BRAND_ICON_MAP[product.id]) {
    return (
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
        style={{ backgroundColor: product.logoColor + "15" }}
      >
        <BrandSvgIcon productId={product.id} size={30} />
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110 overflow-hidden"
      style={{ backgroundColor: product.logoColor + "22" }}
    >
      {err ? (
        <span className="text-2xl">{product.logoEmoji}</span>
      ) : (
        <Image
          src={`/images/products/${product.id.toLowerCase()}.png`}
          alt={product.name}
          width={40}
          height={40}
          className="w-9 h-9 object-contain"
          onError={() => setErr(true)}
          unoptimized
        />
      )}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const firstTier = product.pricingTiers?.[0];
  const discountPct = firstTier?.savings ?? null;

  return (
    <Link
      href={`/product/${product.id}`}
      className="relative bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-blue-100/60 border border-gray-100 hover:border-blue-200 transition-all duration-300 hover:-translate-y-1.5 flex flex-col h-full overflow-hidden group cursor-pointer"
    >
      {/* Top-right badge — sale takes priority over new */}
      {discountPct ? (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full z-10 leading-5">
          -{discountPct}%
        </span>
      ) : product.isNew ? (
        <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full z-10 leading-5">
          Mới
        </span>
      ) : null}

      <div className="p-4 flex flex-col flex-1">
        <ProductLogo product={product} />

        {/* Category pill */}
        <span className="inline-block text-[11px] font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full mb-2 w-fit">
          {product.categoryName}
        </span>

        {/* Name & description */}
        <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 group-hover:text-blue-700 transition-colors duration-200">
          {product.name}
        </h3>
        <p className="text-gray-400 text-xs leading-relaxed flex-1 mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Pricing */}
        {firstTier && (
          <div className="flex items-baseline gap-1.5 mb-3 flex-wrap">
            <span className="text-lg font-black text-blue-600">
              {formatPrice(firstTier.price)}
            </span>
            <span className="text-xs text-gray-400">/{firstTier.duration}</span>
          </div>
        )}

        {/* CTA — shimmer effect on hover */}
        <div className="relative block w-full py-2 px-3 rounded-lg border border-blue-200 text-blue-600 text-xs font-semibold text-center overflow-hidden transition-all duration-200 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-200">
          <span className="relative z-10">Xem chi tiết</span>
          <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 ease-in-out" />
        </div>
      </div>
    </Link>
  );
}
