import Link from 'next/link'
import type { Key } from 'react'
import type { Division } from '@/lib/sanity/types'
import SafeImage from './SafeImage'

export default function DivisionCard({ division }: { division: Division; key?: Key }) {
  return (
    <Link
      href={`/divisions/${division.slug}`}
      className="division-card"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit' }}
    >
      <SafeImage
        src={division.logo || '/assets/logo.jpg'}
        alt={division.name}
        style={{ height: 60, margin: '0 auto 12px' }}
      />
      <h3>{division.name}</h3>
      <p style={{ fontSize: 13, color: '#666' }}>
        {division.statsProducts || 0} products across {division.statsCategories || 0} categories
      </p>
    </Link>
  )
}
