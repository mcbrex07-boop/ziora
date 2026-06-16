'use client'

import type { CSSProperties } from 'react'

interface SafeImageProps {
  src: string
  alt: string
  style?: CSSProperties
  className?: string
}

export default function SafeImage({ src, alt, style, className }: SafeImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      style={style}
      className={className}
      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
        ;(e.target as HTMLImageElement).style.display = 'none'
      }}
    />
  )
}
