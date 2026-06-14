---
phase: 1
title: "Setup & Schema Design"
status: pending
priority: P1
effort: "2h"
dependencies: []
---

# Phase 01: Setup & Schema Design

## Overview
Create Sanity project, install packages, define all schemas matching current data shape.

## Manual Pre-step (User must do)
1. Go to https://sanity.io → Sign up / Login
2. Create new project → name: "Quynh Anh Premium"
3. Note down: **Project ID** and **Dataset name** (default: `production`)

## Packages to Install
```bash
npm install next-sanity @sanity/client groq
npm install --save-dev @sanity/types
```

## Files to Create

### `sanity.config.ts` (root)
```ts
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Quynh Anh Premium',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  plugins: [structureTool(), visionTool()],
  schema: { types: schemaTypes },
})
```

### `sanity/schemas/index.ts`
Export all schema types.

### `sanity/schemas/product.ts`
Fields: id (slug), name, categoryId (ref→category), price, originalPrice, duration, logoEmoji, logoColor, description, isFeatured, isSale, isNew, features (array of strings), pricingTiers (array of inline objects)

### `sanity/schemas/category.ts`
Fields: id (slug), name, icon, bgColor, textColor

### `sanity/schemas/pricing-tier.ts`
Inline object type (used inside product): duration, label, price, isPopular, savings

### `sanity/schemas/site-settings.ts`
Singleton document. Fields: zaloUrl, zaloPhone, facebookUrl, messengerUrl, howToBuySteps (array of strings)

### `sanity/schemas/policy-page.ts`
Fields: slug (chinh-sach-bao-hanh etc.), title, content (block content / rich text)

## Schema Details

### Product schema — full field list
```ts
{
  name: 'product',
  title: 'Sản phẩm',
  type: 'document',
  fields: [
    { name: 'id',            type: 'slug',   title: 'ID (slug)', options: { source: 'name' } },
    { name: 'name',          type: 'string', title: 'Tên sản phẩm' },
    { name: 'categoryId',    type: 'string', title: 'Category ID' },
    { name: 'categoryName',  type: 'string', title: 'Category Name' },
    { name: 'price',         type: 'number', title: 'Giá (đồng)' },
    { name: 'originalPrice', type: 'number', title: 'Giá gốc (nếu sale)' },
    { name: 'duration',      type: 'string', title: 'Đơn vị thời gian', initialValue: 'tháng' },
    { name: 'logoEmoji',     type: 'string', title: 'Logo Emoji' },
    { name: 'logoColor',     type: 'string', title: 'Logo Color (hex)' },
    { name: 'description',   type: 'text',   title: 'Mô tả ngắn' },
    { name: 'isFeatured',    type: 'boolean' },
    { name: 'isSale',        type: 'boolean' },
    { name: 'isNew',         type: 'boolean' },
    { name: 'features',      type: 'array', of: [{ type: 'string' }], title: 'Tính năng nổi bật' },
    {
      name: 'pricingTiers',
      type: 'array',
      title: 'Bảng giá',
      of: [{
        type: 'object',
        fields: [
          { name: 'duration',  type: 'string' },
          { name: 'label',     type: 'string' },
          { name: 'price',     type: 'number' },
          { name: 'isPopular', type: 'boolean' },
          { name: 'savings',   type: 'number', title: 'Giảm giá (%)' },
        ]
      }]
    },
  ]
}
```

## Files to Modify
- `package.json` — add new deps

## Success Criteria
- [ ] `npm install` completes without errors
- [ ] All 5 schema files created and exported
- [ ] `sanity.config.ts` in root with correct projectId/dataset from env
- [ ] `npx tsc --noEmit` passes

## Risk Assessment
- User must manually create Sanity project first — block on this before Phase 02
