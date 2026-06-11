import { groq } from 'next-sanity'

export const ALL_PRODUCTS_QUERY = groq`
  *[_type == "product"] | order(name asc) {
    "id": id.current,
    name,
    categoryId,
    categoryName,
    logoEmoji,
    logoColor,
    description,
    isFeatured,
    isSale,
    isNew,
    features,
    pricingTiers
  }
`

export const PRODUCT_BY_SLUG_QUERY = groq`
  *[_type == "product" && id.current == $slug][0] {
    "id": id.current,
    name,
    categoryId,
    categoryName,
    logoEmoji,
    logoColor,
    description,
    isFeatured,
    isSale,
    isNew,
    features,
    pricingTiers
  }
`

export const ALL_CATEGORIES_QUERY = groq`
  *[_type == "category"] | order(name asc) {
    "id": id.current,
    name,
    icon,
    bgColor,
    textColor,
    "count": count(*[_type == "product" && categoryId == ^.id.current])
  }
`

export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    zaloUrl,
    zaloPhone,
    facebookUrl,
    messengerUrl,
    howToBuySteps
  }
`

export const POLICY_PAGE_QUERY = groq`
  *[_type == "policyPage" && slug.current == $slug][0] {
    title,
    "slug": slug.current,
    content
  }
`
