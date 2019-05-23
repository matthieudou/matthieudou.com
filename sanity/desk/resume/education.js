import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Education')
  .child(
    S.editor()
      .id('education')
      .schemaType('educationResume')
      .documentId('resume-education')
  )
