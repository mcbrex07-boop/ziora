import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center',
      padding: '40px'
    }}>
      <h1 style={{ fontSize: '120px', fontWeight: 700, color: '#D92323', margin: 0 }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#1A1A1A', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#666', marginBottom: '32px' }}>
        The page you are looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        style={{
          padding: '12px 32px',
          background: '#D92323',
          color: '#FFF',
          borderRadius: '6px',
          textDecoration: 'none',
          fontWeight: 600
        }}
      >
        Back to Home
      </Link>
    </div>
  )
}
