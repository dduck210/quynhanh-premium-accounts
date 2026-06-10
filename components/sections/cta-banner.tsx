import AnimatedSection from "../ui/animated-section";

export default function CtaBanner() {
  return (
    <AnimatedSection>
      <section className="relative py-16 bg-gradient-to-r from-indigo-950 via-purple-950 to-slate-950 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(99,102,241,0.15),transparent_60%)]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-indigo-300 text-sm font-semibold uppercase tracking-widest mb-3">
            Ưu đãi đặc biệt
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight">
            Giá tốt nhất cho sản phẩm chính hãng
          </h2>
          <p className="text-indigo-200/80 text-lg mb-8 max-w-xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí và nhận ưu đãi độc quyền từ Quỳnh Anh Premium Accounts.
          </p>
          <a
            href="https://zalo.me/g/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-blue-500 hover:bg-blue-400 active:scale-95 text-white px-8 py-4 rounded-xl font-bold text-base transition-all duration-200 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5"
          >
            <span>💬</span> Liên hệ Zalo ngay
          </a>
        </div>
      </section>
    </AnimatedSection>
  );
}
