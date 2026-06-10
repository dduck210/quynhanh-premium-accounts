import AnimatedSection from "../ui/animated-section";

export default function ContactCta() {
  return (
    <AnimatedSection>
      <section id="contact" className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Liên hệ ngay</h2>
          <p className="text-gray-500 text-lg mb-10">
            Đội ngũ hỗ trợ Quỳnh Anh Premium Accounts sẵn sàng 24/7 để giúp bạn
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://zalo.me/g/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-blue-500 hover:bg-blue-400 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
            >
              💬 Nhóm Zalo
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-blue-700 hover:bg-blue-600 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-blue-700/30 hover:-translate-y-0.5"
            >
              📘 Fanpage Facebook
            </a>
            <a
              href="https://m.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-500 hover:to-pink-400 active:scale-95 text-white px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              💌 Messenger
            </a>
          </div>
        </div>
      </section>
    </AnimatedSection>
  );
}
