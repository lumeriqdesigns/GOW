export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Pendant & Dropping Lights', value: 'pendant' },
          { title: 'Luxury Chandeliers', value: 'chandelier' },
          { title: 'Wall Brackets & Sconces', value: 'wall' },
          { title: 'Rope & Strip Lights', value: 'strip' },
          { title: 'Electrical Materials', value: 'electrical' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Regular Price (₦)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'discountPrice',
      title: 'Discount Price (₦) — leave empty if no discount',
      type: 'number',
    },
    {
      name: 'stock',
      title: 'Stock Quantity',
      type: 'number',
      initialValue: 10,
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'badge',
      title: 'Badge (e.g. Bestseller, Sale, New)',
      type: 'string',
    },
    {
      name: 'shortDesc',
      title: 'Short Description',
      type: 'text',
      rows: 2,
    },
    {
      name: 'description',
      title: 'Full Description',
      type: 'text',
      rows: 5,
    },
    {
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'specs',
      title: 'Specifications',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
          ],
          preview: {
            select: { title: 'label', subtitle: 'value' },
          },
        },
      ],
    },
    {
      name: 'featured',
      title: 'Featured on Homepage',
      type: 'boolean',
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'images.0',
    },
  },
}
