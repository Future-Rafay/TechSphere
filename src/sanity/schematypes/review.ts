const reviewSchema = {
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
      options: {
        list: [1, 2, 3, 4, 5],
      },
      validation: (Rule: any) => Rule.required().min(1).max(5),
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: 'isVerifiedPurchase',
      title: 'Is Verified Purchase',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'isRecommended',
      title: 'Would Recommend',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'isApproved',
      title: 'Is Approved',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'helpfulCount',
      title: 'Helpful Count',
      type: 'number',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      productName: 'product.name',
      userName: 'user.name',
      rating: 'rating',
    },
    prepare({ title, productName, userName, rating }: any) {
      return {
        title: title || `Review for ${productName || 'Unknown Product'}`,
        subtitle: `By ${userName || 'Unknown User'} - ${rating || 0}/5 stars`,
      };
    },
  },
}; 

export default reviewSchema;