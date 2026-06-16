// lib/queries.ts — All GROQ queries for McBrex Next.js frontend
// Import these in your page components and use with sanityFetch()

// ─── Reusable projections ─────────────────────────────────────────────────────

/** Minimal product card — used in lists, related-products grids */
const PRODUCT_CARD_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  compositionText,
  dosageForm,
  mrp,
  "image": image.asset->url,
  "division": division->{ name, "slug": slug.current },
  "category": category->{ name, "slug": slug.current },
}`

/** Minimal molecule chip — used in molecule lists */
const MOLECULE_CHIP_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
}`

/** Minimal category card */
const CATEGORY_CARD_PROJECTION = `{
  _id,
  name,
  "slug": slug.current,
  icon,
  description,
}`

// ─── Site Settings ────────────────────────────────────────────────────────────

export const SITE_SETTINGS_QUERY = `
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    "logo": logo.asset->url,
    phone,
    email,
    whatsapp,
    address,
    socialLinks,
    defaultSeo,
    enquiryFormDivisions,
  }
`

// ─── Divisions ────────────────────────────────────────────────────────────────

/** All divisions for listing page */
export const ALL_DIVISIONS_QUERY = `
  *[_type == "division"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    "logo": logo.asset->url,
    color,
    statsProducts,
    statsCategories,
    statsMolecules,
    statsDosageForms,
  }
`

/** Single division + its products grouped by category */
export const DIVISION_BY_SLUG_QUERY = `
  *[_type == "division" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    tagline,
    description,
    "logo": logo.asset->url,
    color,
    statsProducts,
    statsCategories,
    statsMolecules,
    statsDosageForms,
    seo,
    "products": *[_type == "product" && references(^._id) && isActive == true] | order(name asc) ${PRODUCT_CARD_PROJECTION},
    "featuredProducts": *[_type == "product" && references(^._id) && isFeatured == true && isActive == true][0...8] ${PRODUCT_CARD_PROJECTION},
  }
`

/** Just slugs — for generateStaticParams */
export const DIVISION_SLUGS_QUERY = `
  *[_type == "division"] { "slug": slug.current }
`

// ─── Categories ───────────────────────────────────────────────────────────────

/** All categories for listing page */
export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(displayOrder asc, name asc) {
    _id,
    name,
    "slug": slug.current,
    description,
    icon,
    "featuredImage": featuredImage.asset->url,
    "productCount": count(*[_type == "product" && references(^._id) && isActive == true]),
  }
`

/** Single category + all its products */
export const CATEGORY_BY_SLUG_QUERY = `
  *[_type == "category" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    icon,
    "featuredImage": featuredImage.asset->url,
    seo,
    "products": *[_type == "product" && references(^._id) && isActive == true] | order(name asc) ${PRODUCT_CARD_PROJECTION},
    "molecules": *[_type == "product" && references(^._id) && isActive == true].molecules[]->{ name, "slug": slug.current },
  }
`

export const CATEGORY_SLUGS_QUERY = `
  *[_type == "category"] { "slug": slug.current }
`

// ─── Molecules ────────────────────────────────────────────────────────────────

/** All molecules for listing page */
export const ALL_MOLECULES_QUERY = `
  *[_type == "molecule"] | order(name asc) {
    _id,
    name,
    "slug": slug.current,
    pharmacologicalClass,
    description,
    "productCount": count(*[_type == "product" && references(^._id) && isActive == true]),
  }
`

/**
 * Single molecule page — this is the heart of the internal linking strategy:
 *  ✅ Products containing this molecule
 *  ✅ Categories those products belong to
 *  ✅ Divisions offering this molecule
 *  ✅ Related molecules (same pharmacological class)
 *  ✅ Related blog posts that mention this molecule
 */
export const MOLECULE_BY_SLUG_QUERY = `
  *[_type == "molecule" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    description,
    pharmacologicalClass,
    mechanismOfAction,
    therapeuticUses,
    seo,

    "products": *[_type == "product" && references(^._id) && isActive == true] | order(name asc) ${PRODUCT_CARD_PROJECTION},

    "relatedCategories": *[_type == "product" && references(^._id) && isActive == true].category->
      | order(name asc) ${CATEGORY_CARD_PROJECTION},

    "divisions": *[_type == "product" && references(^._id) && isActive == true].division->{
      name, "slug": slug.current, "logo": logo.asset->url
    },

    "relatedMolecules": relatedMolecules[]-> ${MOLECULE_CHIP_PROJECTION},

    "relatedBlogs": *[_type == "blogPost" && references(^._id)] | order(publishedAt desc)[0...4] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url,
    },
  }
`

export const MOLECULE_SLUGS_QUERY = `
  *[_type == "molecule"] { "slug": slug.current }
`

// ─── Products ─────────────────────────────────────────────────────────────────

/** All products — paginated via $from/$to slice  */
export const ALL_PRODUCTS_QUERY = `
  *[_type == "product" && isActive == true] | order(name asc) [$from...$to] ${PRODUCT_CARD_PROJECTION}
`

export const ALL_PRODUCTS_COUNT_QUERY = `
  count(*[_type == "product" && isActive == true])
`

/**
 * Single product page — full internal linking:
 *  ✅ Active molecules → molecule pages
 *  ✅ Related products in same category
 *  ✅ Related products in same division
 *  ✅ Blog posts related to this product
 */
export const PRODUCT_BY_SLUG_QUERY = `
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    compositionText,
    dosageForm,
    packing,
    mrp,
    "image": image.asset->url,
    indications,
    sideEffects,
    storage,
    isFeatured,
    seo,

    "division": division->{ name, "slug": slug.current, "logo": logo.asset->url, color },
    "category": category->{ name, "slug": slug.current, icon },

    "molecules": molecules[]->{ name, "slug": slug.current, pharmacologicalClass },

    "relatedProducts": *[
      _type == "product"
      && isActive == true
      && references(^.category._ref)
      && _id != ^._id
    ] | order(isFeatured desc, name asc) [0...6] ${PRODUCT_CARD_PROJECTION},

    "moreFromDivision": *[
      _type == "product"
      && isActive == true
      && references(^.division._ref)
      && _id != ^._id
      && !references(^.category._ref)
    ] | order(isFeatured desc) [0...4] ${PRODUCT_CARD_PROJECTION},

    "relatedBlogs": *[_type == "blogPost" && references(^._id)] | order(publishedAt desc) [0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url,
    },
  }
`

export const PRODUCT_SLUGS_QUERY = `
  *[_type == "product" && isActive == true] { "slug": slug.current }
`

// ─── Blog Posts ───────────────────────────────────────────────────────────────

/** Blog listing — paginated */
export const ALL_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && !defined(targetState) && !defined(targetDistrict)] | order(publishedAt desc) [$from...$to] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    author,
    blogCategory,
    tags,
    "coverImage": coverImage.asset->url,
  }
`

export const ALL_BLOG_POSTS_COUNT_QUERY = `
  count(*[_type == "blogPost" && !defined(targetState) && !defined(targetDistrict)])
`

/** State-wise blog listing */
export const STATE_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && defined(targetState) && !defined(targetDistrict)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    targetState,
    "coverImage": coverImage.asset->url,
  }
`

/** District-wise blog listing */
export const DISTRICT_BLOG_POSTS_QUERY = `
  *[_type == "blogPost" && defined(targetDistrict)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    targetDistrict,
    targetState,
    "coverImage": coverImage.asset->url,
  }
`

/**
 * Single blog post — full internal linking:
 *  ✅ Related products (curated + auto by category)
 *  ✅ Related molecules
 *  ✅ Related category
 *  ✅ Related blog posts (same category)
 */
export const BLOG_POST_BY_SLUG_QUERY = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    body,
    publishedAt,
    author,
    blogCategory,
    tags,
    targetState,
    targetDistrict,
    "coverImage": coverImage.asset->url,
    seo,

    "relatedProducts": relatedProducts[]-> ${PRODUCT_CARD_PROJECTION},

    "categoryProducts": relatedCategory-> {
      name,
      "slug": slug.current,
      "products": *[_type == "product" && references(^._id) && isActive == true] | order(isFeatured desc) [0...4] ${PRODUCT_CARD_PROJECTION},
    },

    "relatedMolecules": relatedMolecules[]-> ${MOLECULE_CHIP_PROJECTION},

    "relatedCategory": relatedCategory->{ name, "slug": slug.current, icon },

    "morePosts": *[
      _type == "blogPost"
      && blogCategory == ^.blogCategory
      && _id != ^._id
    ] | order(publishedAt desc) [0...3] {
      _id,
      title,
      "slug": slug.current,
      excerpt,
      publishedAt,
      "coverImage": coverImage.asset->url,
    },
  }
`

export const BLOG_SLUGS_QUERY = `
  *[_type == "blogPost"] { "slug": slug.current }
`

// ─── Homepage ─────────────────────────────────────────────────────────────────

export const HOMEPAGE_QUERY = `
  {
    "featuredProducts": *[_type == "product" && isFeatured == true && isActive == true] | order(name asc) [0...8] ${PRODUCT_CARD_PROJECTION},
    "categories": *[_type == "category"] | order(displayOrder asc) [0...12] ${CATEGORY_CARD_PROJECTION},
    "divisions": *[_type == "division"] | order(name asc) {
      _id, name, "slug": slug.current, tagline, "logo": logo.asset->url,
    },
    "latestPosts": *[_type == "blogPost"] | order(publishedAt desc) [0...3] {
      _id, title, "slug": slug.current, excerpt, publishedAt, "coverImage": coverImage.asset->url,
    },
    "productCount": count(*[_type == "product" && isActive == true]),
    "moleculeCount": count(*[_type == "molecule"]),
  }
`
