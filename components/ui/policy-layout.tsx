import AnnouncementBar from "../layout/announcement-bar";
import Navbar from "../layout/navbar";
import Footer from "../layout/footer";
import Breadcrumb from "./breadcrumb";
import { ReactNode } from "react";

interface Props {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function PolicyLayout({
  title,
  lastUpdated = "01/06/2026",
  children,
}: Props) {
  return (
    <main
      className="min-h-screen animate-fade-in"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      <AnnouncementBar />
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: title }]}
        />

        <div
          className="rounded-xl border p-8 mt-6"
          style={{
            backgroundColor: "var(--lux-obsidian)",
            borderColor: "var(--lux-gold-border)",
          }}
        >
          <div className="lux-ornament mb-5 text-[9px] tracking-[0.4em]">✦ CHÍNH SÁCH ✦</div>

          <h1
            className="font-display text-2xl md:text-3xl font-light mb-2"
            style={{ color: "var(--lux-cream)" }}
          >
            {title}
          </h1>
          <p className="font-sans text-xs font-light mb-8" style={{ color: "var(--lux-silver)" }}>
            Cập nhật lần cuối: {lastUpdated}
          </p>

          <div className="gold-divider mb-8" />

          <div className="prose-policy">{children}</div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
