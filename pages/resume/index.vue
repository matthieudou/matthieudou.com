<template>
  <div>

    <article>
      <div
        v-for="item in experience.items"
        :key="item._id"
      >
        <h2>{{ item.title }}</h2>
        {{ item.subtitle }}
        <pre>{{ item }}</pre>
      </div>
    </article>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      ...mapState('resume', {
        experience: 'experience'
      })
    }
  }
</script>

<style lang="scss" scoped>

</style>
