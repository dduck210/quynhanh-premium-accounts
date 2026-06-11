import { notFound } from "next/navigation";
import { BadgeCheck, Zap, ShieldCheck, Headphones, Sparkles, ShoppingCart } from "lucide-react";
import { formatPrice } from "@/data/products";
import { sanityClient } from "@/sanity/lib/sanity-client";
import {
  ALL_PRODUCTS_QUERY,
  PRODUCT_BY_SLUG_QUERY,
  ALL_CATEGORIES_QUERY,
  SITE_SETTINGS_QUERY,
} from "@/sanity/lib/sanity-queries";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/ui/breadcrumb";
import PricingTierSelector from "@/components/product/pricing-tier-selector";
import ProductCard from "@/components/product/product-card";
import ProductDetailLogo from "@/components/product/product-detail-logo";

export const revalidate = 60;

export async function generateStaticParams() {
  const products = await sanityClient.fetch(ALL_PRODUCTS_QUERY);
  return products.map((p: { id: string }) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const p = await sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, { slug: params.slug });
  return {
    title: p
      ? `${p.name} – Quỳnh Anh Premium Accounts`
      : "Sản phẩm – Quỳnh Anh Premium Accounts",
    description: p?.description,
  };
}

export default async function ProductPage({ params }: { params: { slug: string } }) {
  const [product, categories, allProducts, siteSettings] = await Promise.all([
    sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, { slug: params.slug }),
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
    sanityClient.fetch(SITE_SETTINGS_QUERY),
  ]);
  if (!product) notFound();

  const category = categories.find((c: { id: string }) => c.id === product.categoryId);
  const features: string[] = product.features ?? [];
  const tiers = product.pricingTiers ?? [];
  const related = allProducts
    .filter((p: { categoryId: string; id: string }) => p.categoryId === product.categoryId && p.id !== product.id)
    .slice(0, 3);
  const howToBuy: string[] = siteSettings?.howToBuySteps ?? [
    "Chọn gói thời hạn phù hợp với nhu cầu sử dụng",
    "Bấm \"Đặt mua ngay\" hoặc liên hệ Zalo: 0339502155",
    "Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử",
    "Nhận thông tin tài khoản qua Zalo trong 5–15 phút",
  ];

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
              <div className="aspect-square max-w-sm mx-auto rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50/40 to-purple-50 border border-blue-100 flex items-center justify-center shadow-sm">
                <ProductDetailLogo
                  id={product.id}
                  name={product.name}
                  logoEmoji={product.logoEmoji}
                  logoColor={product.logoColor}
                />
              </div>

              {/* Trust signals under image */}
              <div className="grid grid-cols-2 gap-2.5 mt-6">
                {[
                  { icon: BadgeCheck, text: "Chính hãng 100%",   color: "text-emerald-500" },
                  { icon: Zap,        text: "Giao trong 15 phút", color: "text-amber-500"   },
                  { icon: ShieldCheck,text: "Bảo hành đầy đủ hạn",color: "text-blue-500" },
                  { icon: Headphones, text: "Hỗ trợ 24/7",        color: "text-blue-500"   },
                ].map(({ icon: Icon, text, color }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2 bg-gray-50 border border-gray-100 rounded-xl px-3 py-2.5 text-sm text-gray-600 font-medium"
                  >
                    <Icon className={`w-4 h-4 flex-shrink-0 ${color}`} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Product info + buy ─────────────────────────────────── */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
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
                <span className="flex items-center gap-1 text-gray-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Bảo hành đầy đủ hạn
                </span>
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
              <h2 className="flex items-center gap-2 font-black text-gray-900 text-xl mb-5">
                <Sparkles className="w-5 h-5 text-blue-500" />
                Tính năng nổi bật
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-blue-50/60"
                  >
                    <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">
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
            <h2 className="flex items-center gap-2 font-black text-gray-900 text-xl mb-6">
              <ShoppingCart className="w-5 h-5 text-blue-500" />
              Cách mua hàng
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {howToBuy.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-11 h-11 rounded-full bg-blue-600 text-white text-sm font-black flex items-center justify-center mx-auto mb-3 shadow-sm shadow-blue-200">
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
                  className="text-blue-600 text-sm font-semibold hover:underline"
                >
                  Xem tất cả →
                </a>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {related.map((p: any) => (
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
