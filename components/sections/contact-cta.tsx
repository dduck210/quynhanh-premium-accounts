import { type ComponentType } from "react";
import { MessageCircle, Send, Zap, Clock, ShieldCheck } from "lucide-react";
import { FacebookIcon } from "@/components/ui/brand-icons";
import AnimatedSection from "../ui/animated-section";

interface Channel {
  label: string;
  icon: ComponentType<{ className?: string }>;
  href: string;
  className: string;
}

interface TrustPoint {
  icon: ComponentType<{ className?: string }>;
  text: string;
}

const CHANNELS: Channel[] = [
  {
    label: "Nhóm Zalo",
    icon: MessageCircle,
    href: "https://zalo.me/0339502155",
    className: "bg-blue-500 hover:bg-blue-400 hover:shadow-blue-500/30",
  },
  {
    label: "Fanpage Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/quanhquanh24/",
    className: "bg-blue-700 hover:bg-blue-600 hover:shadow-blue-700/30",
  },
  {
    label: "Messenger",
    icon: Send,
    href: "https://m.me/quanhquanh24",
    className:
      "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400",
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
      <section id="contact" className="py-16 bg-blue-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-blue-500 mb-3">
            Hỗ trợ khách hàng
          </span>
          <h2 className="text-3xl font-black text-gray-900 mb-3">
            Liên hệ ngay
          </h2>
          <p className="text-gray-500 text-lg mb-8 max-w-xl mx-auto">
            Đội ngũ Quỳnh Anh Premium sẵn sàng tư vấn miễn phí và hỗ trợ
            bạn 24/7
          </p>

          {/* Trust points */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10 text-sm text-gray-500">
            {TRUST_POINTS.map(({ icon: Icon, text }) => (
              <span key={text} className="flex items-center gap-1.5">
                <Icon className="w-4 h-4 text-blue-500" />
                {text}
              </span>
            ))}
          </div>

          {/* Channel buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {CHANNELS.map(({ label, icon: Icon, href, className }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${className}`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
