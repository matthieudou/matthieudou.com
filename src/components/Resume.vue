<template lang="pug">
.container.flex.bg-white.mx-auto.shadow-lg
  //-
  .min-h-full.text-white(class="w-1/3")
    Sidebar.bg-blue
  .min-h-full(class="w-2/3")

</template>

<script>
import Sidebar from '@/components/resume/Sidebar'
export default {
  components: {
    Sidebar
  }
}
</script>
