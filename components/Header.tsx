import Link from 'next/link'

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link href="/" className="header-logo">
            <img src="/assets/logo.jpg" alt="McBrex Lifesciences" />
          </Link>
          <nav className="header-nav">
            <Link href="/">Home</Link>
            <div className="dropdown">
              <button className="dropdown-toggle">
                About <i className="fas fa-chevron-down" />
              </button>
              <div className="dropdown-menu">
                <Link href="/about">Who We Are</Link>
                <Link href="/board-of-directors">Board of Directors</Link>
                <Link href="/landing-page">Landing Page</Link>
                <Link href="/social-responsibility">Social Responsibility</Link>
                <Link href="/quality">Quality</Link>
                <Link href="/why-choose-us">Why Choose Us</Link>
              </div>
            </div>
            <Link href="/products">Products</Link>
            <Link href="/categories">Categories</Link>
            <Link href="/molecules">Molecules</Link>
            <Link href="/divisions">Divisions</Link>
            <div className="dropdown">
              <button className="dropdown-toggle">
                Blogs <i className="fas fa-chevron-down" />
              </button>
              <div className="dropdown-menu">
                <Link href="/blog">Blog</Link>
                <Link href="/state-wise-blog">State Wise Blog</Link>
                <Link href="/district-wise-blog">District Wise Blog</Link>
              </div>
            </div>
            <Link href="/career">Career</Link>
            <Link href="/customer-reviews">Reviews</Link>
            <Link href="/contact">Contact</Link>
            <a href="#" className="btn btn-primary" data-enquiry>
              Enquiry
            </a>
          </nav>
          <button className="mobile-menu-btn">
            <i className="fas fa-bars" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="mobile-menu">
        <div className="mobile-menu-header">
          <img src="/assets/logo.jpg" alt="McBrex Lifesciences" />
          <button className="mobile-menu-close">
            <i className="fas fa-times" />
          </button>
        </div>
        <nav className="mobile-menu-nav">
          <Link href="/">Home</Link>
          <button className="mobile-dropdown-btn">
            About <i className="fas fa-chevron-down" />
          </button>
          <div className="mobile-submenu">
            <Link href="/about">Who We Are</Link>
            <Link href="/board-of-directors">Board of Directors</Link>
            <Link href="/landing-page">Landing Page</Link>
            <Link href="/social-responsibility">Social Responsibility</Link>
            <Link href="/quality">Quality</Link>
            <Link href="/why-choose-us">Why Choose Us</Link>
          </div>
          <Link href="/products">Products</Link>
          <Link href="/categories">Categories</Link>
          <Link href="/molecules">Molecules</Link>
          <Link href="/divisions">Divisions</Link>
          <Link href="/career">Career</Link>
          <Link href="/customer-reviews">Reviews</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
