import { type SchemaTypeDefinition } from 'sanity'
import category from './category'
import banner from './banner'
import product from './product'
import review from './review'
import brand from './brand'
import user from './user'
import blog from './blog'
import author from './author'
import wishlist from './wishlist'
import order from './order'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    user,
    product,
    review,
    brand,
    blog,
    author,
    wishlist,
    order,
    category,
    banner,
  ],
}
