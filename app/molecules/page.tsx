import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import { sanityFetch } from '@/lib/sanity/fetch'
import { ALL_MOLECULES_QUERY } from '@/lib/sanity/queries'
import type { Molecule } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Molecules - Active Pharmaceutical Ingredients - McBrex Lifesciences',
  description:
    'Explore 383+ active pharmaceutical ingredients and molecules used in our WHO-GMP certified products.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/molecules' },
}

export const revalidate = 60

export default async function MoleculesPage() {
  let molecules: Molecule[] = []
  try {
    molecules = await sanityFetch<Molecule[]>({
      query: ALL_MOLECULES_QUERY,
      tags: ['molecule'],
    })
  } catch {
    molecules = []
  }

  return (
    <PageShell>
      <Breadcrumb items={[{ label: 'Molecules' }]} />
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
            <h1 style={{ color: '#FFF', marginBottom: 8, fontSize: 32 }}>Active Molecules</h1>
            <p style={{ color: '#AAA', margin: 0 }}>
              {molecules.length}+ pharmaceutical molecules across our product range
            </p>
          </div>

          <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
            {molecules.map((mol) => (
              <Link
                key={mol._id}
                href={`/molecules/${mol.slug}`}
                className="category-card"
                style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: 24 }}
              >
                <div className="category-card-icon">
                  <i className="fas fa-atom" style={{ fontSize: 28 }} />
                </div>
                <h3 style={{ marginBottom: 8 }}>{mol.name}</h3>
                <p style={{ fontSize: 13, color: '#666', marginBottom: 8 }}>
                  {mol.pharmacologicalClass || 'Active Pharmaceutical Ingredient'}
                </p>
                <div style={{ fontSize: 12, color: '#999' }}>
                  <strong style={{ color: '#D92323' }}>{mol.productCount || 0}</strong> Products
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
