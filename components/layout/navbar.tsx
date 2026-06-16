"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";
import { SITE_CONFIG } from "@/lib/site-config";

const NAV_LINKS = [
  { label: "Danh mục", id: "categories" },
  { label: "Sản phẩm", id: "products" },
  { label: "Liên hệ",  id: "contact"    },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const pathname  = usePathname();
  const router    = useRouter();

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
          backgroundColor: scrolled ? "rgba(2,2,2,0.96)" : "rgba(2,2,2,0.7)",
          backdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.18)"
            : "1px solid rgba(201,168,76,0.06)",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.6)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 select-none">
              <div
                className="w-7 h-7 rounded-sm flex items-center justify-center text-xs font-black font-label"
                style={{ backgroundColor: "var(--lux-gold)", color: "var(--lux-void)" }}
              >
                QA
              </div>
              <span className="font-display text-lg font-light tracking-wide hidden sm:block" style={{ color: "var(--lux-cream)" }}>
                Quỳnh Anh
              </span>
              <span className="font-label text-xs tracking-[0.15em] uppercase hidden sm:block" style={{ color: "var(--lux-gold)" }}>
                Premium
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
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

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href={SITE_CONFIG.zaloUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lux-btn-primary !py-2 !px-3 !text-[10px] flex items-center gap-1"
              >
                <MessageCircle className="w-3 h-3" />
                Zalo
              </a>
              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={menuOpen}
                className="p-2.5 rounded"
                style={{ color: "var(--lux-silver)" }}
              >
                <span className="block w-5 h-0.5 bg-current transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : "" }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden border-b transition-all duration-300 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none"}`}
        style={{ backgroundColor: "var(--lux-carbon)", borderColor: "var(--lux-gold-border)" }}
      >
        <div className="px-4 py-5 space-y-1">
          {NAV_LINKS.map((link) => (
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
          <div className="pt-3 mt-2" style={{ borderTop: "1px solid var(--lux-gold-border)" }}>
            <a
              href={SITE_CONFIG.zaloUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="lux-btn-primary w-full justify-center"
            >
              <MessageCircle className="w-4 h-4" />
              Tham gia nhóm Zalo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
