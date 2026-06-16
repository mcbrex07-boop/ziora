import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductListFilter from '@/components/ProductListFilter'
import { sanityFetch } from '@/lib/sanity/fetch'
import { ALL_PRODUCTS_QUERY, ALL_PRODUCTS_COUNT_QUERY } from '@/lib/sanity/queries'
import type { Product } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Products - All Pharmaceutical Products - McBrex Lifesciences',
  description:
    'Browse 552+ WHO-GMP certified pharmaceutical products across 6 divisions. Tablets, capsules, syrups, injectables, and more.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/products' },
}

export const revalidate = 60

export default async function ProductsPage() {
  let count = 0
  let products: Product[] = []
  try {
    count = await sanityFetch<number>({
      query: ALL_PRODUCTS_COUNT_QUERY,
      tags: ['product'],
    })
    products = await sanityFetch<Product[]>({
      query: ALL_PRODUCTS_QUERY,
      params: { from: 0, to: 1000 },
      tags: ['product'],
    })
  } catch {
    count = 0
    products = []
  }

  return (
    <PageShell>
      <Breadcrumb items={[{ label: 'Products' }]} />
      <div className="page-content">
        <div className="container">
          <div
            style={{
              background: 'linear-gradient(135deg, #1A1A1A, #333)',
              borderRadius: 12,
              padding: 32,
              marginBottom: 32,
              textAlign: 'center',
            }}
          >
            <h1 style={{ color: '#FFF', marginBottom: 8, fontSize: 32 }}>Our Products</h1>
            <p style={{ color: '#AAA', margin: 0 }}>
              {count}+ WHO-GMP certified pharmaceutical products across 6 divisions
            </p>
          </div>
          <ProductListFilter products={products} />
        </div>
      </div>
    </PageShell>
  )
}
