export default {
  name: 'skillsResume',
  title: 'Skills',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Skills items',
      type: 'array',
      of: [
        { type: 'iconObject' }
      ]
    }
  ]
}
