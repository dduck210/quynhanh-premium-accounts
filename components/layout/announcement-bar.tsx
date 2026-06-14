import { Zap, ShieldCheck, Headphones, CreditCard, Flame, type LucideIcon } from "lucide-react";

interface Message {
  icon: LucideIcon;
  text: string;
}

const MESSAGES: Message[] = [
  { icon: Zap,         text: "Kích hoạt trong 15 phút" },
  { icon: ShieldCheck, text: "Bảo hành toàn bộ hạn dùng" },
  { icon: Headphones,  text: "Hỗ trợ kỹ thuật 24/7" },
  { icon: CreditCard,  text: "Thanh toán an toàn & bảo mật" },
  { icon: Flame,       text: "Hơn 1000 khách hàng tin tưởng" },
];

function MessageItem({ msg }: { msg: Message }) {
  const Icon = msg.icon;
  return (
    <span className="flex items-center gap-1.5 flex-shrink-0">
      <Icon className="w-3.5 h-3.5" />
      {msg.text}
    </span>
  );
}

export default function AnnouncementBar() {
  return (
    <div aria-label="Thông báo" className="bg-blue-950 text-white text-xs py-2 overflow-hidden">
      {/* Mobile: scrolling marquee */}
      <div className="sm:hidden flex items-center" aria-live="off">
        <div className="marquee-track flex gap-10 whitespace-nowrap text-blue-200 font-medium tracking-wide">
          {MESSAGES.map((msg, i) => (
            <MessageItem key={i} msg={msg} />
          ))}
          {/* Duplicated set for seamless CSS loop — hidden from assistive tech */}
          <span aria-hidden="true" className="contents">
            {MESSAGES.map((msg, i) => (
              <MessageItem key={`dup-${i}`} msg={msg} />
            ))}
          </span>
        </div>
      </div>

      {/* Desktop: static layout */}
      <div className="hidden sm:flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center justify-between gap-4">
        <p className="font-medium tracking-wide text-blue-100">
          ✦ Chất lượng – Ưu đãi – Uy tín &nbsp;|&nbsp; Quỳnh Anh Premium
          Accounts &nbsp;|&nbsp; Hỗ trợ 24/7
        </p>
        <div className="flex items-center gap-5 text-blue-300 flex-shrink-0">
          <MessageItem msg={MESSAGES[0]} />
          <MessageItem msg={MESSAGES[1]} />
        </div>
      </div>
    </div>
  );
}
