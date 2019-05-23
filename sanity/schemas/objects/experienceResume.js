export default {
  name: 'experienceResume',
  title: 'Experience',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Experience items',
      type: 'array',
      of: [
        { type: 'timelineObject' }
      ]
    }
  ]
}
