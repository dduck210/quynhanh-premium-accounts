"use client";
import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center px-4 animate-fade-in"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      <div className="text-center">
        <div className="lux-ornament mb-6 text-[9px] tracking-[0.4em]">✦ LỖI ✦</div>

        <div
          className="mx-auto mb-6 w-16 h-16 rounded-full flex items-center justify-center"
          style={{ backgroundColor: "rgba(142,80,112,0.12)", border: "1px solid var(--lux-gold-border)" }}
        >
          <AlertTriangle className="w-7 h-7" style={{ color: "var(--lux-gold)" }} />
        </div>

        <h1
          className="font-display text-2xl md:text-3xl font-light mb-3"
          style={{ color: "var(--lux-cream)" }}
        >
          Đã có lỗi xảy ra
        </h1>
        <p className="font-sans text-sm font-light mb-10 max-w-xs mx-auto" style={{ color: "var(--lux-silver)" }}>
          Trang này gặp sự cố. Vui lòng thử lại hoặc quay về trang chủ.
        </p>

        <div className="flex gap-3 justify-center">
          <button onClick={reset} className="lux-btn-primary">
            Thử lại
          </button>
          <Link href="/" className="lux-btn-outline">
            Về trang chủ
          </Link>
        </div>
      </div>
    </main>
  );
}
