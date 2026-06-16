import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import CategoryCard from '@/components/CategoryCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { ALL_CATEGORIES_QUERY } from '@/lib/sanity/queries'
import type { Category } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Categories - Therapeutic Categories - McBrex Lifesciences',
  description:
    'Browse our pharmaceutical products by therapeutic category — Cardio/Diabetic, Antibiotic, Gynaecology, Dermatology, and more.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/categories' },
}

export const revalidate = 60

export default async function CategoriesPage() {
  let categories: Category[] = []
  try {
    categories = await sanityFetch<Category[]>({
      query: ALL_CATEGORIES_QUERY,
      tags: ['category'],
    })
  } catch {
    categories = []
  }

  return (
    <PageShell>
      <Breadcrumb items={[{ label: 'Categories' }]} />
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
            <h1 style={{ color: '#FFF', marginBottom: 8, fontSize: 32 }}>Therapeutic Categories</h1>
            <p style={{ color: '#AAA', margin: 0 }}>
              Browse our pharmaceutical products by therapeutic category
            </p>
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
