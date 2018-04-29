<template>
  <section class="container flex bg-white mx-auto shadow-lg">
    <div class="min-h-full text-white bg-blue w-1/3">
      <sidebar></sidebar>
    </div>
    <div class="min-h-full p-8 w-2/3">
      <main-content></main-content>
    </div>
  </section>
</template>

<script>
import Sidebar from '@/components/resume/Sidebar'
import MainContent from '@/components/resume/MainContent'

export default {
  components: {
    Sidebar,
    MainContent
  }
}
</script>
