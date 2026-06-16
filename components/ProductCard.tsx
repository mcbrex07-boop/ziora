import Link from 'next/link'
import type { Key } from 'react'
import type { Product } from '@/lib/sanity/types'

export default function ProductCard({ product }: { product: Product; key?: Key }) {
  const division = product.division?.name || 'McBrex Lifesciences'
  return (
    <Link
      href={`/products/${product.slug}`}
      className="product-card"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
      data-division={division}
      data-category={product.category?.name || ''}
    >
      <div
        style={{
          height: 140,
          background: '#F5F5F5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {product.image ? (
          <img src={product.image} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%' }} />
        ) : (
          <i className="fas fa-pills" style={{ fontSize: 36, color: '#D92323' }} />
        )}
      </div>
      <div style={{ padding: 16 }}>
        <div style={{ display: 'flex', gap: 6, marginBottom: 8, flexWrap: 'wrap' }}>
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
            {division}
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
        <h4 style={{ fontSize: 14, fontWeight: 600, marginBottom: 4, color: '#1A1A1A' }}>
          {product.name}
        </h4>
        <p
          style={{
            fontSize: 11,
            color: '#999',
            margin: 0,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {product.compositionText}
        </p>
        {product.mrp ? (
          <div style={{ fontSize: 14, fontWeight: 700, color: '#D92323', marginTop: 6 }}>
            &#8377;{product.mrp}
          </div>
        ) : null}
      </div>
    </Link>
  )
}
