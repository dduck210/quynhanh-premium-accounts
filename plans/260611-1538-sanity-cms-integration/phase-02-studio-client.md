---
phase: 2
title: "Studio Route & Sanity Client"
status: pending
priority: P1
effort: "1h"
dependencies: [1]
---

# Phase 02: Studio Route & Sanity Client

## Overview
Embed Sanity Studio at `/studio` in the Next.js app and set up the typed GROQ client.

## Files to Create

### `app/studio/[[...tool]]/page.tsx`
```tsx
'use client'
import { NextStudio } from 'next-sanity/studio'
import config from '@/sanity.config'

export const dynamic = 'force-dynamic'

export default function StudioPage() {
  return <NextStudio config={config} />
}
```

### `sanity/lib/client.ts`
```ts
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false, // false = always fresh data (needed for on-demand revalidation)
})
```

### `sanity/lib/queries.ts`
All GROQ queries in one place:
```ts
import { groq } from 'next-sanity'

export const allProductsQuery = groq`*[_type == "product"] | order(name asc) { ... }`
export const productBySlugQuery = groq`*[_type == "product" && id.current == $slug][0] { ... }`
export const allCategoriesQuery = groq`*[_type == "category"] | order(name asc)`
export const siteSettingsQuery = groq`*[_type == "siteSettings"][0]`
export const policyBySlugQuery = groq`*[_type == "policyPage" && slug.current == $slug][0]`
```

### `.env.local` additions
```
NEXT_PUBLIC_SANITY_PROJECT_ID=<from sanity.io>
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=<viewer token from sanity.io>
SANITY_REVALIDATE_SECRET=<random string, e.g. openssl rand -hex 32>
```

## Files to Modify

### `next.config.js`
Add Sanity image domain and transpile:
```js
const nextConfig = {
  // existing config...
  images: {
    // existing formats...
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}
```

### `.gitignore`
Ensure `.env.local` is listed (should already be).

## Success Criteria
- [ ] `/studio` route loads Sanity Studio in browser
- [ ] Can log in with Google/GitHub
- [ ] `client.fetch(groq\`*[_type == "product"]\`)` returns empty array (no data yet)
- [ ] No TypeScript errors

## Notes
- Studio auth is handled entirely by Sanity — no custom auth code needed
- `useCdn: false` ensures we always get fresh data after revalidation
- Keep `SANITY_API_READ_TOKEN` server-only (no `NEXT_PUBLIC_` prefix)
