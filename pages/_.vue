<template>
  <div>
    hello world
  </div>
</template>

<script>
  export default {
    layout () {

    },

    mounted () {
      console.log(this.$route.params)
    }
  }
</script>
