const brandSchema = {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which to display this brand',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'logo',
      featured: 'isFeatured',
    },
    prepare({ title, media, featured }: any) {
      return {
        title,
        subtitle: featured ? 'Featured Brand' : 'Brand',
        media,
      };
    },
  },
}; 

export default brandSchema;