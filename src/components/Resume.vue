<template lang="pug">
.container.flex.bg-white.mx-auto.shadow-lg
  //-
  .min-h-full.text-white.bg-blue(class="w-1/3")
    Sidebar
  .min-h-full.p-8(class="w-2/3")
    Content
</template>

<script>
import Sidebar from '@/components/resume/Sidebar'
import Content from '@/components/resume/Content'
export default {
  components: {
    Sidebar,
    Content
  }
}
</script>
