"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { smoothScrollTo } from "@/lib/smooth-scroll";

const NAV_LINKS = [
  { label: "Danh mục", id: "categories" },
  { label: "Sản phẩm", id: "products" },
  { label: "Liên hệ", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close mobile menu on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Lock body scroll when mobile menu is open */
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
        const offset = el.getBoundingClientRect().top + window.scrollY - 72;
        smoothScrollTo(offset);
      } else {
        router.push(`/#${id}`);
      }
    },
    [pathname, router],
  );

  return (
    <>
      <nav
        className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
          scrolled
            ? "border-gray-200 shadow-md shadow-gray-100/80"
            : "border-gray-100 shadow-none"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 select-none min-w-0">
              <span className="text-xl sm:text-2xl font-black text-blue-600 whitespace-nowrap">
                Quỳnh Anh
              </span>
              <span className="text-xl sm:text-2xl font-black text-gray-900 whitespace-nowrap">
                Premium
              </span>
              <span className="ml-1.5 text-xs font-semibold bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full hidden sm:inline">
                Accounts
              </span>
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`/#${link.id}`}
                  onClick={scrollToSection(link.id)}
                  className="text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors duration-200 px-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://zalo.me/0339502155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-blue-200 hover:shadow-md whitespace-nowrap ml-1"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Tham gia nhóm Zalo</span>
              </a>
            </div>

            {/* Mobile: Zalo button + hamburger */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="https://zalo.me/0339502155"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg font-semibold text-xs transition-all duration-200"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Zalo</span>
              </a>

              <button
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
                aria-expanded={menuOpen}
                className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200"
              >
                <span className="block w-5 h-0.5 bg-current transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(6px) rotate(45deg)" : "" }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300" style={{ opacity: menuOpen ? 0 : 1 }} />
                <span className="block w-5 h-0.5 bg-current mt-1.5 transition-all duration-300 origin-center" style={{ transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "" }} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden transition-opacity duration-300 ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile menu panel */}
      <div
        className={`fixed top-16 left-0 right-0 z-40 md:hidden bg-white border-b border-gray-100 shadow-xl transition-all duration-300 ease-out ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              onClick={scrollToSection(link.id)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-700 hover:bg-blue-50 hover:text-blue-700 font-medium text-sm transition-colors duration-150"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 flex-shrink-0" />
              {link.label}
            </a>
          ))}

          <div className="border-t border-gray-100 pt-3 mt-3">
            <a
              href="https://zalo.me/0339502155"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-3 rounded-xl font-bold text-sm transition-colors duration-200"
            >
              <MessageCircle className="w-4 h-4" />
              Tham gia nhóm Zalo ngay
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
