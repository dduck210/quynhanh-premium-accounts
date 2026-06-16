import Link from "next/link";
import { MessageCircle, Send, Clock, MapPin, Heart } from "lucide-react";
import { FacebookIcon } from "@/components/ui/brand-icons";
import { SITE_CONFIG } from "@/lib/site-config";

const categoryLinks = [
  { label: "AI Chat",        href: "/category/ai-chat"      },
  { label: "Âm nhạc",       href: "/category/am-nhac"      },
  { label: "Design & Photo", href: "/category/design-photo" },
  { label: "Học tập",       href: "/category/hoc-tap"      },
  { label: "Phim ảnh",      href: "/category/phim-anh"     },
  { label: "VPN",            href: "/category/vpn"          },
  { label: "Văn phòng",     href: "/category/van-phong"    },
  { label: "Tiện ích khác", href: "/category/tien-ich"     },
];

const policyLinks = [
  { label: "Chính sách bảo hành", href: "/chinh-sach-bao-hanh" },
  { label: "Chính sách hoàn tiền", href: "/chinh-sach-hoan-tien" },
  { label: "Điều khoản sử dụng",  href: "/dieu-khoan-su-dung"   },
  { label: "Chính sách bảo mật",  href: "/chinh-sach-bao-mat"   },
  { label: "Hướng dẫn mua hàng",  href: "/huong-dan-mua-hang"   },
];

const contactItems = [
  { icon: MessageCircle, label: `Zalo: ${SITE_CONFIG.phone.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3")}`, href: SITE_CONFIG.zaloUrl },
  { icon: FacebookIcon,  label: "Facebook: quanhquanh24", href: SITE_CONFIG.facebookUrl  },
  { icon: Send,          label: "Messenger: quanhquanh24", href: SITE_CONFIG.messengerUrl },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--lux-obsidian)", borderTop: "1px solid var(--lux-gold-border)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">

        {/* Top divider */}
        <div className="lux-ornament mb-14 text-[10px] tracking-[0.4em]">✦ PREMIUM ✦</div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div>
            <div className="mb-5">
              <div className="font-display text-3xl font-light mb-0.5" style={{ color: "var(--lux-cream)" }}>
                Quỳnh Anh
              </div>
              <div className="font-sans font-medium text-xs tracking-[0.25em] uppercase" style={{ color: "var(--lux-gold)" }}>
                Premium Accounts
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4 font-light" style={{ color: "var(--lux-silver)" }}>
              Trải nghiệm đẳng cấp, chi phí tối ưu. Tài khoản phần mềm premium chính hãng, uy tín hàng đầu Việt Nam.
            </p>
            <p className="text-xs italic font-light" style={{ color: "var(--lux-gold-dim)" }}>
              &ldquo;Chọn Quỳnh Anh, chọn Premium.&rdquo;
            </p>
          </div>

          {/* Danh mục */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--lux-gold)" }}>
              Danh mục
            </h3>
            <ul className="space-y-2.5">
              {categoryLinks.map((cat) => (
                <li key={cat.href}>
                  <Link href={cat.href} className="lux-link text-sm font-light">
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Chính sách */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--lux-gold)" }}>
              Chính sách
            </h3>
            <ul className="space-y-2.5">
              {policyLinks.map((p) => (
                <li key={p.href}>
                  <Link href={p.href} className="lux-link text-sm font-light">
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Liên hệ */}
          <div>
            <h3 className="font-sans text-[10px] tracking-[0.25em] uppercase mb-5 font-medium" style={{ color: "var(--lux-gold)" }}>
              Liên hệ
            </h3>
            <ul className="space-y-3 text-sm font-light" style={{ color: "var(--lux-silver)" }}>
              {contactItems.map(({ icon: Icon, label, href }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer" className="lux-link flex items-center gap-2.5">
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                    {label}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-2.5">
                <Clock className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--lux-gold-dim)" }} />
                Hỗ trợ: 8:00 – 23:00 mỗi ngày
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--lux-gold-dim)" }} />
                Việt Nam
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mb-6" />
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-light" style={{ color: "var(--lux-silver)" }}>
          <p>© 2026 Quỳnh Anh Premium Accounts. Tất cả quyền được bảo lưu.</p>
          <p className="flex items-center gap-1.5">
            Thiết kế với <Heart className="w-3 h-3" style={{ color: "var(--lux-gold)", fill: "var(--lux-gold)" }} /> tại Việt Nam
          </p>
        </div>
      </div>
    </footer>
  );
}
