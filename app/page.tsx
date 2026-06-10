import AnnouncementBar from "@/components/layout/announcement-bar";
import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/sections/hero-section";
import FeaturedProducts from "@/components/sections/featured-products";
import CtaBanner from "@/components/sections/cta-banner";
import CategoryGrid from "@/components/sections/category-grid";
import ProductSection from "@/components/sections/product-section";
import ContactCta from "@/components/sections/contact-cta";
import Footer from "@/components/layout/footer";
import { categories, products } from "@/data/products";

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <FeaturedProducts />
      <CtaBanner />
      <CategoryGrid />

      {/* Per-category product sections — show 4 per category, link to full page */}
      <div id="products">
        {categories.map((cat, index) => {
          const catProducts = products
            .filter((p) => p.categoryId === cat.id)
            .slice(0, 4);
          return (
            <div
              key={cat.id}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
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
