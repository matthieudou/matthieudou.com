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
      type: 'string'
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
        { type: 'block' }
      ]
    }
  ]
}
