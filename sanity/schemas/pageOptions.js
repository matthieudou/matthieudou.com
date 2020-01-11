export default {
  name: 'pageOptions',
  title: 'Page options',
  type: 'object',
  options: { collapsible: true, collapsed: true },
  fields: [
    {
      name: 'layout',
      title: 'Layout',
      type: 'reference',
      to: [
        { type: 'layout' }
      ]
    }
  ]
}
