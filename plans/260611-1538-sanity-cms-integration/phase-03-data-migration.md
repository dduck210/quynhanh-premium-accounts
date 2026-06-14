---
phase: 3
title: "Data Migration"
status: pending
priority: P1
effort: "3h"
dependencies: [2]
---

# Phase 03: Data Migration

## Overview
Write a one-time migration script that reads existing TypeScript data and imports all 50+ products, categories, contact info, and pricing tiers into Sanity.

## Files to Create

### `scripts/migrate-to-sanity.ts`
One-shot script. Run once, then delete or keep for reference.

```ts
import { createClient } from '@sanity/client'
import { products, categories } from '../data/products'
import { productFeatures } from '../data/product-details'
import { productPricingTiers } from '../data/product-pricing-tiers'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN!, // editor/write token
  useCdn: false,
})

async function migrate() {
  // 1. Migrate categories
  for (const cat of categories) {
    await client.createOrReplace({
      _type: 'category',
      _id: `category-${cat.id}`,
      id: { _type: 'slug', current: cat.id },
      name: cat.name,
      icon: cat.icon,
      bgColor: cat.bgColor,
      textColor: cat.textColor,
    })
    console.log(`✓ Category: ${cat.name}`)
  }

  // 2. Migrate products
  for (const product of products) {
    const features = productFeatures[product.id] ?? []
    const tiers = productPricingTiers[product.id] ?? []

    await client.createOrReplace({
      _type: 'product',
      _id: `product-${product.id}`,
      id: { _type: 'slug', current: product.id },
      name: product.name,
      categoryId: product.categoryId,
      categoryName: product.categoryName,
      price: product.price,
      originalPrice: product.originalPrice ?? null,
      duration: product.duration,
      logoEmoji: product.logoEmoji,
      logoColor: product.logoColor,
      description: product.description,
      isFeatured: product.isFeatured ?? false,
      isSale: product.isSale ?? false,
      isNew: product.isNew ?? false,
      features: features.map(f => f.text ?? f),
      pricingTiers: tiers.map((t, i) => ({
        _key: `tier-${i}`,
        duration: t.duration,
        label: t.label ?? null,
        price: t.price,
        isPopular: t.isPopular ?? false,
        savings: t.savings ?? null,
      })),
    })
    console.log(`✓ Product: ${product.name}`)
  }

  // 3. Migrate siteSettings
  await client.createOrReplace({
    _type: 'siteSettings',
    _id: 'siteSettings',
    zaloUrl: 'https://zalo.me/0339502155',
    zaloPhone: '0339.502.155',
    facebookUrl: 'https://www.facebook.com/quanhquanh24/',
    messengerUrl: 'https://m.me/quanhquanh24',
    howToBuySteps: [
      'Chọn gói thời hạn phù hợp',
      'Bấm "Đặt mua ngay" hoặc liên hệ Zalo: 0339502155',
      'Thanh toán qua chuyển khoản/ví điện tử',
      'Nhận thông tin trong 5–15 phút',
    ],
  })
  console.log('✓ Site settings')

  console.log('\n✅ Migration complete!')
}

migrate().catch(console.error)
```

## Run Command
```bash
# Need a write token from sanity.io → API → Tokens → Add Editor token
SANITY_WRITE_TOKEN=xxx npx tsx scripts/migrate-to-sanity.ts
```

## Verification
After running, check Sanity Studio at `/studio`:
- Vision tab → run `*[_type == "product"] | order(name asc)` → should return 50+ docs
- Vision tab → run `*[_type == "category"]` → should return 8 docs
- Vision tab → run `*[_type == "siteSettings"]` → should return 1 doc

## Files to Modify
None — migration is additive only.

## Notes
- `createOrReplace` is idempotent — safe to run multiple times
- `_id` uses `product-{id}` prefix to avoid collisions
- Policy pages migrated manually in Studio (rich text, easier to write there)
- `SANITY_WRITE_TOKEN` is only needed for migration — delete from env after

## Success Criteria
- [ ] All 50+ products visible in Sanity Studio
- [ ] All 8 categories visible
- [ ] siteSettings document exists with correct contact URLs
- [ ] Pricing tiers present on all products that had custom tiers
