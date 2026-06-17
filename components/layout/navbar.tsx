"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MessageCircle, ChevronDown, Bot, Music, Palette, BookOpen, Film, Shield, Briefcase, Zap } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { SITE_CONFIG } from "@/lib/site-config";
import LogoMark from "@/components/ui/logo-mark";
import CategoryDropdown from "@/components/layout/category-dropdown";

const SCROLL_LINKS = [
  { label: "Sản phẩm", id: "products" },
  { label: "Liên hệ",  id: "contact"  },
];

const MOBILE_CATEGORIES = [
  { label: "AI Chat",        slug: "ai-chat",     icon: Bot       },
  { label: "Âm nhạc",       slug: "am-nhac",      icon: Music     },
  { label: "Design & Photo", slug: "design-photo", icon: Palette   },
  { label: "Học tập",        slug: "hoc-tap",      icon: BookOpen  },
  { label: "Phim ảnh",       slug: "phim-anh",     icon: Film      },
  { label: "VPN",            slug: "vpn",          icon: Shield    },
  { label: "Văn phòng",      slug: "van-phong",    icon: Briefcase },
  { label: "Tiện ích khác",  slug: "tien-ich",     icon: Zap       },
];

export default function Navbar() {
  const [scrolled, setScrolled]           = useState(false);
  const [menuOpen, setMenuOpen]           = useState(false);
  const [mobileCatOpen, setMobileCatOpen] = useState(false);
  const pathname = usePathname();
  const router   = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const scrollToSection = useCallback(
    (id: string) => (e: React.MouseEvent) => {
      e.preventDefault();
      setMenuOpen(false);
      if (pathname === "/") {
        const el = document.getElementById(id);
        if (!el) return;
        smoothScrollTo(el.getBoundingClientRect().top + window.scrollY - 68);
      } else {
        router.push(`/#${id}`);
      }
    },
    [pathname, router],
  );

  return (
    <>
      <nav
        className="sticky top-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? "rgba(253,245,249,0.97)" : "rgba(253,245,249,0.85)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled ? "1px solid rgba(142,80,112,0.20)" : "1px solid rgba(142,80,112,0.08)",
          boxShadow: scrolled ? "0 4px 24px rgba(142,80,112,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 select-none">
              <LogoMark size={34} />
              <div className="flex flex-col leading-tight">
                <span className="font-display text-sm font-light tracking-wide" style={{ color: "var(--lux-cream)" }}>
                  Quỳnh Anh
                </span>
                <span className="font-label text-[9px] tracking-[0.12em] uppercase" style={{ color: "var(--lux-gold)" }}>
                  Accounts Premium
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">

              {/* Danh mục — CSS-only dropdown (group/nav hover) */}
              <div className="group/nav relative h-full flex items-center">
                <button
                  className="flex items-center gap-1 px-4 py-2 text-sm transition-colors duration-200 relative group-hover/nav:text-[var(--lux-cream)]"
                  style={{ color: "var(--lux-silver)" }}
                  aria-haspopup="true"
                >
                  Danh mục
                  <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/nav:rotate-180" />
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: "var(--lux-gold)" }}
                  />
                </button>
                <CategoryDropdown onLinkClick={() => setMenuOpen(false)} />
              </div>

              {/* Regular scroll links */}
              {SCROLL_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={scrollToSection(link.id)}
                  className="px-4 py-2 text-sm transition-colors duration-200 relative group"
                  style={{ color: "var(--lux-silver)" }}
                >
                  <span className="group-hover:text-[var(--lux-cream)] transition-colors duration-200">
                    {link.label}
                  </span>
                  <span
                    className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                    style={{ backgroundColor: "var(--lux-gold)" }}
                  />
                </a>
              ))}

              <a
                href={SITE_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn-primary ml-3 !py-2.5 !px-5 !text-[11px] flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                Liên hệ Zalo
              </a>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={SITE_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn-primary !py-2.5 !px-3 !text-[11px] !min-h-[44px] flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                Zalo
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={menuOpen}
                className="p-3 min-w-[44px] min-h-[44px] rounded transition-opacity duration-150 active:opacity-50 flex flex-col justify-center"
                style={{ color: "var(--lux-silver)" }}
              >
                <span className="block w-5 h-0.5 bg-current transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : "" }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile panel */}
        <div
          className={`absolute top-full left-0 right-0 md:hidden border-b transition-all duration-300 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
          style={{ backgroundColor: "var(--lux-carbon)", borderColor: "var(--lux-gold-border)" }}
        >
          <div className="px-4 py-5 space-y-1">

            {/* Danh mục expandable */}
            <button
              onClick={() => setMobileCatOpen((v) => !v)}
              className="w-full flex items-center justify-between gap-3 px-4 py-3 rounded font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-150"
              style={{ color: "var(--lux-silver)" }}
            >
              <span className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--lux-gold)" }} />
                Danh mục
              </span>
              <ChevronDown
                className="w-3.5 h-3.5 transition-transform duration-200"
                style={{ transform: mobileCatOpen ? "rotate(180deg)" : "rotate(0deg)", color: "var(--lux-gold)" }}
              />
            </button>

            {/* Mobile categories grid */}
            <div
              className="overflow-hidden transition-all duration-300 ease-out"
              style={{ maxHeight: mobileCatOpen ? "400px" : "0px", opacity: mobileCatOpen ? 1 : 0 }}
            >
              <div className="grid grid-cols-2 gap-1 px-4 pb-2">
                {MOBILE_CATEGORIES.map(({ label, slug, icon: Icon }) => (
                  <Link
                    key={slug}
                    href={`/category/${slug}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-light transition-colors duration-150"
                    style={{ color: "var(--lux-silver)", backgroundColor: "rgba(142,80,112,0.06)" }}
                  >
                    <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: "var(--lux-gold)" }} strokeWidth={1.5} />
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Regular scroll links */}
            {SCROLL_LINKS.map((link) => (
              <a
                key={link.id}
                href={`/#${link.id}`}
                onClick={scrollToSection(link.id)}
                className="flex items-center gap-3 px-4 py-3 rounded font-sans text-xs tracking-widest uppercase font-medium transition-colors duration-150"
                style={{ color: "var(--lux-silver)" }}
              >
                <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "var(--lux-gold)" }} />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}
