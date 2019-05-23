import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Config')
  .child(
    S.editor()
      .id('config')
      .schemaType('config')
      .documentId('website-config')
  )
