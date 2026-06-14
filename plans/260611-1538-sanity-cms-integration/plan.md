---
title: "Sanity CMS Integration"
status: pending
created: 2026-06-11
planDir: plans/260611-1538-sanity-cms-integration
---

# Sanity CMS Integration

Replace static TypeScript data files with Sanity CMS so the store owner can edit products, pricing tiers, contact info, and policies via Sanity Studio — no code changes needed.

## Phases

| # | Phase | Status | Effort |
|---|-------|--------|--------|
| 01 | [Setup & Schema Design](phase-01-setup-schema.md) | pending | 2h |
| 02 | [Studio Route & Sanity Client](phase-02-studio-client.md) | pending | 1h |
| 03 | [Data Migration](phase-03-data-migration.md) | pending | 3h |
| 04 | [Replace Static Data with GROQ Queries](phase-04-queries.md) | pending | 3h |
| 05 | [On-demand Revalidation](phase-05-revalidation.md) | pending | 1h |

## Key Dependencies

- Sanity account + project created (manual step before Phase 01)
- Vercel deployment env vars set after Phase 05

## Architecture Overview

```
Sanity Studio (/studio)
       ↓ edit content
Sanity Content Lake (cloud)
       ↓ GROQ queries via next-sanity
Next.js App (reads at request time / ISR)
       ↓ webhook on publish
/api/revalidate → revalidatePath()
```

## Package Changes

Add: `next-sanity`, `@sanity/client`, `groq`
Keep: all existing packages
