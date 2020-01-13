export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  fieldsets: [
    { name: 'pageOptions', title: 'Page options' }
  ],
  initialValue: {
    published: false
  },
  fields: [
    {
      name: 'published',
      title: 'Published',
      type: 'boolean'
    },
    {
      name: 'route',
      title: 'Route',
      type: 'slug'
    },
    {
      name: 'meta',
      title: 'Meta tags',
      type: 'meta'
    },
    {
      name: 'pageOptions',
      title: 'Page options',
      type: 'pageOptions'
    },
    {
      name: 'pageContent',
      title: 'Page content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'Heading 1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'H5', value: 'h5' },
            { title: 'H6', value: 'h6' },
            { title: 'Quote', value: 'blockquote' }
          ]
        },
        {
          type: 'image',
          options: {
            hotspot: true
          }
        },
        {
          type: 'code'
        }
      ]
    }
  ]
}
