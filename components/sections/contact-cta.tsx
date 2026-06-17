import { type ComponentType } from "react";
import { MessageCircle, Send, Zap, Clock, ShieldCheck } from "lucide-react";
import { FacebookIcon } from "@/components/ui/brand-icons";
import AnimatedSection from "../ui/animated-section";

interface Channel {
  label: string;
  sub: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
  color: string;
}

interface TrustPoint {
  icon: ComponentType<{ className?: string }>;
  text: string;
}

const CHANNELS: Channel[] = [
  {
    label: "Zalo",
    sub: "0339 502 155",
    icon: MessageCircle,
    href: "https://zalo.me/0339502155",
    color: "var(--lux-gold)",
  },
  {
    label: "Facebook",
    sub: "quanhquanh24",
    icon: FacebookIcon,
    href: "https://www.facebook.com/quanhquanh24/",
    color: "var(--lux-ivory)",
  },
  {
    label: "Messenger",
    sub: "quanhquanh24",
    icon: Send,
    href: "https://m.me/quanhquanh24",
    color: "var(--lux-gold-light)",
  },
];

const TRUST_POINTS: TrustPoint[] = [
  { icon: Zap,         text: "Phản hồi trong 5 phút" },
  { icon: Clock,       text: "Hỗ trợ 8:00 – 23:00" },
  { icon: ShieldCheck, text: "Bảo hành toàn bộ hạn" },
];

export default function ContactCta() {
  return (
    <AnimatedSection>
      <section
        id="contact"
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "var(--lux-carbon)" }}
      >
        {/* Floral decorations — screen blend makes pink fade, white flowers glow */}
        <img src="/flowers-deco.png" alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
          style={{ top: "-10%", left: "-5%", width: "35%", maxWidth: 380, opacity: 0.18, mixBlendMode: "screen", transform: "rotate(-8deg)" }} />
        <img src="/flowers-deco.png" alt="" aria-hidden="true" className="absolute pointer-events-none select-none"
          style={{ bottom: "-10%", right: "-5%", width: "32%", maxWidth: 360, opacity: 0.16, mixBlendMode: "screen", transform: "rotate(12deg) scaleX(-1)" }} />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="lux-ornament mb-8 text-[10px] tracking-[0.4em]">✦ HỖ TRỢ ✦</div>

          <h2 className="font-display text-4xl md:text-5xl font-light mb-4" style={{ color: "var(--lux-cream)" }}>
            Liên hệ{" "}
            <span className="gold-text-animated italic font-extralight">ngay</span>
          </h2>

          <p className="text-base font-light leading-relaxed mb-8 max-w-lg mx-auto" style={{ color: "var(--lux-silver)" }}>
            Đội ngũ Quỳnh Anh Premium sẵn sàng tư vấn miễn phí và hỗ trợ bạn mọi lúc
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 mb-12 text-sm font-light" style={{ color: "var(--lux-silver)" }}>
            {TRUST_POINTS.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-2">
                <span style={{ color: "var(--lux-gold-dim)" }}>
                  <Icon className="w-3.5 h-3.5" />
                </span>
                {text}
              </span>
            ))}
          </div>

          {/* Channel cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {CHANNELS.map(({ label, sub, icon: Icon, href, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card flex flex-col items-center gap-3 py-6 px-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: color + "22", color }}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display text-base font-normal" style={{ color: "var(--lux-cream)" }}>
                    {label}
                  </div>
                  <div className="text-xs font-light mt-0.5" style={{ color: "var(--lux-silver)" }}>
                    {sub}
                  </div>
                </div>
                <div className="font-sans font-medium text-[10px] tracking-[0.15em] uppercase mt-1 transition-colors duration-200" style={{ color }}>
                  Nhắn tin →
                </div>
              </a>
            ))}
          </div>

          <div className="lux-ornament text-[10px] tracking-[0.4em]">✦ PREMIUM ✦</div>
        </div>
      </section>
    </AnimatedSection>
  );
}
