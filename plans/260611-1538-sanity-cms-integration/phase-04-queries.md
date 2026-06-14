---
phase: 4
title: "Replace Static Data with GROQ Queries"
status: pending
priority: P1
effort: "3h"
dependencies: [3]
---

# Phase 04: Replace Static Data with GROQ Queries

## Overview
Update all pages and components to fetch data from Sanity instead of importing TypeScript files. Keep static data files temporarily as fallback during transition.

## Files to Modify

### `sanity/lib/queries.ts` — full query set
```ts
import { groq } from 'next-sanity'

export const allProductsQuery = groq`
  *[_type == "product"] | order(name asc) {
    "id": id.current,
    name, categoryId, categoryName, price, originalPrice,
    duration, logoEmoji, logoColor, description,
    isFeatured, isSale, isNew, features, pricingTiers
  }
`

export const featuredProductsQuery = groq`
  *[_type == "product" && isFeatured == true] | order(name asc) {
    "id": id.current,
    name, categoryId, categoryName, price, originalPrice,
    duration, logoEmoji, logoColor, description,
    isFeatured, isSale, isNew
  }
`

export const productBySlugQuery = groq`
  *[_type == "product" && id.current == $slug][0] {
    "id": id.current,
    name, categoryId, categoryName, price, originalPrice,
    duration, logoEmoji, logoColor, description,
    isFeatured, isSale, isNew, features, pricingTiers
  }
`

export const productsByCategoryQuery = groq`
  *[_type == "product" && categoryId == $categoryId] | order(name asc) {
    "id": id.current,
    name, categoryId, categoryName, price, originalPrice,
    duration, logoEmoji, logoColor, description,
    isFeatured, isSale, isNew
  }
`

export const allCategoriesQuery = groq`
  *[_type == "category"] | order(name asc) {
    "id": id.current,
    name, icon, bgColor, textColor
  }
`

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    zaloUrl, zaloPhone, facebookUrl, messengerUrl, howToBuySteps
  }
`

export const policyBySlugQuery = groq`
  *[_type == "policyPage" && slug.current == $slug][0] {
    title, slug, content
  }
`
```

### `app/page.tsx` (homepage)
- Replace: `import { products, categories } from '@/data/products'`
- With: `const [products, categories] = await Promise.all([client.fetch(allProductsQuery), client.fetch(allCategoriesQuery)])`
- Add `export const revalidate = false` (rely on on-demand revalidation only)

### `app/product/[slug]/page.tsx`
- Replace data imports with: `client.fetch(productBySlugQuery, { slug: params.slug })`
- siteSettings fetch for HOW_TO_BUY steps
- Return `notFound()` if product is null

### `app/category/[slug]/page.tsx`
- Replace with: `client.fetch(productsByCategoryQuery, { categoryId: params.slug })`

### `app/(policies)/*/page.tsx` (all 5 policy pages)
- Fetch from Sanity using `policyBySlugQuery`
- Render with `@portabletext/react` for rich text

### `components/layout/footer.tsx`
- Accept `siteSettings` prop or fetch at layout level
- Replace hardcoded URLs with data from siteSettings

### `components/layout/navbar.tsx`
- Same as footer — replace hardcoded Zalo URL

### `components/product/pricing-tier-selector.tsx`
- Accept `siteSettings` prop for Zalo/Messenger/Facebook URLs
- Remove hardcoded `https://zalo.me/g/`

### `components/sections/contact-cta.tsx`
- Accept `siteSettings` prop

### `app/layout.tsx`
- Fetch `siteSettings` once at root layout
- Pass down as prop or use React context

## Strategy: Root Layout siteSettings Fetch
Fetch siteSettings once in `app/layout.tsx` and pass to Navbar/Footer via props — avoids N fetches per page:

```tsx
// app/layout.tsx
const settings = await client.fetch(siteSettingsQuery)
// pass to <Navbar settings={settings} /> and <Footer settings={settings} />
```

## Type Definitions

### `types/sanity.ts` (new file)
Mirror TypeScript interfaces from data files but sourced from Sanity:
```ts
export interface SanityProduct { id: string; name: string; ... }
export interface SanityCategory { id: string; name: string; ... }
export interface SiteSettings { zaloUrl: string; facebookUrl: string; messengerUrl: string; ... }
```

## Files to Create
- `types/sanity.ts` — Sanity-sourced type definitions
- `sanity/lib/queries.ts` — all GROQ queries

## Files to Modify
- `app/layout.tsx`
- `app/page.tsx`
- `app/product/[slug]/page.tsx`
- `app/category/[slug]/page.tsx`
- `app/(policies)/*/page.tsx` (5 files)
- `components/layout/footer.tsx`
- `components/layout/navbar.tsx`
- `components/product/pricing-tier-selector.tsx`
- `components/sections/contact-cta.tsx`
- `components/sections/cta-banner.tsx`

## Files to Delete (after confirming data in Sanity)
- `data/products.ts`
- `data/product-details.ts`
- `data/product-pricing-tiers.ts`

## Success Criteria
- [ ] Homepage loads products from Sanity
- [ ] Product detail page loads from Sanity
- [ ] Category pages load from Sanity
- [ ] Contact URLs come from siteSettings (not hardcoded)
- [ ] `npx tsc --noEmit` passes
- [ ] Editing a product in Studio → save → page shows updated data after revalidation
