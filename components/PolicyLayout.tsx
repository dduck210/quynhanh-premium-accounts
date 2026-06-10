import AnnouncementBar from "./AnnouncementBar";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Breadcrumb from "./Breadcrumb";
import { ReactNode } from "react";

interface Props {
  title: string;
  lastUpdated?: string;
  children: ReactNode;
}

export default function PolicyLayout({ title, lastUpdated = "01/06/2026", children }: Props) {
  return (
    <main className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Navbar />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: title },
          ]}
        />

        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mt-6">
          <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">{title}</h1>
          <p className="text-gray-400 text-sm mb-8">Cập nhật lần cuối: {lastUpdated}</p>
          <div className="prose-policy">{children}</div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
