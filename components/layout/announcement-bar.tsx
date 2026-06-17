"use client";
import { useState, useEffect } from "react";
import {
  Zap,
  ShieldCheck,
  Headphones,
  CreditCard,
  Flame,
  type LucideIcon,
} from "lucide-react";

interface Message {
  icon: LucideIcon;
  text: string;
}

const MESSAGES: Message[] = [
  { icon: Zap,         text: "Kích hoạt trong 15 phút"       },
  { icon: ShieldCheck, text: "Bảo hành toàn bộ"              },
  { icon: Headphones,  text: "Hỗ trợ kỹ thuật 24/7"          },
  { icon: CreditCard,  text: "Thanh toán an toàn & bảo mật"  },
  { icon: Flame,       text: "Hơn 1000 khách hàng tin tưởng" },
];

function MessageItem({ msg }: { msg: Message }) {
  const Icon = msg.icon;
  return (
    <span className="flex items-center gap-2 flex-shrink-0">
      <Icon className="w-3 h-3" aria-hidden="true" style={{ color: "var(--lux-gold)" }} />
      <span style={{ color: "#8E5070" }}>{msg.text}</span>
    </span>
  );
}

const DOT = (
  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ backgroundColor: "var(--lux-gold-dim)" }} />
);

const TICKER_STYLE: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "1.5rem",
  whiteSpace: "nowrap",
  width: "max-content",
  minWidth: "max-content",
  animation: "marquee 22s linear infinite",
};

export default function AnnouncementBar() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className="overflow-hidden transition-all duration-500 ease-in-out"
      style={{ maxHeight: hidden ? "0" : "60px", opacity: hidden ? 0 : 1 }}
      aria-hidden={hidden}
    >
      <div
        className="text-xs py-2.5 overflow-hidden border-b"
        style={{ backgroundColor: "#FBEEF3", borderColor: "rgba(142,80,112,0.2)" }}
        aria-label="Thông báo"
      >
        {/* Mobile: continuous ticker */}
        <div className="sm:hidden relative" style={{ overflow: "hidden" }} aria-live="off">
          <div style={TICKER_STYLE}>
            {MESSAGES.map((msg, i) => (
              <span key={i} className="flex items-center gap-3 px-2">
                <MessageItem msg={msg} />
                {DOT}
              </span>
            ))}
            <span aria-hidden="true" className="contents">
              {MESSAGES.map((msg, i) => (
                <span key={`d-${i}`} className="flex items-center gap-3 px-2">
                  <MessageItem msg={msg} />
                  {DOT}
                </span>
              ))}
            </span>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{ background: "linear-gradient(to right, #FBEEF3, transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-8 pointer-events-none z-10"
            style={{ background: "linear-gradient(to left, #FBEEF3, transparent)" }} />
        </div>

        {/* Desktop: static items */}
        <div className="hidden sm:flex max-w-7xl mx-auto px-6 lg:px-8 items-center justify-between gap-6">
          <p className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase flex-shrink-0"
            style={{ color: "var(--lux-gold)" }}>
            ✦ &nbsp;Quỳnh Anh Premium&nbsp; ✦
          </p>
          <div className="flex items-center gap-4">
            {MESSAGES.map((msg, i) => (
              <span key={i} className="flex items-center gap-4">
                <MessageItem msg={msg} />
                {i < MESSAGES.length - 1 && (
                  <span aria-hidden="true" style={{ color: "rgba(142,80,112,0.3)" }}>·</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
