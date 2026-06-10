import { notFound } from "next/navigation";
import { products, categories, formatPrice } from "@/data/products";
import {
  productFeatures,
  generatePricingTiers,
  HOW_TO_BUY,
} from "@/data/product-details";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/ui/breadcrumb";
import PricingTierSelector from "@/components/product/pricing-tier-selector";
import ProductCard from "@/components/product/product-card";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = products.find((p) => p.id === params.slug);
  return {
    title: p
      ? `${p.name} – Quỳnh Anh Premium Accounts`
      : "Sản phẩm – Quỳnh Anh Premium Accounts",
    description: p?.description,
  };
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.id === params.slug);
  if (!product) notFound();

  const category = categories.find((c) => c.id === product.categoryId);
  const features = productFeatures[product.id] ?? [];
  const tiers = generatePricingTiers(product.price);
  const related = products
    .filter((p) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);

  const discountPct = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <main className="min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* ── TOP SECTION: white bg, classic product layout ───────────────────── */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumb
            items={[
              { label: "Trang chủ", href: "/" },
              {
                label: category?.name ?? "Danh mục",
                href: `/category/${product.categoryId}`,
              },
              { label: product.name },
            ]}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            {/* ── LEFT: Product visual ──────────────────────────────────────── */}
            <div>
              {/* Large product image card */}
              <div className="aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-slate-50 via-indigo-50/40 to-purple-50 border border-indigo-100 flex items-center justify-center shadow-sm">
                <div
                  className="w-48 h-48 rounded-3xl flex items-center justify-center text-[5rem] shadow-inner"
                  style={{ backgroundColor: product.logoColor + "18" }}
                >
                  {product.logoEmoji}
                </div>
              </div>

              {/* Trust signals under image */}
              <div className="grid grid-cols-2 gap-2.5 mt-6">
                {[
                  { icon: "✅", text: "Chính hãng 100%" },
                  { icon: "⚡", text: "Giao trong 15 phút" },
                  { icon: "🛡️", text: "Bảo hành đầy đủ hạn" },
                  { icon: "🎧", text: "Hỗ trợ 24/7" },
                ].map((b) => (
                  <div
                    key={b.text}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-gray-600 font-medium"
                  >
                    <span className="text-base leading-none">{b.icon}</span>
                    <span>{b.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product info + buy ─────────────────────────────────── */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                  {product.categoryName}
                </span>
                {product.isSale && (
                  <span className="text-xs font-bold text-red-500 bg-red-50 px-3 py-1 rounded-full">
                    HOT SALE
                  </span>
                )}
                {product.isNew && (
                  <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                    MỚI
                  </span>
                )}
              </div>

              {/* Name & description */}
              <h1 className="text-3xl font-black text-gray-900 mb-2 leading-tight">
                {product.name}
              </h1>
              <p className="text-gray-500 leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="border-t border-gray-100 mb-5" />

              {/* Base price display (monthly) */}
              <div className="flex items-baseline gap-3 mb-1 flex-wrap">
                <span className="text-4xl font-black text-indigo-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
                {discountPct && (
                  <span className="bg-red-100 text-red-600 font-black px-2.5 py-1 rounded-lg text-sm">
                    -{discountPct}%
                  </span>
                )}
              </div>
              <p className="text-gray-400 text-sm mb-5">/tháng</p>

              {/* Stock + warranty row */}
              <div className="flex items-center gap-3 mb-6 flex-wrap text-sm">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-600">
                    Còn hàng
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400">Kho: 999 sản phẩm</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400">🛡️ Bảo hành đầy đủ hạn</span>
              </div>

              {/* Interactive pricing + CTA */}
              <PricingTierSelector tiers={tiers} productName={product.name} />
            </div>
          </div>
        </div>
      </div>

      {/* ── LOWER SECTIONS: gray bg ───────────────────────────────────────────── */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-5">
          {/* Features */}
          {features.length > 0 && (
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-black text-gray-900 text-xl mb-5">
                ✨ Tính năng nổi bật
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-indigo-50/60"
                  >
                    <span className="text-indigo-600 font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-gray-700 text-sm leading-relaxed">
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to buy */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h2 className="font-black text-gray-900 text-xl mb-6">
              🛒 Cách mua hàng
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {HOW_TO_BUY.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-11 h-11 rounded-full bg-indigo-600 text-white text-sm font-black flex items-center justify-center mx-auto mb-3 shadow-sm shadow-indigo-200">
                    {i + 1}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-5">
                <h2 className="text-xl font-black text-gray-900">
                  Sản phẩm liên quan
                </h2>
                <a
                  href={`/category/${product.categoryId}`}
                  className="text-indigo-600 text-sm font-semibold hover:underline"
                >
                  Xem tất cả →
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
