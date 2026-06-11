import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

const fetchOptions = process.env.NODE_ENV === 'development'
  ? { cache: 'no-store' as const }
  : { next: { revalidate: 60 } }

export const sanityClient = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fetch: <T = any>(query: string, params?: Record<string, unknown>) =>
    client.fetch<T>(query, params ?? {}, fetchOptions),
}
