import S from '@sanity/desk-tool/structure-builder'

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Config')
        .child(
          S.list()
            .title('Configuration')
            .items([
              S.listItem()
                .title('Layouts')
                .child(
                  S.documentTypeList('layout')
                )
            ])
        ),
      S.listItem()
        .title('Pages')
        .child(
          S.list()
            .title('Pages')
            .items([
              S.listItem()
                .title('Draft pages')
                .child(
                  S.documentTypeList('page')
                    .title('Drafts pages')
                    .schemaType('page')
                    .filter('published == false')
                ),
              S.documentTypeListItem('page')
                .title('All pages')
            ])
        )
    ])
