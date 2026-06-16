'use client'

import { useState } from 'react'
import type { ChangeEvent } from 'react'
import ProductCard from './ProductCard'
import type { Product } from '@/lib/sanity/types'

export default function ProductListFilter({ products }: { products: Product[] }) {
  const [division, setDivision] = useState('')
  const [category, setCategory] = useState('')
  const [search, setSearch] = useState('')

  const divisions = Array.from(new Set(products.map((p) => p.division?.name).filter(Boolean))) as string[]
  const categories = Array.from(new Set(products.map((p) => p.category?.name).filter(Boolean))) as string[]

  const filtered = products.filter((p) => {
    const matchDivision = !division || p.division?.name === division
    const matchCategory = !category || p.category?.name === category
    const matchSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.compositionText.toLowerCase().includes(search.toLowerCase())
    return matchDivision && matchCategory && matchSearch
  })

  return (
    <div>
      <div
        style={{
          background: '#F5F5F5',
          borderRadius: 12,
          padding: 20,
          marginBottom: 24,
        }}
      >
        <h4 style={{ marginBottom: 12 }}>Filter Products</h4>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16 }}>
          <div>
            <label style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', fontWeight: 600 }}>
              Division
            </label>
            <select
              value={division}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setDivision(e.target.value)}
              style={{ width: '100%', padding: 10, border: '1px solid #E0E0E0', borderRadius: 6, marginTop: 6 }}
            >
              <option value="">All Divisions</option>
              {divisions.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', fontWeight: 600 }}>
              Category
            </label>
            <select
              value={category}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => setCategory(e.target.value)}
              style={{ width: '100%', padding: 10, border: '1px solid #E0E0E0', borderRadius: 6, marginTop: 6 }}
            >
              <option value="">All Categories</option>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label style={{ fontSize: 12, color: '#999', textTransform: 'uppercase', fontWeight: 600 }}>
              Search
            </label>
            <input
              type="text"
              value={search}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
              placeholder="Search products..."
              style={{ width: '100%', padding: 10, border: '1px solid #E0E0E0', borderRadius: 6, marginTop: 6 }}
            />
          </div>
        </div>
      </div>

      <div className="grid-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {filtered.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p style={{ textAlign: 'center', color: '#999', padding: 40 }}>No products found.</p>
      )}
    </div>
  )
}
