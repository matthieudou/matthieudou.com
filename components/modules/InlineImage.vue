<template>
  <div>
    <img :src="imageUrl()">
  </div>
</template>

<script>
  import { imageUrl } from '~/utils/sanityClient'

  export default {
    methods: {
      imageUrl () {
        return imageUrl(this.$vnode.data.props).url()
      }
    }
  }
</script>
