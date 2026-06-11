import Link from "next/link";
import { MessageCircle, Send, Clock, MapPin, Heart } from "lucide-react";
import { FacebookIcon } from "@/components/ui/brand-icons";

const categoryLinks = [
  { label: "AI Chat", href: "/category/ai-chat" },
  { label: "Âm nhạc", href: "/category/am-nhac" },
  { label: "Design & Photo", href: "/category/design-photo" },
  { label: "Học tập", href: "/category/hoc-tap" },
  { label: "Phim ảnh", href: "/category/phim-anh" },
  { label: "VPN", href: "/category/vpn" },
  { label: "Văn phòng", href: "/category/van-phong" },
  { label: "Tiện ích khác", href: "/category/tien-ich" },
];

const policyLinks = [
  { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
  { label: "Chính sách hoàn tiền", href: "/chinh-sach-hoan-tien" },
  { label: "Điều khoản sử dụng", href: "/dieu-khoan-su-dung" },
  { label: "Chính sách bảo mật", href: "/chinh-sach-bao-mat" },
  { label: "Hướng dẫn mua hàng", href: "/huong-dan-mua-hang" },
];

const contactLinks = [
  { icon: MessageCircle, label: "Zalo: 0339.502.155", href: "https://zalo.me/0339502155" },
  { icon: FacebookIcon,      label: "FacebookIcon: quanhquanh24", href: "https://www.facebook.com/quanhquanh24/" },
  { icon: Send,          label: "Messenger: quanhquanh24", href: "https://m.me/quanhquanh24" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-1 mb-4">
              <span className="text-2xl font-black text-indigo-400">
                Quỳnh Anh
              </span>
              <span className="text-2xl font-black text-white">Premium</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">
              Trải nghiệm đẳng cấp, chi phí tối ưu. Tài khoản phần mềm
              premium chính hãng, uy tín hàng đầu Việt Nam.
            </p>
            <p className="text-indigo-400 text-xs font-medium italic">
              &ldquo;Chọn Quỳnh Anh, chọn Premium.&rdquo;
            </p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Danh mục
            </h3>
            <ul className="space-y-2">
              {categoryLinks.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Chính sách
            </h3>
            <ul className="space-y-2">
              {policyLinks.map((p) => (
                <li key={p.href}>
                  <Link
                    href={p.href}
                    className="text-slate-400 hover:text-indigo-400 text-sm transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-bold text-white mb-4 text-sm uppercase tracking-wide">
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm text-slate-400">
              {contactLinks.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-indigo-400 transition-colors"
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 flex-shrink-0" />
                Hỗ trợ: 8:00 – 23:00 mỗi ngày
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0" />
                Việt Nam
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-slate-500 text-xs">
          <p>© 2026 Quỳnh Anh Premium Accounts. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1">
            Thiết kế với <Heart className="w-3 h-3 text-red-400 fill-red-400" /> tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
