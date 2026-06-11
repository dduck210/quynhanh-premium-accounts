import AnimatedSection from "../ui/animated-section";

const CHANNELS = [
  {
    label: "Nhóm Zalo",
    icon: "💬",
    href: "https://zalo.me/0339502155",
    className:
      "bg-blue-500 hover:bg-blue-400 hover:shadow-blue-500/30",
  },
  {
    label: "Fanpage Facebook",
    icon: "📘",
    href: "https://www.facebook.com/quanhquanh24/",
    className:
      "bg-blue-700 hover:bg-blue-600 hover:shadow-blue-700/30",
  },
  {
    label: "Messenger",
    icon: "💌",
    href: "https://m.me/quanhquanh24",
    className:
      "bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400",
  },
];

const TRUST_POINTS = [
  { icon: "⚡", text: "Phản hồi trong 5 phút" },
  { icon: "🕐", text: "Hỗ trợ 8:00 – 23:00" },
  { icon: "🛡️", text: "Bảo hành toàn bộ hạn" },
];

export default function ContactCta() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-indigo-500 mb-3">
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
            {TRUST_POINTS.map((p) => (
              <span key={p.text} className="flex items-center gap-1.5">
                <span>{p.icon}</span>
                {p.text}
              </span>
            ))}
          </div>

          {/* Channel buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {CHANNELS.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center gap-2.5 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 ${ch.className}`}
              >
                {ch.icon} {ch.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
