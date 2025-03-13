export default {
  name: 'wishlist',
  title: 'Wishlist',
  type: 'document',
  fields: [
    {
      name: 'user',
      title: 'User',
      type: 'reference',
      to: [{ type: 'user' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    },
  ],
  preview: {
    select: {
      userName: 'user.name',
      itemCount: 'items.length',
    },
    prepare({ userName, itemCount = 0 }: any) {
      return {
        title: `${userName || 'Unknown User'}'s Wishlist`,
        subtitle: `${itemCount} item${itemCount === 1 ? '' : 's'}`,
      };
    },
  },
};