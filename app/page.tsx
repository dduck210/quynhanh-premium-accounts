import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import FeaturedProducts from "@/components/sections/featured-products";
import CtaBanner from "@/components/sections/cta-banner";
import CategoryGrid from "@/components/sections/category-grid";
import ProductSection from "@/components/sections/product-section";
import ContactCta from "@/components/sections/contact-cta";
import Footer from "@/components/layout/footer";
import { sanityClient } from "@/sanity/lib/sanity-client";
import { ALL_PRODUCTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/lib/sanity-queries";

export const revalidate = 60;

export default async function Home() {
  const [products, categories] = await Promise.all([
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
  ]);

  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <FeaturedProducts products={products} />
      <CtaBanner />
      <CategoryGrid categories={categories} />

      <div id="products">
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {categories.map((cat: any, index: number) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const catProducts = products.filter((p: any) => p.categoryId === cat.id).slice(0, 4);
          return (
            <div key={cat.id} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <ProductSection
                categoryId={cat.id}
                categoryName={cat.name}
                categoryIcon={cat.icon}
                productCount={cat.count}
                products={catProducts}
              />
            </div>
          );
        })}
      </div>

      <ContactCta />
      <Footer />
    </main>
  );
}
