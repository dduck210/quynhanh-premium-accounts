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
      style={{ backgroundColor: "#FDF5F9" }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: title }]}
        />

        <div
          className="rounded-xl border p-8 mt-6"
          style={{
            backgroundColor: "rgba(255,255,255,0.75)",
            borderColor: "rgba(142,80,112,0.2)",
          }}
        >
          <div className="lux-ornament mb-5 text-[9px] tracking-[0.4em]">✦ CHÍNH SÁCH ✦</div>

          <h1
            className="font-display text-2xl md:text-3xl font-light mb-2"
            style={{ color: "#8E5070" }}
          >
            {title}
          </h1>
          <p className="font-sans text-xs font-light mb-8" style={{ color: "#7A5068" }}>
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
