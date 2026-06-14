import { notFound } from "next/navigation";
import { sanityClient } from "@/sanity/lib/sanity-client";
import { ALL_CATEGORIES_QUERY, ALL_PRODUCTS_QUERY } from "@/sanity/lib/sanity-queries";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductCard from "@/components/product/product-card";

export const revalidate = 60;

export async function generateStaticParams() {
  const categories = await sanityClient.fetch(ALL_CATEGORIES_QUERY);
  return categories.map((c: { id: string }) => ({ slug: c.id }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const categories = await sanityClient.fetch(ALL_CATEGORIES_QUERY);
  const cat = categories.find((c: { id: string }) => c.id === params.slug);
  return {
    title: cat
      ? `${cat.name} – Quỳnh Anh Premium Accounts`
      : "Danh mục – Quỳnh Anh Premium Accounts",
    description: cat
      ? `Mua tài khoản ${cat.name} premium chính hãng, giá tốt nhất, bảo hành đầy đủ hạn.`
      : undefined,
    twitter: { card: "summary_large_image" as const },
  };
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const [categories, products] = await Promise.all([
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
  ]);
  const category = categories.find((c: { id: string }) => c.id === params.slug);
  if (!category) notFound();

  const catProducts = products.filter((p: { categoryId: string }) => p.categoryId === params.slug);

  return (
    <main id="main-content" className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumb
          items={[{ label: "Trang chủ", href: "/" }, { label: category.name }]}
        />

        <div className="flex items-center gap-4 mt-6 mb-8">
          <div className={`w-14 h-14 rounded-2xl ${category.bgColor} flex items-center justify-center text-3xl flex-shrink-0`}>
            {category.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">{category.name}</h1>
            <p className="text-gray-500 text-sm mt-0.5">{category.count} sản phẩm chính hãng</p>
          </div>
        </div>

        {catProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {catProducts.map((p: { id: string }) => (
              <ProductCard key={p.id} product={p as never} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-gray-400">Chưa có sản phẩm trong danh mục này.</div>
        )}
      </div>

      <Footer />
    </main>
  );
}
