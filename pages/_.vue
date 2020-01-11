<template>
  <main>
    <pre>
      {{ page }}
    </pre>
  </main>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    layout ({ store }) { return store.state.currentLayout.id || 'default' },

    head () {
      return {
        title: this.page.title || this.page.route
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
    }
  }
</script>
