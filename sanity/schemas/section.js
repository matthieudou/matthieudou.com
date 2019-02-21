export default {
  name: 'section',
  title: 'Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        { type: 'timelineObject' },
        { type: 'iconObject' }
      ]
    }
  ]
}
