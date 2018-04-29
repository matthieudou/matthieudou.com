<template lang="pug">
div
  img(src="/profil.jpg")
  .p-2
    h1.font-hairline.text-center.uppercase Matthieu d'Oultremont
    h2.font-hairline.text-center.uppercase Junior Fullstack developer
    .border-t-2.border-blue-dark.py-4.px-2.mt-4.flex.items-center
      <icon name="calendar" width="1rem" height="1rem" class="mr-2"></icon>
      div 12/10/1994
    .border-t-2.border-blue-dark.py-4.px-2.flex.items-center
      <icon name="mail" width="1rem" height="1rem" class="mr-2"></icon>
      div matthieu.doultremont@gmail.com
    .border-t-2.border-blue-dark.py-4.px-2.flex.items-center
      <icon name="map-marker" width="1rem" height="1rem" class="mr-2"></icon>
      div Rue du Craetveld 91, <br>1120 Bruxelles
    .border-t-2.border-blue-dark.py-4.px-2.flex.items-center
      <icon name="phone" width="1rem" height="1rem" class="mr-2"></icon>
      div 0471 30 46 75
    .border-t-2.border-blue-dark.py-4.px-2.flex
      <icon name="user" width="1rem" height="1rem" scale="6" class="mr-2"></icon>
      .text-justify Animateur d'unité aux ardents de St-Michel, amateur de bonne nourriture et même de bière, passionné par le développement web, épris de menuiserie et randonneur. Voilà un petit avant-goût de la personne que je suis !
</template>

<script>
import '@/icons/calendar'
import '@/icons/mail'
import '@/icons/phone'
import '@/icons/user'
import '@/icons/map-marker'

export default {

}
</script>

