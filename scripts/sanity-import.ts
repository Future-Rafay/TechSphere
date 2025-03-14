import { createClient } from '@sanity/client'
import { products } from '../src/data/products'

// Initialize the Sanity client
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_AUTH_TOKEN, // Need a write token
  apiVersion: '2023-05-03',
  useCdn: false, // We need to use the API directly for mutations
})

// Function to create a Sanity-friendly slug
const createSanitySlug = (slug: string) => ({
  _type: 'slug',
  current: slug
})

// Transform our product data to match Sanity schema
const transformProductForSanity = (product: any) => ({
  _type: 'product',
  _id: `product-${product.id}`,
  name: product.name,
  slug: createSanitySlug(product.slug),
  description: product.description,
  price: product.price,
  category: product.category,
  rating: product.rating,
  reviews: product.reviews,
  inStock: product.inStock ?? true,
  images: product.images?.map((image: string) => ({
    _type: 'image',
    _key: `image-${Math.random().toString(36).substr(2, 9)}`,
    asset: {
      _type: 'reference',
      url: image
    }
  })) || [],
  features: product.features?.map((feature: string) => ({
    _type: 'string',
    _key: `feature-${Math.random().toString(36).substr(2, 9)}`,
    value: feature
  })) || [],
  colors: product.colors?.map((color: string) => ({
    _type: 'string',
    _key: `color-${Math.random().toString(36).substr(2, 9)}`,
    value: color
  })) || [],
  specifications: Object.entries(product.specifications || {}).map(([key, value]) => ({
    _type: 'specification',
    _key: `spec-${Math.random().toString(36).substr(2, 9)}`,
    name: key,
    value: value as string
  }))
})

// Main import function
async function importProducts() {
  console.log('Starting product import...')
  
  try {
    // Transform all products
    const sanityProducts = products.map(transformProductForSanity)
    
    // Create a transaction
    const transaction = client.transaction()
    
    // Add create operations for each product
    for (const product of sanityProducts) {
      transaction.createIfNotExists(product)
    }
    
    // Commit the transaction
    await transaction.commit()
    
    console.log(`Successfully imported ${products.length} products to Sanity!`)
  } catch (error) {
    console.error('Error importing products:', error)
  }
}

// Run the import
importProducts() 