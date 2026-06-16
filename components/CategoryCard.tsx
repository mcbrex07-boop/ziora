import Link from 'next/link'
import type { Key } from 'react'
import type { Category } from '@/lib/sanity/types'

export default function CategoryCard({ category }: { category: Category; key?: Key }) {
  return (
    <Link
      href={`/categories/${category.slug}`}
      className="category-card"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit', padding: 32 }}
    >
      <div className="category-card-icon">
        <i className={category.icon || 'fas fa-flask'} style={{ fontSize: 28 }} />
      </div>
      <h3 style={{ marginBottom: 8 }}>{category.name}</h3>
      <p style={{ fontSize: 13, color: '#666', marginBottom: 12 }}>
        {category.description || ''}
      </p>
      <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#999' }}>
        <span>
          <strong style={{ color: '#D92323' }}>{category.productCount || 0}</strong> Products
        </span>
      </div>
    </Link>
  )
}
