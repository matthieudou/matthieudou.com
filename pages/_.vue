<template>
  <main>
    <portable-text :blocks="page.pageContent" />
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'
  import PortableText from '~/components/utilities/PortableText'

  export default {
    layout ({ store }) { return store.state.currentLayout.id || 'default' },

    head () {
      return {
        title: this.page.meta.title
      }
    },

    async fetch ({ route, store, error }) {
      const valid = await store.dispatch('fetchPage', route.path)
      if (!valid) {
        error({
          statusCode: 404,
          message: 'Page not found'
        })
      }
    },

    computed: {
      ...mapGetters({
        page: 'getCurrentPage'
      })
    },

    components: {
      PortableText
    }
  }
</script>
