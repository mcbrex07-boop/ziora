# McBrex Lifesciences — Next.js CMS Migration Report

## Executive Summary

This migration replaces **hundreds of hardcoded page files** with a **dynamic, CMS-driven architecture** powered by Sanity.io. The project now uses:

- **Dynamic routes** for products, molecules, divisions, categories, and blog posts
- **Reusable React components** for layout, navigation, cards, and filtering
- **Full SEO metadata generation** with Open Graph, Twitter cards, and canonical URLs
- **ISR (Incremental Static Regeneration)** with 60-second revalidation
- **Automatic sitemap.xml and robots.txt generation**
- **Graceful error handling** so the codebase builds even before the CMS is connected

**Build result:** ✅ `next build` succeeded with **0 TypeScript errors** and **64 prerendered pages**.

---

## Files Created

### Sanity Data Layer (`lib/sanity/`)
| File | Purpose |
|------|---------|
| `lib/sanity/client.ts` | Sanity client + preview client configuration |
| `lib/sanity/fetch.ts` | `sanityFetch()` helper with ISR caching + `sanityFetchPreview()` |
| `lib/sanity/queries.ts` | All GROQ queries (products, molecules, divisions, categories, blogs, homepage) |
| `lib/sanity/types.ts` | Full TypeScript interfaces for all CMS documents |
| `lib/sanity/utils.ts` | Image URL builder helper (`urlFor()`) |

### SEO Utilities
| File | Purpose |
|------|---------|
| `lib/seo.ts` | `buildMetadata()` helper — generates title, description, canonical, OG, Twitter metadata from Sanity SEO fields |

### Reusable Components (`components/`)
| File | Purpose |
|------|---------|
| `components/PageShell.tsx` | Wrapper that includes TopBar, Header, Footer, BottomBar, EnquiryModal, and scripts |
| `components/TopBar.tsx` | Phone / email top bar |
| `components/Header.tsx` | Desktop navigation + mobile menu (dropdowns preserved) |
| `components/Footer.tsx` | Site footer with links, divisions, contact info |
| `components/BottomBar.tsx` | Mobile sticky bottom bar (Call / WhatsApp / Enquiry) |
| `components/EnquiryModal.tsx` | Enquiry form modal (client component) |
| `components/Breadcrumb.tsx` | Breadcrumb navigation with schema |
| `components/ProductCard.tsx` | Product card with image, composition, price, division badge |
| `components/CategoryCard.tsx` | Category card with icon, description, product count |
| `components/DivisionCard.tsx` | Division card with logo, stats |
| `components/BlogCard.tsx` | Blog post card with cover image, date, excerpt |
| `components/ProductListFilter.tsx` | Client-side filter by division, category, and search text |

### Dynamic Routes
| Route | File | Features |
|-------|------|----------|
| `/products/[slug]` | `app/products/[slug]/page.tsx` | `generateStaticParams`, `generateMetadata`, product detail, related products, related blogs, molecule links |
| `/molecules/[slug]` | `app/molecules/[slug]/page.tsx` | `generateStaticParams`, `generateMetadata`, molecule detail, products containing it, related categories, divisions, related molecules, blogs |
| `/divisions/[slug]` | `app/divisions/[slug]/page.tsx` | `generateStaticParams`, `generateMetadata`, division detail, featured products, all products |
| `/categories/[slug]` | `app/categories/[slug]/page.tsx` | `generateStaticParams`, `generateMetadata`, category detail, molecule links, product grid |
| `/blogs/[slug]` | `app/blogs/[slug]/page.tsx` | `generateStaticParams`, `generateMetadata`, Portable Text body, related products, related molecules, more posts |

### Listing Pages
| Route | File | Features |
|-------|------|----------|
| `/products` | `app/products/page.tsx` | Product count hero, client-side filter grid |
| `/molecules` | `app/molecules/page.tsx` | Molecule grid with product counts |
| `/divisions` | `app/divisions/page.tsx` | Division cards grid |
| `/categories` | `app/categories/page.tsx` | Category cards grid |
| `/blog` | `app/blog/page.tsx` | Blog post cards grid |

### CMS-Driven Homepage
| Route | File | Features |
|-------|------|----------|
| `/` | `app/page.tsx` | Hero, stats, welcome, why choose, divisions, categories, featured products, PCD franchise CTA, quality, testimonials, blog preview, contact CTA — all fed by CMS |

### SEO & Crawlers
| Route | File | Features |
|-------|------|----------|
| `/sitemap.xml` | `app/sitemap.ts` | Static + dynamic routes (products, molecules, divisions, categories, blogs) with `lastModified`, `changeFrequency`, `priority` |
| `/robots.txt` | `app/robots.ts` | Allow all, disallow `/api/` and `/admin/`, link to sitemap |

### Updated Root Files
| File | Changes |
|------|---------|
| `app/layout.tsx` | Metadata template (`%s - McBrex Lifesciences`), font preconnect, Font Awesome, main.css |
| `next.config.js` | `images.unoptimized: true`, `trailingSlash: false` |
| `package.json` | Added `next-sanity`, `sanity`, `@sanity/image-url`, `@portabletext/react` |
| `next-env.d.ts` | Standard Next.js TypeScript declarations |

---

## Files Modified

- `app/layout.tsx` — Replaced hardcoded metadata with dynamic metadata template + added preconnects
- `app/page.tsx` — Replaced 33,000-line HTML string with fully CMS-driven JSX homepage
- `app/products/page.tsx` — Replaced hardcoded HTML with filterable product grid
- `app/molecules/page.tsx` — Replaced hardcoded HTML with molecule grid
- `app/divisions/page.tsx` — Replaced hardcoded HTML with division cards
- `app/categories/page.tsx` — Replaced hardcoded HTML with category cards
- `app/blog/page.tsx` — Replaced hardcoded HTML with blog cards
- `next.config.js` — Added `images.unoptimized` and `trailingSlash` for static export compatibility
- `package.json` — Added Sanity ecosystem dependencies

---

## Files Removed

**Dynamic route hardcoded pages (~500+ files removed):**
- `app/products/[~500 individual product slugs]/page.tsx` → replaced by `app/products/[slug]/page.tsx`
- `app/molecules/[~300 individual molecule slugs]/page.tsx` → replaced by `app/molecules/[slug]/page.tsx`
- `app/divisions/[6 individual division slugs]/page.tsx` → replaced by `app/divisions/[slug]/page.tsx`
- `app/categories/[15 individual category slugs]/page.tsx` → replaced by `app/categories/[slug]/page.tsx`
- `app/blog-detail/page.tsx` → replaced by `app/blogs/[slug]/page.tsx`

All static pages remain intact:
- `/about`, `/contact`, `/career`, `/faq`, `/apply-job`, `/board-of-directors`, `/landing-page`, `/quality`, `/social-responsibility`, `/why-choose-us`, `/customer-reviews`, `/privacy-policy`, `/terms-and-conditions`, `/state-wise-blog`, `/district-wise-blog`, `/therapeutics/*`

---

## Remaining Manual Tasks

1. **Connect Sanity Project**
   - Create a `.env.local` file in the project root:
     ```
     NEXT_PUBLIC_SANITY_PROJECT_ID=your-real-project-id
     NEXT_PUBLIC_SANITY_DATASET=production
     NEXT_PUBLIC_SANITY_API_VERSION=2024-06-15
     SANITY_API_READ_TOKEN=your-preview-token
     ```
   - Replace `'your-project-id'` in `lib/sanity/client.ts` with your actual Sanity project ID.

2. **Populate CMS Content**
   - Upload the provided Sanity schema (`schemaTypes/`) to your Sanity Studio.
   - Import product, molecule, division, category, and blog data into Sanity.
   - Once data exists, `generateStaticParams` will automatically discover slugs and prerender pages at build time.

3. **Enable Google Search Console**
   - Replace `your-google-verification-code` in `app/layout.tsx` with your real verification code.

4. **Product Images**
   - Upload product images to Sanity. The `ProductCard` and product detail pages will automatically render them; if missing, they fall back to the pills icon.

5. **Optional: Enable Draft Mode / Preview**
   - The `previewClient` and `sanityFetchPreview` are already wired. Add a draft-mode API route if you want live preview.

6. **Optional: Add Form Backend**
   - The `EnquiryModal` form is prepared in code but has no `onSubmit` handler. Wire it to your CRM (e.g., HubSpot, Zoho, or a custom API endpoint) when ready.

7. **Optional: Pagination**
   - The product and blog listing pages currently fetch up to 1000 items. For 10,000+ products, add server-side pagination or infinite scroll using the `$from` / `$to` GROQ parameters.

---

## Architecture Highlights

### Scalability
- **No new source files** are created when you add products, molecules, categories, or blog posts. All content is served through the 5 dynamic route templates.
- GROQ queries use `isActive == true` filters so you can unpublish content without deleting it.
- `generateStaticParams` is wrapped in `try/catch` so builds never fail because of missing CMS data.

### SEO
- Every dynamic page supports:
  - `metaTitle`, `metaDescription`, `canonicalUrl`, `ogImage`, `ogTitle`, `ogDescription`, `twitterCard`, `twitterImage`, `structuredData`
- If CMS SEO fields are empty, sensible defaults are generated from the document title and description.
- `sitemap.xml` automatically includes all dynamic slugs.

### Performance
- `next: { revalidate: 60 }` on all `sanityFetch` calls enables ISR — pages revalidate in the background every 60 seconds.
- `generateStaticParams` prerenders the most important pages at build time; new CMS entries are available on the next request (or next ISR cycle).
- Product listing filter runs entirely client-side for instant search/division/category filtering.

### Design Preservation
- All CSS class names from the original `main.css` are preserved (`hero`, `section-padding`, `grid-3`, `grid-4`, `card`, `icon-box`, `product-card`, `category-card`, `division-card`, `review-card`, `breadcrumb-section`, `footer`, `top-bar`, `modal`, etc.).
- The visual output should be identical to the current site once CMS content is populated.

---

## Build Verification

```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Generating static pages (64/64)
✓ Finalizing page optimization
✓ Collecting build traces
```

No TypeScript errors. No unresolved imports. All routes prerendered correctly.
