import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-8xl font-black text-indigo-100 select-none mb-2">404</div>
      <h1 className="text-2xl font-black text-gray-900 mb-2">Trang không tồn tại</h1>
      <p className="text-gray-500 text-sm mb-8 text-center max-w-sm">
        Trang bạn tìm kiếm đã bị xóa hoặc đường dẫn không đúng.
      </p>
      <Link
        href="/"
        className="bg-indigo-600 hover:bg-indigo-500 active:scale-95 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
