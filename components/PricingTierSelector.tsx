"use client";
import { useState } from "react";
import { PricingTier } from "@/data/product-details";
import { formatPrice } from "@/data/products";

interface Props {
  tiers: PricingTier[];
  productName: string;
}

export default function PricingTierSelector({ tiers }: Props) {
  const defaultIndex = tiers.findIndex((t) => t.isPopular);
  const [selected, setSelected] = useState(defaultIndex >= 0 ? defaultIndex : 0);
  const tier = tiers[selected];

  return (
    <div>
      {/* Duration selector */}
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
        Chọn thời hạn sử dụng
      </p>
      <div className="flex flex-wrap gap-2.5 mb-6">
        {tiers.map((t, i) => (
          <button
            key={t.duration}
            onClick={() => setSelected(i)}
            className={`relative px-4 py-2 rounded-xl border-2 font-semibold text-sm transition-all duration-200 active:scale-95 ${
              selected === i
                ? "border-indigo-600 bg-indigo-600 text-white shadow-md shadow-indigo-200 scale-105"
                : "border-gray-200 text-gray-600 hover:border-indigo-300 hover:bg-indigo-50 bg-white"
            }`}
          >
            {t.duration}
            {t.savings && (
              <span
                className={`ml-1.5 text-xs ${
                  selected === i ? "text-indigo-200" : "text-indigo-500"
                }`}
              >
                -{t.savings}%
              </span>
            )}
            {t.isPopular && (
              <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[9px] font-black px-1.5 py-0.5 rounded-full whitespace-nowrap">
                PHỔ BIẾN
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Price with key-based animation on change */}
      <div className="flex items-baseline gap-2.5 mb-1">
        <span
          key={tier.price}
          className="text-4xl font-black text-indigo-600 animate-scale-in"
        >
          {formatPrice(tier.price)}
        </span>
        <span className="text-gray-400 text-sm">/{tier.duration}</span>
      </div>
      {tier.savings ? (
        <p key={`savings-${tier.duration}`} className="text-sm text-emerald-600 font-semibold mb-6 animate-fade-in">
          ✓ Tiết kiệm {tier.savings}% so với mua từng tháng
        </p>
      ) : (
        <div className="mb-6" />
      )}

      {/* Primary CTA */}
      <a
        href="https://zalo.me/g/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2.5 w-full bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white py-4 px-6 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-0.5"
      >
        💬 Đặt mua ngay qua Zalo
      </a>
      <p className="text-xs text-gray-400 text-center mt-2 mb-4">
        Nhận tài khoản trong 5–15 phút sau khi thanh toán
      </p>

      {/* Secondary contacts */}
      <div className="flex gap-3">
        <a
          href="https://m.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:bg-purple-50 hover:border-purple-300 active:scale-95 transition-all duration-200 text-sm font-semibold text-gray-600"
        >
          💌 Messenger
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 hover:bg-blue-50 hover:border-blue-300 active:scale-95 transition-all duration-200 text-sm font-semibold text-gray-600"
        >
          📘 Facebook
        </a>
      </div>
    </div>
  );
}
