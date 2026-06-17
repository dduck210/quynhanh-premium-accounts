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
  { icon: Zap, text: "Kích hoạt trong 15 phút" },
  { icon: ShieldCheck, text: "Bảo hành toàn bộ" },
  { icon: Headphones, text: "Hỗ trợ kỹ thuật 24/7" },
  { icon: CreditCard, text: "Thanh toán an toàn & bảo mật" },
  { icon: Flame, text: "Hơn 1000 khách hàng tin tưởng" },
];

function MessageItem({ msg }: { msg: Message }) {
  const Icon = msg.icon;
  return (
    <span className="flex items-center gap-2 flex-shrink-0">
      <Icon className="w-3 h-3 opacity-80" style={{ color: "rgba(255,255,255,0.9)" }} />
      <span style={{ color: "rgba(255,255,255,0.92)" }}>{msg.text}</span>
    </span>
  );
}

const DOT = (
  <span
    className="flex-shrink-0 w-1 h-1 rounded-full"
    style={{ backgroundColor: "rgba(255,255,255,0.4)" }}
  />
);

export default function AnnouncementBar() {
  return (
    <div
      className="text-xs py-2.5 overflow-hidden"
      style={{
        background: "linear-gradient(90deg, var(--lux-gold-dim) 0%, var(--lux-gold) 50%, var(--lux-gold-dim) 100%)",
      }}
      aria-label="Thông báo"
    >
      {/* Mobile: marquee */}
      <div className="sm:hidden flex items-center" aria-live="off">
        <div className="marquee-track flex items-center gap-6 whitespace-nowrap font-sans tracking-widest">
          {MESSAGES.map((msg, i) => (
            <span key={i} className="flex items-center gap-3">
              <MessageItem msg={msg} />
              {DOT}
            </span>
          ))}
          <span aria-hidden="true" className="contents">
            {MESSAGES.map((msg, i) => (
              <span key={`d-${i}`} className="flex items-center gap-3">
                <MessageItem msg={msg} />
                {DOT}
              </span>
            ))}
          </span>
        </div>
      </div>

      {/* Desktop: static */}
      <div className="hidden sm:flex max-w-7xl mx-auto px-6 lg:px-8 items-center justify-between gap-6">
        <p
          className="font-sans font-bold text-[11px] tracking-[0.2em] uppercase flex-shrink-0"
          style={{ color: "rgba(255,255,255,0.95)" }}
        >
          ✦ &nbsp;Quỳnh Anh Premium&nbsp; ✦
        </p>
        <div className="flex items-center gap-4">
          {MESSAGES.map((msg, i) => (
            <span key={i} className="flex items-center gap-4">
              <MessageItem msg={msg} />
              {i < MESSAGES.length - 1 && (
                <span aria-hidden="true" style={{ color: "rgba(255,255,255,0.35)" }}>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
