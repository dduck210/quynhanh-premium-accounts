import { notFound } from "next/navigation";
import {
  Bot,
  Music,
  Palette,
  BookOpen,
  Film,
  Zap,
  Briefcase,
  Shield,
  type LucideIcon,
} from "lucide-react";
import { sanityClient } from "@/sanity/lib/sanity-client";
import {
  ALL_CATEGORIES_QUERY,
  ALL_PRODUCTS_QUERY,
} from "@/sanity/lib/sanity-queries";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductCard from "@/components/product/product-card";
import AnimatedSection from "@/components/ui/animated-section";

export const revalidate = 60;

const ICON_MAP: Record<string, LucideIcon> = {
  Bot,
  Music,
  Palette,
  BookOpen,
  Film,
  Zap,
  Briefcase,
  Shield,
};

export async function generateStaticParams() {
  const categories = await sanityClient.fetch(ALL_CATEGORIES_QUERY);
  return categories.map((c: { id: string }) => ({ slug: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const categories = await sanityClient.fetch(ALL_CATEGORIES_QUERY);
  const cat = categories.find((c: { id: string }) => c.id === params.slug);
  return {
    title: cat
      ? `${cat.name} – Quỳnh Anh Premium Accounts`
      : "Danh mục – Quỳnh Anh Premium Accounts",
    description: cat
      ? `Mua tài khoản ${cat.name} premium chính hãng, giá tốt nhất, bảo hành đầy đủ.`
      : undefined,
    twitter: { card: "summary_large_image" as const },
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const [categories, products] = await Promise.all([
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
  ]);
  const category = categories.find((c: { id: string }) => c.id === params.slug);
  if (!category) notFound();

  const catProducts = products.filter(
    (p: { categoryId: string }) => p.categoryId === params.slug,
  );
  const Icon = ICON_MAP[category.icon] ?? Zap;

  return (
    <main
      id="main-content"
      className="min-h-screen animate-fade-in"
      style={{ backgroundColor: "var(--lux-void)" }}
    >
      {/* Header section */}
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
              { label: category.name },
            ]}
          />

          <AnimatedSection className="flex items-center gap-5 mt-8">
            {/* Icon */}
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "rgba(142,80,112,0.12)" }}
            >
              <Icon
                className="w-8 h-8"
                style={{ color: "var(--lux-gold)" }}
                strokeWidth={1.5}
              />
            </div>

            <div>
              <div className="lux-ornament mb-2 text-[9px] tracking-[0.4em]">
                ✦ DANH MỤC ✦
              </div>
              <h1
                className="font-display text-3xl md:text-4xl font-light leading-tight"
                style={{ color: "var(--lux-cream)" }}
              >
                {category.name}
              </h1>
              <p
                className="font-sans text-xs font-light mt-1.5"
                style={{ color: "var(--lux-silver)" }}
              >
                {catProducts.length} sản phẩm chính hãng
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Products grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {catProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {catProducts.map((p: { id: string }, i: number) => (
              <AnimatedSection key={p.id} delay={i * 60}>
                <ProductCard product={p as never} />
              </AnimatedSection>
            ))}
          </div>
        ) : (
          <div
            className="text-center py-24 font-light text-sm"
            style={{ color: "var(--lux-silver)" }}
          >
            Chưa có sản phẩm trong danh mục này.
          </div>
        )}
      </div>

      <Footer />
    </main>
  );
}
