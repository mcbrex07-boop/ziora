import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SafeImage from '@/components/SafeImage'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { DIVISION_BY_SLUG_QUERY, DIVISION_SLUGS_QUERY } from '@/lib/sanity/queries'
import { buildMetadata } from '@/lib/seo'
import type { Division } from '@/lib/sanity/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>({
      query: DIVISION_SLUGS_QUERY,
      tags: ['division'],
    })
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const division = await sanityFetch<Division>({
    query: DIVISION_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`division:${params.slug}`],
  })

  if (!division) return { title: 'Division Not Found' }

  return buildMetadata(division.seo, {
    title: `${division.name} - McBrex Lifesciences`,
    description: division.tagline || `${division.name} — WHO-GMP certified pharmaceutical division.`,
    path: `/divisions/${division.slug}`,
  })
}

export const revalidate = 60

export default async function DivisionPage({ params }: Props) {
  const division = await sanityFetch<Division>({
    query: DIVISION_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`division:${params.slug}`],
  })

  if (!division) notFound()

  // @ts-ignore
  const products: any[] = division.products || []
  // @ts-ignore
  const featuredProducts: any[] = division.featuredProducts || []

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: 'Divisions', href: '/divisions' },
          { label: division.name },
        ]}
      />
      <div className="page-content">
        <div className="container">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 20,
              marginBottom: 32,
            }}
          >
            <SafeImage
              src={division.logo || '/assets/logo.jpg'}
              alt={division.name}
              style={{ height: 80 }}
            />
            <div>
              <h1 style={{ marginBottom: 8, fontSize: 32 }}>{division.name}</h1>
              {division.tagline ? <p style={{ color: '#666' }}>{division.tagline}</p> : null}
            </div>
          </div>

          <div
            style={{
              background: '#F5F5F5',
              borderRadius: 12,
              padding: '16px 24px',
              marginBottom: 32,
              display: 'flex',
              gap: 32,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>Products</span>
              <p style={{ fontWeight: 700, color: '#D92323', fontSize: 24, margin: 0 }}>
                {division.statsProducts || 0}
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>Categories</span>
              <p style={{ fontWeight: 700, color: '#D92323', fontSize: 24, margin: 0 }}>
                {division.statsCategories || 0}
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>Molecules</span>
              <p style={{ fontWeight: 700, color: '#D92323', fontSize: 24, margin: 0 }}>
                {division.statsMolecules || 0}
              </p>
            </div>
          </div>

          {division.description ? (
            <div style={{ marginBottom: 32 }}>
              <p style={{ color: '#666', lineHeight: 1.7 }}>{division.description}</p>
            </div>
          ) : null}

          {featuredProducts.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Featured Products</h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {featuredProducts.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}

          {products.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>All Products</h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {products.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  )
}
