import { notFound } from "next/navigation";
import {
  BadgeCheck,
  Zap,
  ShieldCheck,
  Headphones,
  Sparkles,
  ShoppingCart,
} from "lucide-react";
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

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const p = await sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, {
    slug: params.slug,
  });
  return {
    title: p
      ? `${p.name} – Quỳnh Anh Premium Accounts`
      : "Sản phẩm – Quỳnh Anh Premium Accounts",
    description: p?.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const [product, categories, allProducts, siteSettings] = await Promise.all([
    sanityClient.fetch(PRODUCT_BY_SLUG_QUERY, { slug: params.slug }),
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
    sanityClient.fetch(SITE_SETTINGS_QUERY),
  ]);
  if (!product) notFound();

  const category = categories.find(
    (c: { id: string }) => c.id === product.categoryId,
  );
  const features: string[] = product.features ?? [];
  const tiers = product.pricingTiers ?? [];
  const related = allProducts
    .filter(
      (p: { categoryId: string; id: string }) =>
        p.categoryId === product.categoryId && p.id !== product.id,
    )
    .slice(0, 3);
  const howToBuy: string[] = siteSettings?.howToBuySteps ?? [
    "Chọn gói thời hạn phù hợp với nhu cầu sử dụng",
    'Bấm "Đặt mua ngay" hoặc liên hệ Zalo: 0339502155',
    "Thanh toán qua chuyển khoản ngân hàng hoặc ví điện tử",
    "Nhận thông tin tài khoản qua Zalo trong 5–15 phút",
  ];

  return (
    <main
      id="main-content"
      className="min-h-screen"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: product.name,
            description: product.description,
            offers:
              tiers.length > 0
                ? {
                    "@type": "Offer",
                    price: tiers[0].price,
                    priceCurrency: "VND",
                    availability: "https://schema.org/InStock",
                  }
                : undefined,
          }),
        }}
      />
      <AnnouncementBar />
      <Navbar />

      {/* ── TOP SECTION ─────────────────────────────────── */}
      <div
        className="border-b"
        style={{
          backgroundColor: "var(--lux-obsidian)",
          borderColor: "var(--lux-gold-border)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-10">
            {/* Left: Visual */}
            <div>
              <div
                className="aspect-square max-w-sm mx-auto rounded-2xl flex items-center justify-center border relative overflow-hidden"
                style={{
                  backgroundColor: "var(--lux-carbon)",
                  borderColor: "var(--lux-gold-border)",
                  boxShadow: "0 0 60px rgba(201,168,76,0.06)",
                }}
              >
                {/* Corner accents */}
                <span
                  className="absolute top-4 left-4 w-5 h-5 border-t border-l"
                  style={{ borderColor: "var(--lux-gold-dim)" }}
                  aria-hidden="true"
                />
                <span
                  className="absolute top-4 right-4 w-5 h-5 border-t border-r"
                  style={{ borderColor: "var(--lux-gold-dim)" }}
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-4 left-4 w-5 h-5 border-b border-l"
                  style={{ borderColor: "var(--lux-gold-dim)" }}
                  aria-hidden="true"
                />
                <span
                  className="absolute bottom-4 right-4 w-5 h-5 border-b border-r"
                  style={{ borderColor: "var(--lux-gold-dim)" }}
                  aria-hidden="true"
                />

                <ProductDetailLogo
                  id={product.id}
                  name={product.name}
                  logoEmoji={product.logoEmoji}
                  logoColor={product.logoColor}
                />
              </div>

              {/* Trust signals */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                {[
                  {
                    icon: BadgeCheck,
                    text: "Chính hãng 100%",
                    accent: "var(--lux-gold)",
                  },
                  {
                    icon: Zap,
                    text: "Giao trong 15 phút",
                    accent: "var(--lux-gold-light)",
                  },
                  {
                    icon: ShieldCheck,
                    text: "Bảo hành đầy đủ",
                    accent: "var(--lux-gold)",
                  },
                  {
                    icon: Headphones,
                    text: "Hỗ trợ 24/7",
                    accent: "var(--lux-gold)",
                  },
                ].map(({ icon: Icon, text, accent }) => (
                  <div
                    key={text}
                    className="flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-xs font-light border"
                    style={{
                      backgroundColor: "rgba(16,16,16,0.6)",
                      borderColor: "var(--lux-gold-border)",
                      color: "var(--lux-ivory)",
                    }}
                  >
                    <Icon
                      className="w-3.5 h-3.5 flex-shrink-0"
                      style={{ color: accent }}
                    />
                    {text}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Info + buy */}
            <div>
              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="lux-badge">{product.categoryName}</span>
                {product.isSale && (
                  <span
                    className="lux-badge"
                    style={{
                      color: "var(--lux-gold-light)",
                      borderColor: "var(--lux-gold-border)",
                      backgroundColor: "rgba(201,168,76,0.08)",
                    }}
                  >
                    HOT SALE
                  </span>
                )}
                {product.isNew && (
                  <span
                    className="lux-badge"
                    style={{
                      color: "var(--lux-cream)",
                      borderColor: "rgba(240,234,216,0.2)",
                      backgroundColor: "rgba(240,234,216,0.06)",
                    }}
                  >
                    MỚI
                  </span>
                )}
              </div>

              {/* Name & description */}
              <h1
                className="font-display text-3xl sm:text-4xl font-light leading-tight mb-3"
                style={{ color: "var(--lux-cream)" }}
              >
                {product.name}
              </h1>
              <p
                className="text-base leading-relaxed mb-6 font-light"
                style={{ color: "var(--lux-silver)" }}
              >
                {product.description}
              </p>

              <div className="gold-divider mb-6" />

              {/* Stock + warranty */}
              <div
                className="flex items-center gap-3 mb-7 flex-wrap text-xs font-light"
                style={{ color: "var(--lux-silver)" }}
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "var(--lux-gold)" }}
                  />
                  <span
                    className="font-normal"
                    style={{ color: "var(--lux-gold)" }}
                  >
                    Còn hàng
                  </span>
                </div>
                <span style={{ color: "var(--lux-gold-border)" }}>|</span>
                <span className="flex items-center gap-1">
                  <ShieldCheck
                    className="w-3.5 h-3.5"
                    style={{ color: "var(--lux-gold)" }}
                  />
                  Bảo hành đầy đủ
                </span>
              </div>

              <PricingTierSelector tiers={tiers} productName={product.name} />
            </div>
          </div>
        </div>
      </div>

      {/* ── LOWER SECTIONS ────────────────────────────── */}
      <div style={{ backgroundColor: "var(--lux-void)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-5">
          {/* Features */}
          {features.length > 0 && (
            <div
              className="rounded-xl border p-7"
              style={{
                backgroundColor: "var(--lux-obsidian)",
                borderColor: "var(--lux-gold-border)",
              }}
            >
              <h2
                className="font-display flex items-center gap-2.5 text-2xl font-light mb-6"
                style={{ color: "var(--lux-cream)" }}
              >
                <Sparkles
                  className="w-5 h-5"
                  style={{ color: "var(--lux-gold)" }}
                />
                Tính năng nổi bật
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 rounded-lg border"
                    style={{
                      backgroundColor: "var(--lux-gold-pale)",
                      borderColor: "var(--lux-gold-border)",
                    }}
                  >
                    <span
                      className="flex-shrink-0 mt-0.5 font-bold"
                      style={{ color: "var(--lux-gold)" }}
                    >
                      ✓
                    </span>
                    <span
                      className="text-sm leading-relaxed font-light"
                      style={{ color: "var(--lux-ivory)" }}
                    >
                      {f}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* How to buy */}
          <div
            className="rounded-xl border p-7"
            style={{
              backgroundColor: "var(--lux-obsidian)",
              borderColor: "var(--lux-gold-border)",
            }}
          >
            <h2
              className="font-display flex items-center gap-2.5 text-2xl font-light mb-8"
              style={{ color: "var(--lux-cream)" }}
            >
              <ShoppingCart
                className="w-5 h-5"
                style={{ color: "var(--lux-gold)" }}
              />
              Cách mua hàng
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {howToBuy.map((step, i) => (
                <div key={i} className="text-center">
                  <div
                    className="w-10 h-10 rounded-full font-label text-sm font-bold flex items-center justify-center mx-auto mb-3"
                    style={{
                      backgroundColor: "var(--lux-gold)",
                      color: "var(--lux-void)",
                    }}
                  >
                    {i + 1}
                  </div>
                  <p
                    className="text-xs leading-relaxed font-light"
                    style={{ color: "var(--lux-silver)" }}
                  >
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2
                  className="font-display text-2xl font-light"
                  style={{ color: "var(--lux-cream)" }}
                >
                  Sản phẩm liên quan
                </h2>
                <a
                  href={`/category/${product.categoryId}`}
                  className="font-sans font-medium text-xs tracking-widest uppercase transition-colors duration-200 text-[var(--lux-gold-dim)] hover:text-[var(--lux-gold)] active:opacity-70"
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
