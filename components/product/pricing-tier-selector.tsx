"use client";
import { useState } from "react";
import { MessageCircle, Send, Check } from "lucide-react";
import { FacebookIcon } from "@/components/ui/brand-icons";
import { PricingTier, formatPrice } from "@/data/products";
import { SITE_CONFIG } from "@/lib/site-config";

interface Props {
  tiers: PricingTier[];
  productName: string;
}

export default function PricingTierSelector({ tiers }: Props) {
  const defaultIndex = tiers.findIndex((t) => t.isPopular);
  const [selected, setSelected] = useState(defaultIndex >= 0 ? defaultIndex : 0);
  const tier = tiers[selected];
  const multiTier = tiers.length > 1;

  return (
    <div>
      {/* Duration selector */}
      {multiTier && (
        <>
          <p className="font-sans font-medium text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "var(--lux-gold-dim)" }}>
            Chọn thời hạn sử dụng
          </p>
          <div className="flex flex-wrap gap-2.5 mb-6 pt-2">
            {tiers.map((t, i) => {
              const active = selected === i;
              return (
                <div key={`${t.duration}-${t.label ?? i}`} className="relative">
                  {t.isPopular && (
                    <span
                      className="absolute -top-3 left-1/2 -translate-x-1/2 font-sans font-bold text-[8px] tracking-widest px-2 py-0.5 rounded whitespace-nowrap z-10"
                      style={{ backgroundColor: "var(--lux-gold)", color: "var(--lux-void)" }}
                    >
                      PHỔ BIẾN
                    </span>
                  )}
                  <button
                    onClick={() => setSelected(i)}
                    className="relative px-4 py-2.5 rounded-lg border font-sans font-medium text-xs tracking-widest uppercase transition-colors duration-200 active:opacity-70"
                    style={
                      active
                        ? {
                            borderColor: "var(--lux-gold)",
                            backgroundColor: "var(--lux-gold)",
                            color: "var(--lux-void)",
                            transform: "scale(1.04)",
                          }
                        : {
                            borderColor: "var(--lux-gold-border)",
                            backgroundColor: "var(--lux-obsidian)",
                            color: "var(--lux-ivory)",
                          }
                    }
                  >
                    {t.label ?? t.duration}
                    {t.savings && (
                      <span className="ml-1.5 text-[10px] font-normal" style={{ color: "var(--lux-gold-light)" }}>
                        -{t.savings}%
                      </span>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {/* Price display */}
      <div className="flex items-baseline gap-2.5 mb-1">
        <span
          key={tier.price}
          className="font-display text-4xl font-light gold-text-animated"
        >
          {formatPrice(tier.price)}
        </span>
        <span className="text-sm font-light" style={{ color: "var(--lux-silver)" }}>
          /{tier.duration}
        </span>
      </div>

      <div className="h-6 mb-6">
        {tier.savings && (
          <p className="flex items-center gap-1.5 text-sm font-light" style={{ color: "var(--lux-gold-light)" }}>
            <Check className="w-3.5 h-3.5" />
            Tiết kiệm {tier.savings}% so với mua từng tháng
          </p>
        )}
      </div>

      {/* Primary CTA */}
      <a
        href={SITE_CONFIG.zaloUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="lux-btn-primary w-full"
      >
        <MessageCircle className="w-4 h-4" />
        Đặt mua ngay qua Zalo
      </a>
      <p className="text-xs text-center mt-2 mb-5 font-light" style={{ color: "var(--lux-smoke)" }}>
        Nhận tài khoản trong 5–15 phút sau khi thanh toán
      </p>

      {/* Secondary contacts */}
      <div className="flex gap-3">
        <a
          href={SITE_CONFIG.messengerUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-xs font-sans font-medium tracking-wider uppercase transition-colors duration-200 hover:border-[var(--lux-gold-border-hover)] hover:text-[var(--lux-ivory)] active:opacity-70"
          style={{
            borderColor: "var(--lux-gold-border)",
            color: "var(--lux-silver)",
            backgroundColor: "rgba(142,80,112,0.06)",
          }}
        >
          <Send className="w-3.5 h-3.5" />
          Messenger
        </a>
        <a
          href={SITE_CONFIG.facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg border text-xs font-sans font-medium tracking-wider uppercase transition-colors duration-200 hover:border-[var(--lux-gold-border-hover)] hover:text-[var(--lux-ivory)] active:opacity-70"
          style={{
            borderColor: "var(--lux-gold-border)",
            color: "var(--lux-silver)",
            backgroundColor: "rgba(142,80,112,0.06)",
          }}
        >
          <FacebookIcon className="w-3.5 h-3.5" />
          Facebook
        </a>
      </div>
    </div>
  );
}
