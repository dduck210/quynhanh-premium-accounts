---
phase: 5
title: "On-demand Revalidation"
status: pending
priority: P1
effort: "1h"
dependencies: [4]
---

# Phase 05: On-demand Revalidation

## Overview
Wire up Sanity webhook → Next.js API route so pages update within ~2 seconds of saving in Studio — no deploy needed.

## How It Works
```
Editor saves in Sanity Studio
  → Sanity fires POST to https://your-domain.com/api/revalidate
  → API route verifies secret header
  → Calls revalidatePath('/') + revalidatePath('/product/[slug]') etc.
  → Next.js purges ISR cache for those paths
  → Next visitor gets fresh data
```

## Files to Create

### `app/api/revalidate/route.ts`
```ts
import { revalidatePath, revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.headers.get('x-sanity-webhook-secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const docType = body?._type

    // Revalidate all relevant paths
    revalidatePath('/', 'layout')              // covers all pages via root layout
    revalidatePath('/product/[slug]', 'page')
    revalidatePath('/category/[slug]', 'page')

    if (docType === 'policyPage') {
      revalidatePath('/(policies)/[slug]', 'page')
    }

    return NextResponse.json({ revalidated: true, type: docType })
  } catch {
    return NextResponse.json({ message: 'Revalidation failed' }, { status: 500 })
  }
}
```

## Setup Sanity Webhook (Manual Step)

1. Go to https://sanity.io/manage → your project → **API** → **Webhooks**
2. Click **Create webhook**
3. Fill in:
   - **Name:** Next.js Revalidate
   - **URL:** `https://your-vercel-domain.com/api/revalidate`
   - **Dataset:** production
   - **Trigger on:** Create, Update, Delete
   - **Filter:** leave empty (all document types)
   - **HTTP method:** POST
   - **Secret:** same value as `SANITY_REVALIDATE_SECRET` in .env
   - **Header name:** `x-sanity-webhook-secret`

## Local Testing
Use Sanity CLI webhook tunnel for local testing:
```bash
npx sanity webhook trigger --secret <your-secret> --url http://localhost:3000/api/revalidate
```
Or use ngrok to expose localhost.

## Environment Variables Summary

| Variable | Where | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SANITY_PROJECT_ID` | `.env.local` + Vercel | Sanity project ID |
| `NEXT_PUBLIC_SANITY_DATASET` | `.env.local` + Vercel | `production` |
| `SANITY_API_READ_TOKEN` | `.env.local` + Vercel | Server-side data fetching |
| `SANITY_REVALIDATE_SECRET` | `.env.local` + Vercel | Webhook auth |

## Vercel Deployment Steps
1. Push code to GitHub
2. Import project in Vercel
3. Add all 4 env vars in Vercel → Settings → Environment Variables
4. Deploy
5. Update Sanity webhook URL to Vercel production URL

## Success Criteria
- [ ] `POST /api/revalidate` with wrong secret returns 401
- [ ] `POST /api/revalidate` with correct secret returns `{ revalidated: true }`
- [ ] Edit product price in Studio → save → refresh page → new price shows (< 5 seconds)
- [ ] Works in both local (with tunnel) and Vercel production
