export default function PageSpinner() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      <div className="relative w-14 h-14">
        <div
          className="absolute inset-0 rounded-full border-[3px]"
          style={{ borderColor: "rgba(142,80,112,0.15)" }}
        />
        <div
          className="absolute inset-0 rounded-full border-[3px] animate-spin"
          style={{ borderColor: "var(--lux-gold)", borderTopColor: "transparent" }}
        />
      </div>
      <p
        className="mt-5 font-sans text-xs font-light tracking-[0.3em] uppercase"
        style={{ color: "var(--lux-gold)" }}
      >
        Quỳnh Anh Premium Accounts
      </p>
    </div>
  );
}
