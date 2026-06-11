import { MetadataRoute } from "next";
import { sanityClient } from "@/sanity/lib/sanity-client";
import { ALL_PRODUCTS_QUERY, ALL_CATEGORIES_QUERY } from "@/sanity/lib/sanity-queries";

const BASE_URL = "https://quynhanh-premium-accounts.vercel.app";

export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [products, categories] = await Promise.all([
    sanityClient.fetch(ALL_PRODUCTS_QUERY),
    sanityClient.fetch(ALL_CATEGORIES_QUERY),
  ]);

  const productUrls = products.map((p: { id: string }) => ({
    url: `${BASE_URL}/product/${p.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  const categoryUrls = categories.map((c: { id: string }) => ({
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
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    ...categoryUrls,
    ...productUrls,
    ...policyUrls,
  ];
}
