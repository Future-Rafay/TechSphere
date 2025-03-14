const categorySchema = {
  name: 'category',
  title: 'Category',
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
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'icon',
      title: 'Icon',
      description: 'SVG or icon name from your icon library',
      type: 'string',
    },
    {
      name: 'parent',
      title: 'Parent Category',
      type: 'reference',
      to: [{ type: 'category' }],
      // Self-referencing to allow for subcategories
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which to display this category',
      initialValue: 0,
    },
    {
      name: 'isFeatured',
      title: 'Is Featured',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
        },
        {
          name: 'keywords',
          title: 'Keywords',
          type: 'array',
          of: [{ type: 'string' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      subtitle: 'parent.name',
    },
    prepare({ title, media, subtitle }: any) {
      return {
        title,
        subtitle: subtitle ? `Subcategory of ${subtitle}` : 'Main category',
        media,
      };
    },
  },
}; 

export default categorySchema;