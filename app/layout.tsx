import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Cinzel, DM_Sans } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ui/scroll-to-top";
import ScrollProgress from "@/components/ui/scroll-progress";
import CursorGlow from "@/components/ui/cursor-glow";

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-cormorant",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
  variable: "--font-cinzel",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#020202",
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
      <body className={`${dmSans.variable} ${cormorant.variable} ${cinzel.variable} font-body`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:rounded focus:font-bold"
          style={{ backgroundColor: "var(--lux-gold)", color: "var(--lux-void)" }}
        >
          Chuyển đến nội dung chính
        </a>
        <ScrollProgress />
        <CursorGlow />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
