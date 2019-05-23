export default {
  name: 'educationResume',
  title: 'Education',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'items',
      title: 'Education items',
      type: 'array',
      of: [
        { type: 'timelineObject' }
      ]
    }
  ]
}
