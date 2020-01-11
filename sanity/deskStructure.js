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
        .title('Drafts')
        .schemaType('page')
        .child(
          S.documentList()
            .title('Drafts pages')
            .schemaType('page')
            .filter('published == false')
        ),

      S.listItem()
        .title('Pages')
      // .child()
      // S.listItem()
      //   .title('Pages')
      //   .schemaType('page')
      //   .child(
      //     S.documentList()
      //     .title('Categories')
      //       .filter('published == false')
      //   ),
    ])
