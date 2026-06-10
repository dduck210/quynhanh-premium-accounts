"use client";
import { useEffect } from "react";
import Link from "next/link";

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-6xl mb-6">⚠️</div>
      <h1 className="text-2xl font-black text-gray-900 mb-2">
        Đã có lỗi xảy ra
      </h1>
      <p className="text-gray-500 text-sm mb-8 text-center max-w-sm">
        Trang này gặp sự cố. Vui lòng thử lại hoặc quay về trang chủ.
      </p>
      <div className="flex gap-3">
        <button
          onClick={reset}
          className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
        >
          Thử lại
        </button>
        <Link
          href="/"
          className="border border-gray-200 hover:border-indigo-300 text-gray-700 hover:text-indigo-600 px-5 py-2.5 rounded-xl font-semibold text-sm transition-colors"
        >
          Về trang chủ
        </Link>
      </div>
    </div>
  );
}
