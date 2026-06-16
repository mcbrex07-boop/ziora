import type { Metadata } from 'next'
import PageShell from '@/components/PageShell'
import Breadcrumb from '@/components/Breadcrumb'
import BlogCard from '@/components/BlogCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { ALL_BLOG_POSTS_QUERY, ALL_BLOG_POSTS_COUNT_QUERY } from '@/lib/sanity/queries'
import type { BlogPost } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Blog - Pharma News & Insights - McBrex Lifesciences',
  description:
    'Latest updates, pharma industry insights, WHO-GMP news, and PCD franchise guides from McBrex Lifesciences.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/blog' },
}

export const revalidate = 60

export default async function BlogPage() {
  let count = 0
  let posts: BlogPost[] = []
  try {
    count = await sanityFetch<number>({
      query: ALL_BLOG_POSTS_COUNT_QUERY,
      tags: ['blogPost'],
    })
    posts = await sanityFetch<BlogPost[]>({
      query: ALL_BLOG_POSTS_QUERY,
      params: { from: 0, to: 100 },
      tags: ['blogPost'],
    })
  } catch {
    count = 0
    posts = []
  }

  return (
    <PageShell>
      <Breadcrumb items={[{ label: 'Blog' }]} />
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
            <h1 style={{ color: '#FFF', marginBottom: 8, fontSize: 32 }}>Latest Updates</h1>
            <p style={{ color: '#AAA', margin: 0 }}>
              {count} articles covering pharma industry, products, and franchise opportunities
            </p>
          </div>

          <div className="grid-3">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>

          {posts.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999', padding: 40 }}>
              No blog posts yet. Check back soon!
            </p>
          )}
        </div>
      </div>
    </PageShell>
  )
}
