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
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      options: {
        hotspot: true
      }
    }
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      dates: 'dates',
      thumbnail: 'thumbnail'
    },
    prepare ({ title, subtitle, dates, thumbnail }) {
      return {
        title: title,
        subtitle: subtitle + ' ' + dates,
        media: thumbnail
      }
    }
  }
}
