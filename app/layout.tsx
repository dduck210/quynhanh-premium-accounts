import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quỳnh Anh Premium Accounts – Tài khoản phần mềm chính hãng giá tốt",
  description:
    "Mua tài khoản phần mềm premium chính hãng với giá tốt nhất Việt Nam. Netflix, Spotify, Office 365, ChatGPT và hơn 50 sản phẩm khác. Hỗ trợ 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
