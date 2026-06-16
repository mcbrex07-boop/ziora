import { createClient } from 'next-sanity'
import { client } from './client'

export async function sanityFetch<T>({
  query,
  params = {},
  tags = [],
}: {
  query: string
  params?: Record<string, unknown>
  tags?: string[]
}): Promise<T> {
  try {
    return await client.fetch<T>(query, params, {
      next: {
        revalidate: 60,
        tags: tags.length ? tags : ['sanity'],
      },
    })
  } catch (error) {
    console.warn('Sanity fetch failed (expected if CMS not configured):', error)
    throw error
  }
}

export async function sanityFetchPreview<T>({
  query,
  params = {},
}: {
  query: string
  params?: Record<string, unknown>
}): Promise<T> {
  const previewClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'klr1np53',
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-06-15',
    useCdn: false,
    perspective: 'previewDrafts',
    token: process.env.SANITY_API_READ_TOKEN,
  })
  return previewClient.fetch<T>(query, params)
}
