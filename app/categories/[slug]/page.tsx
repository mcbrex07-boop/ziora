import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { CATEGORY_BY_SLUG_QUERY, CATEGORY_SLUGS_QUERY } from '@/lib/sanity/queries'
import { buildMetadata } from '@/lib/seo'
import type { Category } from '@/lib/sanity/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>({
      query: CATEGORY_SLUGS_QUERY,
      tags: ['category'],
    })
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = await sanityFetch<Category>({
    query: CATEGORY_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`category:${params.slug}`],
  })

  if (!category) return { title: 'Category Not Found' }

  return buildMetadata(category.seo, {
    title: `${category.name} - Pharmaceutical Products - McBrex Lifesciences`,
    description: category.description || `${category.name} — WHO-GMP certified pharmaceutical products.`,
    path: `/categories/${category.slug}`,
  })
}

export const revalidate = 60

export default async function CategoryPage({ params }: Props) {
  const category = await sanityFetch<Category>({
    query: CATEGORY_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`category:${params.slug}`],
  })

  if (!category) notFound()

  // @ts-ignore
  const products: any[] = category.products || []
  // @ts-ignore
  const molecules: any[] = category.molecules || []

  const divisions = Array.from(new Set(products.map((p: any) => p.division?.name).filter(Boolean)))

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: 'Categories', href: '/categories' },
          { label: category.name },
        ]}
      />
      <div className="page-content">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <div className="icon-box-circle" style={{ margin: 0, width: 80, height: 80 }}>
              <i className={category.icon || 'fas fa-flask'} style={{ fontSize: 36 }} />
            </div>
            <div>
              <h1 style={{ marginBottom: 8, fontSize: 32 }}>{category.name}</h1>
              <p style={{ color: '#666' }}>{category.description || ''}</p>
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
                {products.length}
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>Molecules</span>
              <p style={{ fontWeight: 700, color: '#D92323', fontSize: 24, margin: 0 }}>
                {molecules.length}
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>Divisions</span>
              <p style={{ fontWeight: 700, color: '#D92323', fontSize: 24, margin: 0 }}>
                {divisions.length}
              </p>
            </div>
          </div>

          {molecules.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Molecules in this Category</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {molecules.map((mol: any) => (
                  <Link
                    key={mol._id}
                    href={`/molecules/${mol.slug}`}
                    style={{
                      padding: '8px 16px',
                      background: '#F5F5F5',
                      borderRadius: 20,
                      fontSize: 13,
                      textDecoration: 'none',
                      color: '#1A1A1A',
                    }}
                  >
                    {mol.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {products.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Products</h3>
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
