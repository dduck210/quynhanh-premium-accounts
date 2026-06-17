import Link from "next/link";
import {
  Bot, Music, Palette, BookOpen,
  Film, Shield, Briefcase, Zap,
  ArrowRight,
} from "lucide-react";

const CATEGORIES = [
  { label: "AI Chat",        slug: "ai-chat",      icon: Bot,       desc: "ChatGPT, Gemini, Claude…"  },
  { label: "Âm nhạc",       slug: "am-nhac",       icon: Music,     desc: "Spotify, Apple Music…"      },
  { label: "Design & Photo", slug: "design-photo",  icon: Palette,   desc: "Adobe, Canva, Lightroom…"   },
  { label: "Học tập",        slug: "hoc-tap",       icon: BookOpen,  desc: "Duolingo, Coursera…"        },
  { label: "Phim ảnh",       slug: "phim-anh",      icon: Film,      desc: "Netflix, Disney+, HBO…"     },
  { label: "VPN",            slug: "vpn",           icon: Shield,    desc: "NordVPN, ExpressVPN…"       },
  { label: "Văn phòng",      slug: "van-phong",     icon: Briefcase, desc: "Microsoft 365, Notion…"     },
  { label: "Tiện ích khác",  slug: "tien-ich",      icon: Zap,       desc: "Công cụ đa dạng…"           },
];

export default function CategoryDropdown({ onLinkClick }: { onLinkClick: () => void }) {
  return (
    // CSS-only: hidden by default, visible when parent group/nav is hovered
    <div className="
      absolute top-full left-1/2 -translate-x-1/2 w-[680px] pt-2
      opacity-0 pointer-events-none -translate-y-2
      transition-all duration-200 ease-out
      group-hover/nav:opacity-100 group-hover/nav:pointer-events-auto group-hover/nav:translate-y-0
    ">
      {/* Arrow tip */}
      <div className="flex justify-center">
        <div
          className="w-3 h-3 rotate-45 -mb-1.5 relative z-10"
          style={{ backgroundColor: "var(--lux-carbon)", border: "1px solid var(--lux-gold-border)", clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
        />
      </div>

      <div
        className="rounded-xl border overflow-hidden shadow-2xl"
        style={{ backgroundColor: "var(--lux-carbon)", borderColor: "var(--lux-gold-border)" }}
      >
        <div className="flex">
          {/* Left intro panel */}
          <div
            className="w-52 flex-shrink-0 p-6 flex flex-col justify-between"
            style={{ borderRight: "1px solid var(--lux-gold-border)", backgroundColor: "var(--lux-obsidian)" }}
          >
            <div>
              <div className="lux-ornament mb-4 text-[9px] tracking-[0.4em]">✦ DANH MỤC ✦</div>
              <p className="font-display text-xl font-light leading-snug mb-3" style={{ color: "var(--lux-cream)" }}>
                Khám phá<br />sản phẩm
              </p>
              <p className="text-xs font-light leading-relaxed" style={{ color: "var(--lux-silver)" }}>
                Hơn 50 phần mềm premium chính hãng, bảo hành đầy đủ.
              </p>
            </div>
            <Link
              href="/#categories"
              onClick={onLinkClick}
              className="flex items-center gap-1.5 text-[11px] font-medium tracking-wider uppercase transition-colors duration-200 mt-6 hover:opacity-80"
              style={{ color: "var(--lux-gold)" }}
            >
              Xem tất cả
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Right category grid */}
          <div className="flex-1 p-4 grid grid-cols-2 gap-1">
            {CATEGORIES.map(({ label, slug, icon: Icon, desc }) => (
              <Link
                key={slug}
                href={`/category/${slug}`}
                onClick={onLinkClick}
                className="group/item flex items-start gap-3 px-3 py-2.5 rounded-lg transition-colors duration-150 hover:bg-[rgba(142,80,112,0.10)]"
                style={{ color: "var(--lux-silver)" }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ backgroundColor: "rgba(142,80,112,0.12)" }}
                >
                  <Icon className="w-4 h-4" style={{ color: "var(--lux-gold)" }} strokeWidth={1.5} />
                </div>
                <div>
                  <div
                    className="text-xs font-medium mb-0.5 transition-colors duration-150 group-hover/item:text-[var(--lux-cream)]"
                    style={{ color: "var(--lux-ivory)" }}
                  >
                    {label}
                  </div>
                  <div className="text-[10px] font-light leading-relaxed" style={{ color: "var(--lux-silver)" }}>
                    {desc}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
