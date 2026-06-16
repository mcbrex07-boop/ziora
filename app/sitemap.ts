import { MetadataRoute } from 'next'
import { sanityFetch } from '@/lib/sanity/fetch'
import {
  PRODUCT_SLUGS_QUERY,
  MOLECULE_SLUGS_QUERY,
  DIVISION_SLUGS_QUERY,
  CATEGORY_SLUGS_QUERY,
  BLOG_SLUGS_QUERY,
} from '@/lib/sanity/queries'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://mcbrexlifesciences.com'

  const [productSlugs, moleculeSlugs, divisionSlugs, categorySlugs, blogSlugs] = await Promise.all([
    sanityFetch<{ slug: string }[]>({ query: PRODUCT_SLUGS_QUERY, tags: ['product'] }).catch(() => []),
    sanityFetch<{ slug: string }[]>({ query: MOLECULE_SLUGS_QUERY, tags: ['molecule'] }).catch(() => []),
    sanityFetch<{ slug: string }[]>({ query: DIVISION_SLUGS_QUERY, tags: ['division'] }).catch(() => []),
    sanityFetch<{ slug: string }[]>({ query: CATEGORY_SLUGS_QUERY, tags: ['category'] }).catch(() => []),
    sanityFetch<{ slug: string }[]>({ query: BLOG_SLUGS_QUERY, tags: ['blogPost'] }).catch(() => []),
  ])

  const staticRoutes = [
    '',
    '/about',
    '/products',
    '/categories',
    '/molecules',
    '/divisions',
    '/blog',
    '/contact',
    '/career',
    '/faq',
    '/customer-reviews',
    '/quality',
    '/social-responsibility',
    '/why-choose-us',
    '/board-of-directors',
    '/landing-page',
    '/apply-job',
    '/privacy-policy',
    '/terms-and-conditions',
    '/state-wise-blog',
    '/district-wise-blog',
  ]

  const routes: MetadataRoute.Sitemap = [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1 : 0.7,
    })),
    ...productSlugs.map((s) => ({
      url: `${baseUrl}/products/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...moleculeSlugs.map((s) => ({
      url: `${baseUrl}/molecules/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...divisionSlugs.map((s) => ({
      url: `${baseUrl}/divisions/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...categorySlugs.map((s) => ({
      url: `${baseUrl}/categories/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...blogSlugs.map((s) => ({
      url: `${baseUrl}/blogs/${s.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]

  return routes
}
