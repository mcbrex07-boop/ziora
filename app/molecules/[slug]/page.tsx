import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { MOLECULE_BY_SLUG_QUERY, MOLECULE_SLUGS_QUERY } from '@/lib/sanity/queries'
import { buildMetadata } from '@/lib/seo'
import type { Molecule } from '@/lib/sanity/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>({
      query: MOLECULE_SLUGS_QUERY,
      tags: ['molecule'],
    })
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const molecule = await sanityFetch<Molecule>({
    query: MOLECULE_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`molecule:${params.slug}`],
  })

  if (!molecule) return { title: 'Molecule Not Found' }

  return buildMetadata(molecule.seo, {
    title: `${molecule.name} - Active Pharmaceutical Ingredient - McBrex Lifesciences`,
    description: `${molecule.name} — ${molecule.pharmacologicalClass || 'Active pharmaceutical ingredient'}. WHO-GMP certified products.`,
    path: `/molecules/${molecule.slug}`,
  })
}

export const revalidate = 60

export default async function MoleculePage({ params }: Props) {
  const molecule = await sanityFetch<Molecule>({
    query: MOLECULE_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`molecule:${params.slug}`],
  })

  if (!molecule) notFound()

  // @ts-ignore — GROQ expands additional fields
  const products: any[] = molecule.products || []
  // @ts-ignore
  const relatedCategories: any[] = molecule.relatedCategories || []
  // @ts-ignore
  const divisions: any[] = molecule.divisions || []
  // @ts-ignore
  const relatedMolecules: any[] = molecule.relatedMolecules || []
  // @ts-ignore
  const relatedBlogs: any[] = molecule.relatedBlogs || []

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: 'Molecules', href: '/molecules' },
          { label: molecule.name },
        ]}
      />
      <div className="page-content">
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 32 }}>
            <div className="icon-box-circle" style={{ margin: 0, width: 80, height: 80 }}>
              <i className="fas fa-atom" style={{ fontSize: 36 }} />
            </div>
            <div>
              <h1 style={{ marginBottom: 8, fontSize: 32 }}>{molecule.name}</h1>
              {molecule.pharmacologicalClass ? (
                <p style={{ color: '#666' }}>Class: {molecule.pharmacologicalClass}</p>
              ) : null}
            </div>
          </div>

          {molecule.description ? (
            <div style={{ marginBottom: 32 }}>
              <h3>Description</h3>
              <p style={{ color: '#666', lineHeight: 1.7 }}>{molecule.description}</p>
            </div>
          ) : null}

          {molecule.mechanismOfAction ? (
            <div style={{ marginBottom: 32 }}>
              <h3>Mechanism of Action</h3>
              <p style={{ color: '#666', lineHeight: 1.7 }}>{molecule.mechanismOfAction}</p>
            </div>
          ) : null}

          {molecule.therapeuticUses && molecule.therapeuticUses.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3>Therapeutic Uses</h3>
              <ul style={{ paddingLeft: 20, listStyle: 'disc', color: '#666' }}>
                {molecule.therapeuticUses.map((u, i) => (
                  <li key={i} style={{ marginBottom: 6 }}>{u}</li>
                ))}
              </ul>
            </div>
          )}

          {relatedCategories.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Related Categories</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {relatedCategories.map((cat: any) => (
                  <Link
                    key={cat._id}
                    href={`/categories/${cat.slug}`}
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(217,35,35,0.1)',
                      borderRadius: 20,
                      fontSize: 13,
                      textDecoration: 'none',
                      color: '#D92323',
                    }}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {divisions.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Available In Divisions</h3>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {divisions.map((div: any) => (
                  <Link
                    key={div.slug}
                    href={`/divisions/${div.slug}`}
                    style={{
                      padding: '10px 20px',
                      background: '#F5F5F5',
                      borderRadius: 8,
                      fontSize: 14,
                      textDecoration: 'none',
                      color: '#1A1A1A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 8,
                    }}
                  >
                    {div.logo && (
                      <img src={div.logo} alt={div.name} style={{ height: 24 }} />
                    )}
                    {div.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {products.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Products Containing {molecule.name}</h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {products.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}

          {relatedMolecules.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Related Molecules</h3>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {relatedMolecules.map((mol: any) => (
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

          {relatedBlogs.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Related Articles</h3>
              <div className="grid-3">
                {relatedBlogs.map((b: any) => (
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
