<template>
  <main class="container mx-auto p-8">
    <div class="flex">
      <img
        class="w-32 h-32 md:w-64 md:h-64 object-cover rounded-lg shadow-lg"
        src="~/assets/images/profil.jpg"
      >
      <div class="ml-4 md:ml-8">
        <h1 class="text-3xl font-heading leading-tight">Matthieu <br> d'Oultremont</h1>

        <div class="text-gray-700 mt-2">Fullstack developer</div>

        <div class="text-gray-500 mt-2">
          <icon name="map-marker"/>
          <span>Brussels, Belgium</span>
        </div>
      </div>
    </div>
    <p class="mt-4">
      Hi  👋,<br>
      Scout leader at the Ardents of St-Michel, foodie, beer lover, web development passionate, woodworker, and trekker, here is a little preview of who I am.
    </p>

    <!-- INFORMATIONS -->
    <article class="mt-8">
      <h2 class="text-xl uppercase font-bold">Informations</h2>
      <div>
        matthieu.doultremont@gmail.com
      </div>
    </article>
    <!-- SKILLS -->

    <!-- EXPERIENCE -->

    <!-- LANGUAGES -->

    <!-- EDUCATION -->

    <!-- HOBBIES -->
  </main>
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
