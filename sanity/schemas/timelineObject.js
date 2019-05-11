export default {
  name: 'timelineObject',
  title: 'Timeline Object',
  type: 'object',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url'
    },
    {
      name: 'dates',
      title: 'Dates',
      type: 'string'
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      dates: 'dates'
    },
    prepare ({ title, subtitle, dates }) {
      return {
        title: title,
        subtitle: subtitle + ' ' + dates
      }
    }
  }
}
