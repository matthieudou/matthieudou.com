import S from '@sanity/desk-tool/structure-builder'

export default S.listItem()
  .title('Skills')
  .child(
    S.editor()
      .id('skills')
      .schemaType('skillsResume')
      .documentId('resume-skills')
  )
