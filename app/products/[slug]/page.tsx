import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { PRODUCT_BY_SLUG_QUERY, PRODUCT_SLUGS_QUERY } from '@/lib/sanity/queries'
import { buildMetadata } from '@/lib/seo'
import type { Product } from '@/lib/sanity/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>({
      query: PRODUCT_SLUGS_QUERY,
      tags: ['product'],
    })
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product = await sanityFetch<Product>({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`product:${params.slug}`],
  })

  if (!product) return { title: 'Product Not Found' }

  return buildMetadata(product.seo, {
    title: `${product.name} - McBrex Lifesciences`,
    description: `${product.name} — ${product.compositionText}. WHO-GMP certified pharmaceutical product.`,
    path: `/products/${product.slug}`,
  })
}

export const revalidate = 60

export default async function ProductPage({ params }: Props) {
  const product = await sanityFetch<Product>({
    query: PRODUCT_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`product:${params.slug}`],
  })

  if (!product) notFound()

  const divisionName = product.division?.name || 'McBrex Lifesciences'
  const categoryName = product.category?.name || ''

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: 'Products', href: '/products' },
          { label: categoryName, href: `/categories/${product.category?.slug}` },
          { label: product.name },
        ]}
      />
      <div className="page-content">
        <div className="container">
          <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', marginBottom: 40 }}>
            <div
              style={{
                flex: '1 1 300px',
                maxWidth: 400,
                background: '#F5F5F5',
                borderRadius: 12,
                padding: 40,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: 300,
              }}
            >
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                />
              ) : (
                <i className="fas fa-pills" style={{ fontSize: 80, color: '#D92323' }} />
              )}
            </div>
            <div style={{ flex: '2 1 400px' }}>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12, flexWrap: 'wrap' }}>
                <span
                  style={{
                    fontSize: 10,
                    padding: '2px 8px',
                    background: 'rgba(217,35,35,0.1)',
                    color: '#D92323',
                    borderRadius: 10,
                    fontWeight: 500,
                  }}
                >
                  {divisionName}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    padding: '2px 8px',
                    background: '#F5F5F5',
                    borderRadius: 10,
                    fontWeight: 500,
                  }}
                >
                  {product.dosageForm}
                </span>
              </div>
              <h1 style={{ fontSize: 32, marginBottom: 8 }}>{product.name}</h1>
              <p style={{ fontSize: 16, color: '#666', marginBottom: 16 }}>
                {product.compositionText}
              </p>
              {product.mrp ? (
                <div style={{ fontSize: 24, fontWeight: 700, color: '#D92323', marginBottom: 16 }}>
                  &#8377;{product.mrp}
                </div>
              ) : null}
              {product.packing ? (
                <p style={{ fontSize: 14, color: '#999', marginBottom: 8 }}>
                  <strong>Pack:</strong> {product.packing}
                </p>
              ) : null}
              {product.indications ? (
                <div style={{ marginBottom: 16 }}>
                  <h4 style={{ marginBottom: 4 }}>Indications</h4>
                  <p style={{ fontSize: 14, color: '#666' }}>{product.indications}</p>
                </div>
              ) : null}
              {product.storage ? (
                <p style={{ fontSize: 14, color: '#999' }}>
                  <strong>Storage:</strong> {product.storage}
                </p>
              ) : null}

              <div style={{ marginTop: 24, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#" className="btn btn-primary" data-enquiry>
                  Send Enquiry
                </a>
                <a href="https://wa.me/918264040991" className="btn btn-secondary" target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {product.molecules && product.molecules.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Active Molecules</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {product.molecules.map((mol) => (
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

          {product.relatedProducts && product.relatedProducts.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Related Products</h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {product.relatedProducts.map((p) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}

          {product.relatedBlogs && product.relatedBlogs.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Related Articles</h3>
              <div className="grid-3">
                {product.relatedBlogs.map((b) => (
                  <BlogCard key={b._id} post={b} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  )
}
