import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import { client } from './client'

const builder = imageUrlBuilder(client)

export function urlFor(source: { asset?: { _ref?: string; url?: string } } | string | undefined) {
  if (!source) return undefined
  if (typeof source === 'string') return source
  if (source.asset?.url) return source.asset.url
  if (source.asset?._ref) return builder.image(source).url()
  return undefined
}
