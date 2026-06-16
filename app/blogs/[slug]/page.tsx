import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import ProductCard from '@/components/ProductCard'
import BlogCard from '@/components/BlogCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { BLOG_POST_BY_SLUG_QUERY, BLOG_SLUGS_QUERY } from '@/lib/sanity/queries'
import { buildMetadata } from '@/lib/seo'
import type { BlogPost } from '@/lib/sanity/types'

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  try {
    const slugs = await sanityFetch<{ slug: string }[]>({
      query: BLOG_SLUGS_QUERY,
      tags: ['blogPost'],
    })
    return slugs.map((s) => ({ slug: s.slug }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await sanityFetch<BlogPost>({
    query: BLOG_POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`blog:${params.slug}`],
  })

  if (!post) return { title: 'Blog Post Not Found' }

  return buildMetadata(post.seo, {
    title: `${post.title} - McBrex Lifesciences Blog`,
    description: post.excerpt || `${post.title} — Read more on McBrex Lifesciences blog.`,
    path: `/blogs/${post.slug}`,
  })
}

export const revalidate = 60

export default async function BlogPostPage({ params }: Props) {
  const post = await sanityFetch<BlogPost>({
    query: BLOG_POST_BY_SLUG_QUERY,
    params: { slug: params.slug },
    tags: [`blog:${params.slug}`],
  })

  if (!post) notFound()

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : ''

  // @ts-ignore
  const relatedProducts: any[] = post.relatedProducts || []
  // @ts-ignore
  const categoryProducts: any = post.categoryProducts || null
  // @ts-ignore
  const relatedMolecules: any[] = post.relatedMolecules || []
  // @ts-ignore
  const morePosts: any[] = post.morePosts || []

  return (
    <PageShell>
      <Breadcrumb
        items={[
          { label: 'Blog', href: '/blog' },
          { label: post.title },
        ]}
      />
      <div className="page-content">
        <div className="container">
          <div style={{ maxWidth: 800, margin: '0 auto' }}>
            {post.coverImage && (
              <div style={{ borderRadius: 12, overflow: 'hidden', marginBottom: 24 }}>
                <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: 'auto' }} />
              </div>
            )}
            <div style={{ marginBottom: 16 }}>
              <span style={{ fontSize: 12, color: '#999', textTransform: 'uppercase' }}>
                {post.blogCategory || 'General'}
              </span>
            </div>
            <h1 style={{ fontSize: 32, marginBottom: 12 }}>{post.title}</h1>
            <div style={{ fontSize: 14, color: '#999', marginBottom: 24 }}>
              {date} {post.author ? `| By ${post.author}` : ''}
            </div>

            <div style={{ lineHeight: 1.8, color: '#333', fontSize: 16 }}>
              {post.body ? <PortableText value={post.body} /> : <p>{post.excerpt}</p>}
            </div>

            {post.tags && post.tags.length > 0 && (
              <div style={{ marginTop: 32, marginBottom: 32 }}>
                <h4 style={{ marginBottom: 8 }}>Tags</h4>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        padding: '4px 12px',
                        background: '#F5F5F5',
                        borderRadius: 12,
                        fontSize: 12,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {relatedProducts.length > 0 && (
            <div style={{ marginTop: 40, marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>Related Products</h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {relatedProducts.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}

          {categoryProducts?.products && categoryProducts.products.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>
                More from {categoryProducts.name}
              </h3>
              <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                {categoryProducts.products.map((p: any) => (
                  <ProductCard key={p._id} product={p} />
                ))}
              </div>
            </div>
          )}

          {relatedMolecules.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 12 }}>Molecules Mentioned</h3>
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

          {morePosts.length > 0 && (
            <div style={{ marginBottom: 32 }}>
              <h3 style={{ marginBottom: 16 }}>More Articles</h3>
              <div className="grid-3">
                {morePosts.map((b: any) => (
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
