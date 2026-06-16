import type { ReactNode } from 'react'
import Script from 'next/script'
import TopBar from './TopBar'
import Header from './Header'
import Footer from './Footer'
import BottomBar from './BottomBar'
import EnquiryModal from './EnquiryModal'

interface PageShellProps {
  children: ReactNode
  className?: string
}

export default function PageShell({ children, className = '' }: PageShellProps) {
  return (
    <>
      <TopBar />
      <Header />
      <div className="mobile-overlay" />
      <main className={className}>{children}</main>
      <Footer />
      <BottomBar />
      <EnquiryModal />
      <a
        href="https://wa.me/918264040991"
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp" />
      </a>
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  )
}
