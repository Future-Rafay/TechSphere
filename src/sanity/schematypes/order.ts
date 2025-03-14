const orderSchema = {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'orderNumber',
      title: 'Order Number',
      type: 'string',
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
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product',
              title: 'Product',
              type: 'reference',
              to: [{ type: 'product' }],
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule: any) => Rule.required().min(1),
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'color',
              title: 'Color',
              type: 'string',
            },
          ],
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shippingAddress',
      title: 'Shipping Address',
      type: 'object',
      fields: [
        {
          name: 'fullName',
          title: 'Full Name',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'addressLine1',
          title: 'Address Line 1',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
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
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'state',
          title: 'State/Province',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'postalCode',
          title: 'Postal Code',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'country',
          title: 'Country',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'phone',
          title: 'Phone',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'billingAddress',
      title: 'Billing Address',
      type: 'object',
      fields: [
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
    {
      name: 'subtotal',
      title: 'Subtotal',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'tax',
      title: 'Tax',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'shippingCost',
      title: 'Shipping Cost',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'total',
      title: 'Total',
      type: 'number',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paymentMethod',
      title: 'Payment Method',
      type: 'string',
      options: {
        list: [
          { title: 'Credit Card', value: 'credit_card' },
          { title: 'PayPal', value: 'paypal' },
          { title: 'Bank Transfer', value: 'bank_transfer' },
          { title: 'Cash on Delivery', value: 'cod' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'paymentStatus',
      title: 'Payment Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Paid', value: 'paid' },
          { title: 'Failed', value: 'failed' },
          { title: 'Refunded', value: 'refunded' },
        ],
      },
      initialValue: 'pending',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'notes',
      title: 'Notes',
      type: 'text',
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
    {
      name: 'shippingMethod',
      title: 'Shipping Method',
      type: 'string',
    },
    {
      name: 'trackingNumber',
      title: 'Tracking Number',
      type: 'string',
    },
    {
      name: 'estimatedDelivery',
      title: 'Estimated Delivery',
      type: 'date',
    },
  ],
  preview: {
    select: {
      title: 'orderNumber',
      userName: 'user.name',
      status: 'status',
      total: 'total',
      date: 'createdAt',
    },
    prepare({ title, userName, status, total, date }: any) {
      const formattedDate = date ? new Date(date).toLocaleDateString() : '';
      return {
        title: `Order #${title}`,
        subtitle: `${userName || 'Unknown'} - ${status} - $${total} - ${formattedDate}`,
      };
    },
  },
}; 

export default orderSchema;