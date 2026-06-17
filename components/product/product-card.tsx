"use client";

import { useState, useRef, useCallback } from "react";
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
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110"
        style={{ backgroundColor: product.logoColor + "18" }}
      >
        <BrandSvgIcon productId={product.id} size={28} />
      </div>
    );
  }

  return (
    <div
      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 flex-shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:scale-110 overflow-hidden"
      style={{ backgroundColor: product.logoColor + "20" }}
    >
      {err ? (
        <span className="text-2xl">{product.logoEmoji}</span>
      ) : (
        <Image
          src={`/images/products/${product.id.toLowerCase()}.png`}
          alt={product.name}
          width={36}
          height={36}
          className="w-8 h-8 object-contain"
          onError={() => setErr(true)}
          unoptimized
        />
      )}
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const firstTier   = product.pricingTiers?.[0];
  const discountPct = firstTier?.savings ?? null;
  const cardRef     = useRef<HTMLAnchorElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect  = el.getBoundingClientRect();
    const x     = (e.clientX - rect.left) / rect.width  - 0.5;
    const y     = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.setProperty("--tilt-x", `${-y * 8}deg`);
    el.style.setProperty("--tilt-y", `${x  * 8}deg`);
  }, []);

  const onMouseLeave = useCallback(() => {
    const el = cardRef.current;
    if (!el) return;
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-y", "0deg");
  }, []);

  return (
    <Link
      ref={cardRef}
      href={`/product/${product.id}`}
      className="relative tilt-card glass-card flex flex-col h-full group cursor-pointer active:opacity-80"
      style={{ WebkitTapHighlightColor: "transparent" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Badges */}
      {discountPct ? (
        <span className="absolute top-3 right-3 z-10 text-[11px] font-bold px-2 py-1 rounded tracking-wider" style={{ backgroundColor: "var(--lux-gold)", color: "var(--lux-void)" }}>
          -{discountPct}%
        </span>
      ) : product.isNew ? (
        <span className="absolute top-3 right-3 z-10 lux-badge" style={{ fontSize: "11px" }}>Mới</span>
      ) : null}

      <div className="p-5 flex flex-col flex-1 relative z-[1]">
        <ProductLogo product={product} />

        {/* Category */}
        <span className="font-sans text-[11px] tracking-[0.2em] uppercase mb-2 font-medium" style={{ color: "var(--lux-gold-dim)" }}>
          {product.categoryName}
        </span>

        {/* Name */}
        <h3
          className="font-display text-base font-normal leading-snug mb-1.5 transition-colors duration-200"
          style={{ color: "var(--lux-cream)" }}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-sm font-light leading-relaxed flex-1 mb-4 line-clamp-2" style={{ color: "var(--lux-silver)" }}>
          {product.description}
        </p>

        {/* Price */}
        {firstTier && (
          <div className="flex items-baseline gap-1.5 mb-4">
            <span className="font-display text-xl font-medium" style={{ color: "var(--lux-gold)" }}>
              {formatPrice(firstTier.price)}
            </span>
            <span className="text-xs font-light" style={{ color: "var(--lux-smoke)" }}>/{firstTier.duration}</span>
          </div>
        )}

        {/* CTA — no inline color: inline style overrides hover classes */}
        <div
          className="w-full py-2 text-center text-[13px] font-sans font-medium tracking-[0.15em] uppercase border rounded transition-all duration-300 text-[var(--lux-gold)] border-[var(--lux-gold-border)] group-hover:bg-[var(--lux-gold)] group-hover:border-[var(--lux-gold)] group-hover:text-[var(--lux-void)]"
        >
          Xem chi tiết
        </div>
      </div>
    </Link>
  );
}
