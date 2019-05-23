<template>
  <div>
    <div>
      You have successfully sent a request
    </div>
    <input
      type="text"
      class="form-input"
    >
  </div>
</template>

<script>
  export default {
    data () {
      return {
        form: {
          name: '',
          email: '',
          sendCopy: false
        },
        isLoading: false
      }
    },

    methods: {
      perform () {
        if (this.isLoading) return

        this.isLoading = true
        const url = process.env.FUNCTIONS_BASE_URL + '/send-email'
        this.$axios.$post(url, {

        })
          .then(res => {
            this.isLoading = false
          })
      }
    }
  }
</script>
