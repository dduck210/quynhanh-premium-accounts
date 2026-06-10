import { notFound } from "next/navigation";
import { categories, products } from "@/data/products";
import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Breadcrumb from "@/components/ui/breadcrumb";
import ProductCard from "@/components/product/product-card";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.id }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const cat = categories.find((c) => c.id === params.slug);
  return {
    title: cat ? `${cat.name} – Quỳnh Anh Premium Accounts` : "Danh mục – Quỳnh Anh Premium Accounts",
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = categories.find((c) => c.id === params.slug);
  if (!category) notFound();

  const catProducts = products.filter((p) => p.categoryId === params.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      <AnnouncementBar />
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: "Trang chủ", href: "/" },
            { label: category.name },
          ]}
        />

        {/* Category header */}
        <div className="flex items-center gap-4 mt-6 mb-8">
          <div
            className={`w-14 h-14 rounded-2xl ${category.bgColor} flex items-center justify-center text-3xl flex-shrink-0`}
          >
            {category.icon}
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900">{category.name}</h1>
            <p className="text-gray-500 text-sm mt-0.5">{category.count} sản phẩm chính hãng</p>
          </div>
        </div>

        {/* Product grid */}
        {catProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {catProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
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
