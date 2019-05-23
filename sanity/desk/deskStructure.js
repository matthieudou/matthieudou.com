import S from '@sanity/desk-tool/structure-builder'

import config from './config'
import resume from './resume'

export default () =>
  S.list()
    .title('Content')
    .items([
      config,
      resume
    ])
