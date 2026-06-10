import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedProducts from "@/components/FeaturedProducts";
import CtaBanner from "@/components/CtaBanner";
import CategoryGrid from "@/components/CategoryGrid";
import ProductSection from "@/components/ProductSection";
import ContactCta from "@/components/ContactCta";
import Footer from "@/components/Footer";
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

      {/* Per-category product sections, alternating bg */}
      <div id="products">
        {categories.map((cat, index) => {
          const catProducts = products.filter((p) => p.categoryId === cat.id);
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
