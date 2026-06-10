"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b transition-all duration-300 ${
        scrolled
          ? "border-gray-200 shadow-md shadow-gray-100/80"
          : "border-gray-100 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-1 select-none min-w-0"
          >
            <span className="text-xl sm:text-2xl font-black text-indigo-600 whitespace-nowrap">
              Quỳnh Anh
            </span>
            <span className="text-xl sm:text-2xl font-black text-gray-900 whitespace-nowrap">
              Premium
            </span>
            <span className="ml-1.5 text-xs font-semibold bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded-full hidden sm:inline">
              Accounts
            </span>
          </Link>

          <div className="flex items-center gap-3 flex-shrink-0">
            <Link
              href="/#categories"
              className="hidden md:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Danh mục
            </Link>
            <Link
              href="/#contact"
              className="hidden md:block text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors duration-200"
            >
              Liên hệ
            </Link>
            <a
              href="https://zalo.me/g/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold text-sm transition-all duration-200 shadow-sm hover:shadow-indigo-200 hover:shadow-md whitespace-nowrap"
            >
              <span>💬</span>
              <span className="hidden sm:inline">Tham gia nhóm Zalo</span>
              <span className="sm:hidden">Zalo</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
