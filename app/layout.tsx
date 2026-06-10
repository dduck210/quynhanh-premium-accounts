import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import HydrationLoader from "@/components/ui/hydration-loader";
import ScrollToTop from "@/components/ui/scroll-to-top";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#6366f1",
};

export const metadata: Metadata = {
  title: "Quỳnh Anh Premium Accounts – Tài khoản phần mềm chính hãng giá tốt",
  description:
    "Mua tài khoản phần mềm premium chính hãng với giá tốt nhất Việt Nam. Netflix, Spotify, Office 365, ChatGPT và hơn 50 sản phẩm khác. Hỗ trợ 24/7.",
  openGraph: {
    title: "Quỳnh Anh Premium Accounts",
    description: "Tài khoản phần mềm premium chính hãng giá tốt nhất Việt Nam",
    locale: "vi_VN",
    type: "website",
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
        <HydrationLoader />
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
