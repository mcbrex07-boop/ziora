import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import DivisionCard from '@/components/DivisionCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { ALL_DIVISIONS_QUERY } from '@/lib/sanity/queries'
import type { Division } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Divisions - Our Pharma Divisions - McBrex Lifesciences',
  description:
    'Six specialized pharmaceutical divisions catering to diverse healthcare needs — Cardiwin, Gynox, Criticine, Optibrex, Curicine, and McBrex.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/divisions' },
}

export const revalidate = 60

export default async function DivisionsPage() {
  let divisions: Division[] = []
  try {
    divisions = await sanityFetch<Division[]>({
      query: ALL_DIVISIONS_QUERY,
      tags: ['division'],
    })
  } catch {
    divisions = []
  }

  return (
    <PageShell>
      <Breadcrumb items={[{ label: 'Divisions' }]} />
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
            <h1 style={{ color: '#FFF', marginBottom: 8, fontSize: 32 }}>Our Divisions</h1>
            <p style={{ color: '#AAA', margin: 0 }}>
              Six specialized divisions catering to diverse healthcare needs
            </p>
          </div>

          <div className="grid-3">
            {divisions.map((division) => (
              <DivisionCard key={division._id} division={division} />
            ))}
          </div>
        </div>
      </div>
    </PageShell>
  )
}
