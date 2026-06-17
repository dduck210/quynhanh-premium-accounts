import { MessageCircle, Star } from "lucide-react";
import AnimatedSection from "../ui/animated-section";
import { SITE_CONFIG } from "@/lib/site-config";

const FEATURES = [
  "Giao hàng trong 15 phút",
  "Bảo hành toàn bộ",
  "Hỗ trợ 24/7",
  "Chính hãng 100%",
];

export default function CtaBanner() {
  return (
    <AnimatedSection>
      <section
        className="py-20 border-y relative overflow-hidden"
        style={{
          backgroundColor: "var(--lux-obsidian)",
          borderColor: "var(--lux-gold-border)",
        }}
      >
        {/* Background shimmer */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(155,64,212,0.08) 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-[var(--lux-gold)] text-[var(--lux-gold)]"
              />
            ))}
          </div>

          <div className="lux-badge mb-6 mx-auto w-fit">Ưu đãi đặc biệt</div>

          <h2
            className="font-display text-4xl md:text-5xl font-light leading-tight mb-5"
            style={{ color: "var(--lux-cream)" }}
          >
            Giá tốt nhất cho sản phẩm
            <span className="block gold-text-animated italic font-extralight">
              chính hãng
            </span>
          </h2>

          <p
            className="text-base font-light leading-relaxed mb-8 max-w-lg mx-auto"
            style={{ color: "var(--lux-silver)" }}
          >
            Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi độc quyền từ
            Quỳnh Anh Premium Accounts.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {FEATURES.map((f) => (
              <span
                key={f}
                className="lux-badge text-[10px]"
                style={{
                  color: "var(--lux-ivory)",
                  borderColor: "var(--lux-gold-border)",
                }}
              >
                ✦ {f}
              </span>
            ))}
          </div>

          <a
            href={SITE_CONFIG.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="lux-btn-primary mx-auto"
          >
            <MessageCircle className="w-4 h-4" />
            Liên hệ Zalo ngay
          </a>

          <div className="lux-ornament mt-10 text-[10px] tracking-[0.4em]">
            ✦ PREMIUM ✦
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
