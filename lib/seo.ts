import type { Metadata } from 'next'
import type { SeoFields } from '@/lib/sanity/types'

export function buildMetadata(seo: SeoFields | undefined, defaults: {
  title: string
  description: string
  path: string
}): Metadata {
  const title = seo?.metaTitle || defaults.title
  const description = seo?.metaDescription || defaults.description
  const canonical = seo?.canonicalUrl || `https://mcbrexlifesciences.com${defaults.path}`
  const ogImage = seo?.ogImage || seo?.twitterImage || '/assets/logo.jpg'

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: seo?.ogTitle || title,
      description: seo?.ogDescription || description,
      url: canonical,
      siteName: 'McBrex Lifesciences',
      images: ogImage ? [{ url: ogImage }] : undefined,
      type: 'website',
      locale: 'en_IN',
    },
    twitter: {
      card: seo?.twitterCard || 'summary_large_image',
      title: seo?.twitterTitle || title,
      description: seo?.twitterDescription || description,
      images: seo?.twitterImage ? [seo.twitterImage] : undefined,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export function jsonLdScript(jsonLd: Record<string, unknown>) {
  return {
    __html: JSON.stringify(jsonLd),
  }
}
