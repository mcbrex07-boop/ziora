import Link from 'next/link'
import type { Key } from 'react'
import type { BlogPost } from '@/lib/sanity/types'

export default function BlogCard({ post }: { post: BlogPost; key?: Key }) {
  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    : ''

  return (
    <div className="blog-card">
      <div className="blog-card-img">
        {post.coverImage ? (
          <img src={post.coverImage} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <i className="fas fa-newspaper" style={{ fontSize: 48 }} />
        )}
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          {date} | {post.blogCategory || 'General'}
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt || ''}</p>
        <Link href={`/blogs/${post.slug}`}>Read More</Link>
      </div>
    </div>
  )
}
