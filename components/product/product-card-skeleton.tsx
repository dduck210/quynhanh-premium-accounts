export default function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-4 flex flex-col h-full animate-pulse">
      <div className="w-12 h-12 rounded-xl bg-gray-100 mb-3" />
      <div className="h-4 w-20 rounded-full bg-gray-100 mb-2" />
      <div className="h-4 w-3/4 rounded bg-gray-100 mb-1" />
      <div className="h-3 w-full rounded bg-gray-100 mb-1" />
      <div className="h-3 w-2/3 rounded bg-gray-100 mb-3" />
      <div className="mt-auto">
        <div className="h-6 w-24 rounded bg-gray-100 mb-3" />
        <div className="h-8 w-full rounded-lg bg-gray-100" />
      </div>
    </div>
  );
}
