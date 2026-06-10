import { MetadataRoute } from "next";
import { products, categories } from "@/data/products";

const BASE_URL = "https://quynhanh-premium-accounts.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const productUrls = products.map((p) => ({
    url: `${BASE_URL}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((c) => ({
    url: `${BASE_URL}/category/${c.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  const policyUrls = [
    "chinh-sach-bao-hanh",
    "chinh-sach-hoan-tien",
    "dieu-khoan-su-dung",
    "chinh-sach-bao-mat",
    "huong-dan-mua-hang",
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.4,
  }));

  return [
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    ...categoryUrls,
    ...productUrls,
    ...policyUrls,
  ];
}
