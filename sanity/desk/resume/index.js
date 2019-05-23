import S from '@sanity/desk-tool/structure-builder'

import skills from './skills'
import education from './education'
import experience from './experience'

export default S.listItem()
  .title('Resume')
  .child(
    S.list()
      .title('Resume')
      .items([
        skills,
        education,
        experience
      ])
  )
