export default function PageSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
      <div className="relative w-14 h-14">
        <div className="absolute inset-0 rounded-full border-4 border-blue-100" />
        <div className="absolute inset-0 rounded-full border-4 border-blue-600 border-t-transparent animate-spin" />
      </div>
      <p className="mt-4 text-sm font-semibold text-blue-600 tracking-wide">
        Quỳnh Anh Premium
      </p>
    </div>
  );
}
