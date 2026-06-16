// ─── Types for McBrex Next.js frontend ───────────────────────────────────────
// Mirror the Sanity schema types for type-safe GROQ results

export interface SeoFields {
  metaTitle?: string
  metaDescription?: string
  canonicalUrl?: string
  ogImage?: string
  ogTitle?: string
  ogDescription?: string
  twitterCard?: 'summary' | 'summary_large_image'
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: string
  structuredData?: string // JSON-LD as string
}

export interface SanityImage {
  asset?: {
    url: string
    _ref?: string
  }
}

export interface Division {
  _id: string
  name: string
  slug: string
  tagline?: string
  description?: string
  logo?: string
  color?: string
  statsProducts?: number
  statsCategories?: number
  statsMolecules?: number
  statsDosageForms?: number
  seo?: SeoFields
}

export interface Category {
  _id: string
  name: string
  slug: string
  description?: string
  icon?: string
  featuredImage?: string
  displayOrder?: number
  productCount?: number
  seo?: SeoFields
}

export interface Molecule {
  _id: string
  name: string
  slug: string
  description?: string
  pharmacologicalClass?: string
  mechanismOfAction?: string
  therapeuticUses?: string[]
  productCount?: number
  seo?: SeoFields
}

export interface Product {
  _id: string
  name: string
  slug: string
  compositionText: string
  dosageForm: string
  mrp?: number
  image?: string
  packing?: string
  indications?: string
  sideEffects?: string
  storage?: string
  isFeatured?: boolean
  isActive?: boolean
  division?: Division
  category?: Category
  molecules?: Molecule[]
  relatedProducts?: Product[]
  moreFromDivision?: Product[]
  relatedBlogs?: BlogPost[]
  seo?: SeoFields
}

export interface BlogPost {
  _id: string
  title: string
  slug: string
  excerpt?: string
  body?: any[] // Portable Text
  publishedAt?: string
  author?: string
  blogCategory?: string
  tags?: string[]
  targetState?: string
  targetDistrict?: string
  coverImage?: string
  relatedProducts?: Product[]
  relatedMolecules?: Molecule[]
  relatedCategory?: Category
  morePosts?: BlogPost[]
  seo?: SeoFields
}

export interface SiteSettings {
  siteName?: string
  tagline?: string
  logo?: string
  phone?: string
  email?: string
  whatsapp?: string
  address?: string
  socialLinks?: { platform: string; url: string }[]
  defaultSeo?: SeoFields
  enquiryFormDivisions?: string[]
}

export interface HomePageData {
  featuredProducts?: Product[]
  categories?: Category[]
  divisions?: Division[]
  latestPosts?: BlogPost[]
  productCount?: number
  moleculeCount?: number
}
