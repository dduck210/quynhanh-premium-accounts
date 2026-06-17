const PURCHASES = [
  { user: "*******do", product: "Netflix Premium 4K" },
  { user: "*******uy", product: "Spotify Premium 3 tháng" },
  { user: "*******nh", product: "ChatGPT Plus 1 tháng" },
  { user: "*******an", product: "Canva Pro 1 năm" },
  { user: "*******07", product: "Office 365 Personal" },
  { user: "*******xz", product: "YouTube Premium 1 tháng" },
  { user: "*******ng", product: "Adobe Creative Cloud" },
  { user: "*******hi", product: "GitHub Copilot 1 tháng" },
];

const ITEMS = [...PURCHASES, ...PURCHASES, ...PURCHASES];

export default function SocialProofTicker() {
  return (
    <div
      className="w-full overflow-hidden relative group"
      style={{
        borderTop: "1px solid rgba(142,80,112,0.10)",
        borderBottom: "1px solid rgba(142,80,112,0.10)",
        backgroundColor: "rgba(253,245,249,0.70)",
        backdropFilter: "blur(8px)",
      }}
    >
      <div className="social-proof-track flex items-center py-2.5">
        {ITEMS.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2 px-6 flex-shrink-0 text-xs whitespace-nowrap font-sans"
          >
            <span
              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                backgroundColor: "#4ade80",
                boxShadow: "0 0 6px rgba(74,222,128,0.7)",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
            <span style={{ color: "var(--lux-gold)", fontWeight: 600 }}>{item.user}</span>
            <span style={{ color: "var(--lux-ivory)" }}>vừa mua</span>
            <span style={{ color: "var(--lux-gold)", fontWeight: 500 }}>{item.product}</span>
            <span className="ml-4 flex-shrink-0" style={{ color: "rgba(142,80,112,0.25)" }}>·</span>
          </span>
        ))}
      </div>

      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to right, rgba(253,245,249,1), transparent)" }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to left, rgba(253,245,249,1), transparent)" }}
      />
    </div>
  );
}
