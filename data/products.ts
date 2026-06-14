export interface PricingTier {
  duration: string;
  label?: string;
  price: number;
  isPopular?: boolean;
  savings?: number;
}

export interface Product {
  id: string;
  name: string;
  categoryId: string;
  categoryName: string;
  logoEmoji: string;
  logoColor: string;
  description: string;
  isFeatured?: boolean;
  isSale?: boolean;
  isNew?: boolean;
  features?: string[];
  pricingTiers?: PricingTier[];
  /** @deprecated use pricingTiers[0].price */
  price?: number;
  /** @deprecated use pricingTiers[0].price */
  originalPrice?: number;
  /** @deprecated use pricingTiers[0].duration */
  duration?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  bgColor: string;
  textColor: string;
}

export const formatPrice = (price: number): string =>
  new Intl.NumberFormat("vi-VN").format(price) + "đ";
