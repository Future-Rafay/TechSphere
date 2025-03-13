export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'hashedPassword',
      title: 'Hashed Password',
      type: 'string',
      hidden: true,
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      options: {
        list: [
          { title: 'Customer', value: 'customer' },
          { title: 'Admin', value: 'admin' },
          { title: 'Editor', value: 'editor' },
        ],
      },
      initialValue: 'customer',
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
    },
    {
      name: 'addresses',
      title: 'Addresses',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Billing', value: 'billing' },
                  { title: 'Shipping', value: 'shipping' },
                  { title: 'Both', value: 'both' },
                ],
              },
              initialValue: 'both',
            },
            {
              name: 'isDefault',
              title: 'Is Default',
              type: 'boolean',
              initialValue: false,
            },
            {
              name: 'fullName',
              title: 'Full Name',
              type: 'string',
            },
            {
              name: 'addressLine1',
              title: 'Address Line 1',
              type: 'string',
            },
            {
              name: 'addressLine2',
              title: 'Address Line 2',
              type: 'string',
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
            },
            {
              name: 'state',
              title: 'State/Province',
              type: 'string',
            },
            {
              name: 'postalCode',
              title: 'Postal Code',
              type: 'string',
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
            },
            {
              name: 'phone',
              title: 'Phone',
              type: 'string',
            },
          ],
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
      name: 'lastLogin',
      title: 'Last Login',
      type: 'datetime',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      media: 'image',
    },
  },
}; 