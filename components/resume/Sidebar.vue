<template>
  <div>
    <img src="/profil.jpg" alt="Matthieu d'Oultremont">
    <div class="p-2">
      <h1 class="font-hairline text-center uppercase">Matthieu d'Oultremont</h1>
      <h2 class="font-hairline text-center uppercase">Fullstack developer</h2>
      <div class="border-t-2 border-blue-dark py-4 px-2 mt-4 flex items-center">
        <icon name="calendar" width="1rem" height="1rem" class="mr-2"></icon>
        <span>12/10/1994</span>
      </div>
      <div class="border-t-2 border-blue-dark py-4 px-2 mt-4 flex items-center">
        <icon name="mail" width="1rem" height="1rem" class="mr-2"></icon>
        <span>matthieu.doultremont@gmail.com</span>
      </div>
      <div class="border-t-2 border-blue-dark py-4 px-2 mt-4 flex items-center">
        <icon name="map-marker" width="1rem" height="1rem" class="mr-2"></icon>
        <span>Rue du Craetveld 91, <br>1120 Bruxelles</span>
      </div>
      <div class="border-t-2 border-blue-dark py-4 px-2 mt-4 flex items-center">
        <icon name="user" width="1rem" height="1rem" scale="6" class="mr-2"></icon>
        <p>Animateur d'unité aux ardents de St-Michel, amateur de bonne nourriture et même de bière, passionné par le développement web, épris de menuiserie et randonneur. Voilà un petit avant-goût de la personne que je suis !</p>
      </div>
    </div>
  </div>
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

