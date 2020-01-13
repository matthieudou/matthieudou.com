<template>
  <div>
    <block-content
      :blocks="blocks"
      :serializers="serializers" />
  </div>
</template>

<script>
  import BlockContent from 'sanity-blocks-vue-component'
  import ModuleRenderer from '~/components/utilities/ModuleRenderer'

  export default {
    props: {
      blocks: {
        type: Array,
        default: () => []
      }
    },

    computed: {
      serializers () {
        return {
          types: {
            image: ModuleRenderer,
            code: ModuleRenderer
          }
        }
      }
    },

    components: {
      BlockContent
    }
  }
</script>
