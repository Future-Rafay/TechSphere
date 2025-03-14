const bannerSchema = {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'mobileImage',
      title: 'Mobile Image',
      description: 'Optional image for mobile devices',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'headline',
      title: 'Headline',
      type: 'string',
    },
    {
      name: 'subheadline',
      title: 'Subheadline',
      type: 'string',
    },
    {
      name: 'buttonText',
      title: 'Button Text',
      type: 'string',
    },
    {
      name: 'buttonLink',
      title: 'Button Link',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Text Position',
      type: 'string',
      options: {
        list: [
          { title: 'Left', value: 'left' },
          { title: 'Center', value: 'center' },
          { title: 'Right', value: 'right' },
        ],
        layout: 'radio',
      },
      initialValue: 'center',
    },
    {
      name: 'textColor',
      title: 'Text Color',
      type: 'string',
      description: 'HEX color code for text',
      initialValue: '#ffffff',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in which to display this banner',
      initialValue: 0,
    },
    {
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
      description: 'When this banner should start displaying',
    },
    {
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
      description: 'When this banner should stop displaying',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
      options: {
        list: [
          { title: 'Home Hero', value: 'homeHero' },
          { title: 'Home Secondary', value: 'homeSecondary' },
          { title: 'Category Page', value: 'category' },
          { title: 'Sidebar', value: 'sidebar' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      location: 'location',
      active: 'isActive',
    },
    prepare({ title, media, location, active }: any) {
      return {
        title,
        subtitle: `${location} ${active ? '(Active)' : '(Inactive)'}`,
        media,
      };
    },
  },
};

export default bannerSchema; 