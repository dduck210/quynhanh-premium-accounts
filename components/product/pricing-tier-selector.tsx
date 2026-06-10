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
  const [selected, setSelected] = useState(
    defaultIndex >= 0 ? defaultIndex : 0,
  );
  const tier = tiers[selected];

  return (
    <div>
      {/* Duration selector */}
      <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
        Chọn thời hạn sử dụng
      </p>
      <div className="flex flex-wrap gap-2.5 mb-6 pt-3">
        {tiers.map((t, i) => {
          const active = selected === i;
          return (
            <div key={t.duration} className="relative">
              {t.isPopular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white text-[9px] font-black px-2 py-0.5 rounded-full whitespace-nowrap z-10 shadow-sm">
                  PHỔ BIẾN
                </span>
              )}
              <button
                onClick={() => setSelected(i)}
                className={`relative px-4 py-2.5 rounded-xl border-2 font-semibold text-sm transition-all duration-200 active:scale-95 ${
                  active
                    ? "border-indigo-600 bg-indigo-600 text-white shadow-lg shadow-indigo-300/50 scale-105"
                    : "border-gray-200 bg-white text-gray-600 hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-600 hover:shadow-sm"
                }`}
              >
                {t.duration}
                {t.savings && (
                  <span className={`ml-1.5 text-xs font-bold ${active ? "text-indigo-200" : "text-emerald-500"}`}>
                    -{t.savings}%
                  </span>
                )}
              </button>
            </div>
          );
        })}
      </div>

      {/* Price — animates on tier change via key prop */}
      <div className="flex items-baseline gap-2.5 mb-1">
        <span
          key={tier.price}
          className="text-4xl font-black text-indigo-600 animate-scale-in"
        >
          {formatPrice(tier.price)}
        </span>
        <span className="text-gray-400 text-sm">/{tier.duration}</span>
      </div>
      <div className="h-6 mb-5">
        {tier.savings && (
          <p
            key={`savings-${tier.duration}`}
            className="text-sm text-emerald-600 font-semibold animate-fade-in"
          >
            ✓ Tiết kiệm {tier.savings}% so với mua từng tháng
          </p>
        )}
      </div>

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
