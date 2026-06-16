export default function ProductCardSkeleton() {
  return (
    <div
      className="rounded-xl border p-5 flex flex-col h-full animate-pulse"
      style={{
        backgroundColor: "var(--lux-obsidian)",
        borderColor: "var(--lux-gold-border)",
      }}
    >
      <div className="w-12 h-12 rounded-lg mb-4" style={{ backgroundColor: "rgba(201,168,76,0.08)" }} />
      <div className="h-2.5 w-16 rounded-full mb-3" style={{ backgroundColor: "rgba(201,168,76,0.06)" }} />
      <div className="h-4 w-3/4 rounded mb-1.5" style={{ backgroundColor: "rgba(255,255,255,0.05)" }} />
      <div className="h-3 w-full rounded mb-1" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      <div className="h-3 w-2/3 rounded mb-4" style={{ backgroundColor: "rgba(255,255,255,0.04)" }} />
      <div className="mt-auto">
        <div className="h-5 w-24 rounded mb-4" style={{ backgroundColor: "rgba(201,168,76,0.08)" }} />
        <div className="h-8 w-full rounded" style={{ backgroundColor: "rgba(201,168,76,0.06)" }} />
      </div>
    </div>
  );
}
