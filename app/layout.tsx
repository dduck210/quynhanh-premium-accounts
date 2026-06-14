import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";

const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://quynhanh-premium-accounts.vercel.app"),
  title: "Quỳnh Anh Premium Accounts – Tài khoản phần mềm chính hãng giá tốt",
  description:
    "Mua tài khoản phần mềm premium chính hãng với giá tốt nhất Việt Nam. Netflix, Spotify, Office 365, ChatGPT và hơn 50 sản phẩm khác. Hỗ trợ 24/7.",
  openGraph: {
    title: "Quỳnh Anh Premium Accounts",
    description: "Tài khoản phần mềm premium chính hãng giá tốt nhất Việt Nam",
    locale: "vi_VN",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Quỳnh Anh Premium Accounts",
    description: "Hơn 50 phần mềm premium chính hãng – giá tốt nhất Việt Nam",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-blue-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-bold"
        >
          Chuyển đến nội dung chính
        </a>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
