import type { Metadata } from 'next'
import Link from 'next/link'
import PageShell from '@/components/PageShell'
import ProductCard from '@/components/ProductCard'
import CategoryCard from '@/components/CategoryCard'
import DivisionCard from '@/components/DivisionCard'
import BlogCard from '@/components/BlogCard'
import { sanityFetch } from '@/lib/sanity/fetch'
import { HOMEPAGE_QUERY } from '@/lib/sanity/queries'
import type { HomePageData } from '@/lib/sanity/types'

export const metadata: Metadata = {
  title: 'Home - McBrex Lifesciences - WHO-GMP Certified Pharma Products',
  description:
    'McBrex Lifesciences - 552+ WHO-GMP certified pharmaceutical products. ISO 9001:2015 certified since 2018. PCD Pharma Franchise opportunities across India.',
  alternates: { canonical: 'https://mcbrexlifesciences.com/' },
  openGraph: {
    title: 'McBrex Lifesciences',
    description: '552+ WHO-GMP certified pharmaceutical products. ISO 9001:2015 certified.',
    url: 'https://mcbrexlifesciences.com',
    siteName: 'McBrex Lifesciences',
    type: 'website',
    locale: 'en_IN',
  },
}

export const revalidate = 60

export default async function HomePage() {
  let data: HomePageData = {}
  try {
    data = await sanityFetch<HomePageData>({
      query: HOMEPAGE_QUERY,
      tags: ['homepage', 'product', 'category', 'division', 'blogPost'],
    })
  } catch {
    data = {}
  }

  const featuredProducts = data.featuredProducts || []
  const categories = data.categories || []
  const divisions = data.divisions || []
  const latestPosts = data.latestPosts || []
  const productCount = data.productCount || 552
  const moleculeCount = data.moleculeCount || 383

  return (
    <PageShell>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-tag">Welcome to</p>
            <h1 className="hero-title">Mcbrex Lifesciences</h1>
            <p className="hero-desc">
              Your trusted partner in pharmaceuticals since 2018. We deliver {productCount}+ WHO-GMP
              certified products across 6 divisions, 17 therapeutic categories, and {moleculeCount} active
              molecules. ISO 9001:2015 certified.
            </p>
            <div className="hero-buttons">
              <Link href="/products" className="btn btn-primary">
                Explore {productCount}+ Products
              </Link>
              <Link href="/contact" className="btn btn-secondary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div
          className="hero-bg"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=800')`,
          }}
        />
      </section>

      {/* Stats */}
      <section className="stat-section bg-black">
        <div className="container">
          <div className="stat-grid">
            <div className="stat-item">
              <div className="stat-number" data-count={productCount} data-suffix="+">
                {productCount}+
              </div>
              <div className="stat-label">WHO GMP Certified Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count={6} data-suffix="+">
                6+
              </div>
              <div className="stat-label">Divisions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count={moleculeCount} data-suffix="">
                {moleculeCount}
              </div>
              <div className="stat-label">Active Molecules</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count={17} data-suffix="">
                17
              </div>
              <div className="stat-label">Therapeutic Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center">
            <p style={{ fontSize: 16, color: '#1A1A1A', marginBottom: 8 }}>Welcome To</p>
            <h2 className="section-title" style={{ marginBottom: 8 }}>
              McBrex Lifesciences
            </h2>
            <p style={{ fontSize: 18, color: '#1A1A1A', marginBottom: 24 }}>(Trusted Since 2018)</p>
            <p className="section-subtitle">
              At <strong>McBrex Lifesciences</strong>, we are committed to advancing healthcare by delivering{' '}
              <strong>premium quality pharmaceutical products</strong>. We have emerged as a{' '}
              <strong>leading pharmaceutical trading company in India</strong> with {productCount}+ WHO-GMP
              certified products across 6 divisions and 17 therapeutic categories. Our products are backed by{' '}
              <strong>ISO 9001:2015 certification</strong> and <strong>WHO-GMP compliance</strong>.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 16,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 24,
              }}
            >
              <span
                style={{
                  padding: '8px 20px',
                  background: 'rgba(217,35,35,0.1)',
                  color: '#D92323',
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-certificate" style={{ marginRight: 6 }} />
                ISO & WHO-GMP Certified
              </span>
              <span
                style={{
                  padding: '8px 20px',
                  background: 'rgba(217,35,35,0.1)',
                  color: '#D92323',
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-award" style={{ marginRight: 6 }} />
                {productCount}+ Products
              </span>
              <span
                style={{
                  padding: '8px 20px',
                  background: 'rgba(217,35,35,0.1)',
                  color: '#D92323',
                  borderRadius: 20,
                  fontSize: 14,
                  fontWeight: 500,
                }}
              >
                <i className="fas fa-flask" style={{ marginRight: 6 }} />
                {moleculeCount} Molecules
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Why Choose McBrex Lifesciences?</h2>
          <p className="section-subtitle">
            We are committed to delivering excellence in every aspect of our pharmaceutical business.
          </p>
          <div className="grid-5" style={{ gridTemplateColumns: 'repeat(5, 1fr)' }}>
            <div className="card icon-box">
              <div className="icon-box-circle">
                <i className="fas fa-shield-alt" />
              </div>
              <h3>ISO & WHO-GMP Certified</h3>
              <p>All products meet international quality standards.</p>
            </div>
            <div className="card icon-box">
              <div className="icon-box-circle">
                <i className="fas fa-flask" />
              </div>
              <h3>{productCount}+ Product Range</h3>
              <p>Extensive portfolio across 17 therapeutic categories.</p>
            </div>
            <div className="card icon-box">
              <div className="icon-box-circle">
                <i className="fas fa-handshake" />
              </div>
              <h3>Ethical Business Practices</h3>
              <p>Transparent dealings with integrity at the core.</p>
            </div>
            <div className="card icon-box">
              <div className="icon-box-circle">
                <i className="fas fa-heart" />
              </div>
              <h3>Trusted Partnerships</h3>
              <p>Building long-term relationships across India.</p>
            </div>
            <div className="card icon-box">
              <div className="icon-box-circle">
                <i className="fas fa-map-marked-alt" />
              </div>
              <h3>Nationwide Distribution</h3>
              <p>Efficient supply chain across all states.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Divisions */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Our Divisions</h2>
          <p className="section-subtitle">
            Six specialized divisions catering to diverse healthcare needs.
          </p>
          <div className="grid-3">
            {divisions.map((division) => (
              <DivisionCard key={division._id} division={division} />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Browse by Category</h2>
          <p className="section-subtitle">
            Explore our products organized by therapeutic area.
          </p>
          <div className="grid-4">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <p className="section-subtitle">
            Best-selling pharmaceutical products from across our divisions.
          </p>
          <div className="grid-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
          {featuredProducts.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999' }}>
              Featured products will appear here once added in the CMS.
            </p>
          )}
        </div>
      </section>

      {/* PCD Franchise */}
      <section style={{ background: 'linear-gradient(135deg, #1A1A1A, #333)', padding: '80px 0' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: 40 }}>
            <div>
              <h2 style={{ color: '#FFF', fontSize: 36, marginBottom: 16 }}>PCD Pharma Franchise</h2>
              <p style={{ color: '#AAA', marginBottom: 20 }}>
                Start your own pharmaceutical distribution business with McBrex Lifesciences. Get monopoly
                rights, promotional support, and access to {productCount}+ WHO-GMP certified products.
              </p>
              <ul style={{ color: '#AAA', marginBottom: 24, paddingLeft: 20, listStyle: 'disc' }}>
                <li style={{ marginBottom: 8 }}>Monopoly-based distribution rights</li>
                <li style={{ marginBottom: 8 }}>Free promotional inputs (visual aids, MR bags, samples)</li>
                <li style={{ marginBottom: 8 }}>Wide product range across 6 divisions</li>
                <li style={{ marginBottom: 8 }}>Attractive profit margins</li>
                <li>Timely delivery across India</li>
              </ul>
              <Link href="/landing-page" className="btn btn-primary">
                Apply for Franchise
              </Link>
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 12,
                padding: 40,
                textAlign: 'center',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
                <div>
                  <p style={{ fontSize: 36, fontWeight: 700, color: '#D92323', margin: 0 }}>
                    {productCount}+
                  </p>
                  <p style={{ color: '#AAA', fontSize: 14 }}>Products</p>
                </div>
                <div>
                  <p style={{ fontSize: 36, fontWeight: 700, color: '#D92323', margin: 0 }}>6</p>
                  <p style={{ color: '#AAA', fontSize: 14 }}>Divisions</p>
                </div>
                <div>
                  <p style={{ fontSize: 36, fontWeight: 700, color: '#D92323', margin: 0 }}>17</p>
                  <p style={{ color: '#AAA', fontSize: 14 }}>Categories</p>
                </div>
                <div>
                  <p style={{ fontSize: 36, fontWeight: 700, color: '#D92323', margin: 0 }}>
                    {moleculeCount}
                  </p>
                  <p style={{ color: '#AAA', fontSize: 14 }}>Molecules</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality */}
      <section className="section-padding bg-light">
        <div className="container">
          <div className="text-center">
            <h2 className="section-title">Quality & Certifications</h2>
            <p className="section-subtitle">
              Every product meets the highest international standards.
            </p>
            <div
              style={{
                display: 'flex',
                gap: 40,
                justifyContent: 'center',
                flexWrap: 'wrap',
                marginTop: 32,
              }}
            >
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  background: '#FFF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #D92323',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <i className="fas fa-certificate" style={{ fontSize: 40, color: '#D92323', marginBottom: 8 }} />
                <span style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}>ISO 9001:2015</span>
              </div>
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  background: '#FFF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #D92323',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <i className="fas fa-globe" style={{ fontSize: 40, color: '#D92323', marginBottom: 8 }} />
                <span style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}>WHO-GMP</span>
              </div>
              <div
                style={{
                  width: 180,
                  height: 180,
                  borderRadius: '50%',
                  background: '#FFF',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '4px solid #D92323',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                }}
              >
                <i className="fas fa-check-circle" style={{ fontSize: 40, color: '#D92323', marginBottom: 8 }} />
                <span style={{ fontSize: 14, fontWeight: 700, textAlign: 'center' }}>GMP Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">What Our Partners Say</h2>
          <p className="section-subtitle">
            Trusted by healthcare professionals and distributors across India.
          </p>
          <div className="grid-3">
            <div className="review-card">
              <div className="review-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p className="review-text">
                "McBrex has been our trusted partner for 3 years. Their product quality is exceptional
                and delivery is always on time."
              </p>
              <div className="review-author">Dr. Rajesh Kumar</div>
              <div className="review-date">Pharma Distributor, Punjab</div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p className="review-text">
                "The PCD franchise support is outstanding. Promotional inputs and monopoly rights helped
                me build a successful business."
              </p>
              <div className="review-author">Amit Sharma</div>
              <div className="review-date">Franchise Partner, Haryana</div>
            </div>
            <div className="review-card">
              <div className="review-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star-half-alt" />
              </div>
              <p className="review-text">
                "Excellent cardiac care range from Cardiwin division. My patients have shown great
                results. Highly recommended."
              </p>
              <div className="review-author">Dr. Priya Singh</div>
              <div className="review-date">Cardiologist, Delhi</div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-light">
        <div className="container">
          <h2 className="section-title">Latest Updates</h2>
          <p className="section-subtitle">News and insights from the pharmaceutical industry.</p>
          <div className="grid-3">
            {latestPosts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
          {latestPosts.length === 0 && (
            <p style={{ textAlign: 'center', color: '#999' }}>
              Blog posts will appear here once published in the CMS.
            </p>
          )}
        </div>
      </section>

      {/* Contact CTA */}
      <section
        style={{
          background: 'linear-gradient(135deg, #D92323, #B51C1C)',
          padding: '80px 0',
          textAlign: 'center',
        }}
      >
        <div className="container">
          <h2 style={{ color: '#FFF', fontSize: 36, marginBottom: 16 }}>
            Partner With McBrex Lifesciences
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: 600, margin: '0 auto 32px' }}>
            Get in touch for product enquiries, PCD Pharma Franchise opportunities, and partnership
            discussions.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-white">
              Contact Us
            </Link>
            <a
              href="https://wa.me/918264040991"
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              style={{ background: '#25D366', borderColor: '#25D366' }}
            >
              <i className="fab fa-whatsapp" style={{ marginRight: 8 }} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
