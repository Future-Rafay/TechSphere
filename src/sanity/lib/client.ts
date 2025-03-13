import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false to ensure we get fresh data
  perspective: 'published',
  stega: false, // Disable visual editing features
  // Don't include visual editing related features
  token: process.env.SANITY_API_TOKEN // Include this if you need write operations
})
