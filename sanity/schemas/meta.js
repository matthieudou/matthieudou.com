export default {
  name: 'meta',
  title: 'Meta',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'description',
      title: 'Meta description',
      type: 'text'
    },
    {
      name: 'image',
      title: 'Meta image',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ]
}
