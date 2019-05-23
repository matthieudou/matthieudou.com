import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Experience')
  .child(
    S.editor()
      .id('experience')
      .schemaType('experienceResume')
      .documentId('resume-experience')
  )
