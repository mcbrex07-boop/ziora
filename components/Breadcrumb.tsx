import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <section className="breadcrumb-section">
      <div className="container">
        <h1 className="breadcrumb-title">{items[items.length - 1]?.label}</h1>
        <div className="breadcrumb-nav">
          <Link href="/">Home</Link>
          {items.map((item, i) => (
            <span key={i}>
              <span> / </span>
              {item.href ? <Link href={item.href}>{item.label}</Link> : <span>{item.label}</span>}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
