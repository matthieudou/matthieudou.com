<template lang="pug">
.content
  .shadow-md.p-4.m-1
    .flex.items-center
      <icon width="1rem" height="1rem" scale="2" name="school" class="mr-2"></icon>
      h3.text-blue Formations
    p.mt-4
      h4
        | Le Wagon Bootcamp
        span.text-grey-darker  (juin 2017)
      p.text-grey-darker FullStack Developer, Web Development
    p.mt-4
      h4
        | Technologie de l’informatique
        span.text-grey-darker  (sep 2016 - jan 2017)
      p.text-grey-darker Ephec Louvain-la-Neuve | 1<sup>ère</sup> bac
    p.mt-4
      h4
        | Informatique de gestion
        span.text-grey-darker  (sep 2014 - juin 2016)
      p.text-grey-darker Institut Paul Lambin | 1<sup>ère</sup> bac
    p.mt-4
      h4
        | Brevet animateur
        span.text-grey-darker  (mars 2014)
      p.text-grey-darker ONE | Les Scouts ASBL
    p.mt-4
      h4
        | Humanités
        span.text-grey-darker  (juin 2014)
      p.text-grey-darker Sciences 6 - Anglais 4 | Institut de l’Assomption
  .flex.mt-4
    .shadow-md.m-1.p-4(class="w-1/2")
      .flex.items-center
        <icon width="1rem" height="1rem" scale="2" name="language" class="mr-2"></icon>
        h3.text-blue Langues
      p.mt-4
        h4
          | Français
        p.text-grey-darker Langue maternelle
      p.mt-4
        h4
          | Néerlandais
        p.text-grey-darker Compétence professionnelle
      p.mt-4
        h4
          | Anglais
        p.text-grey-darker Compétence professionnelle
    .shadow-md.m-1.p-4(class="w-1/2")
      .flex.items-center
        <icon width="1rem" height="1rem" scale="2" name="code" class="mr-2"></icon>
        h3.text-blue Compétences
      p.mt-4
        ul
          li HTML 5 & CSS 3
          li Javascript (ES6)
          li Ruby
          li Rspec
          li
            | Frameworks
            ul
              li Rails
              li Vue.js
              li Nuxt.js
  .shadow-md.m-1.p-4.mt-4
    .flex.items-center
      <icon width="1rem" height="1rem" scale="2" name="briefcase" class="mr-2"></icon>
      h3.text-blue Expérience
    p.mt-4
      h4
        | Fullstack developer
      p.text-grey-darker Smovin (avr. 2018 - Actuellement)
    p.mt-4
      h4
        | Fullstack developer
      p.text-grey-darker Seraphin SA (sep. 2017 - fev. 1018)
    p.mt-4
      h4
        | Monteur de photomaton
      p.text-grey-darker CheeseBox (2016 - 2017)
    p.mt-4
      h4
        | Caisse/Mise en rayon
      p.text-grey-darker Colruyt (oct. 2015 - avr. 2016)
    p.mt-4
      h4
        | Vendeur comptoir
      p.text-grey-darker Carodec (août 2014)
    p.mt-4
      h4
        | Rénovation toiture
      p.text-grey-darker Elico (août 2013)
  .shadow-md.m-1.p-4.mt-4
    .flex.items-center
      <icon width="1rem" height="1rem" scale="2" name="plane" class="mr-2"></icon>
      h3.text-blue Loisirs
    p.mt-4 Scoutisme, menuiserie, ski, bière, bonne nourriture, sports nautiques, open source, musique
  .shadow-md.m-1.p-4.bg-blue.flex.mt-4.text-white
    .flex.items-center(class="w-1/2")
      <h4>
        <icon width="1rem" height="1rem" scale="2" name="github" class="mr-2"></icon>
        <a class="text-white" href="https://github.com/matthieudou">matthieudou</a>
      </h4>
    .flex.items-center(class="w-1/2")
      <icon width="1rem" height="1rem" scale="2" name="linkedin" class="mr-2"></icon>
      h4
        a.text-white(href="https://www.linkedin.com/in/matthieudou/") Matthieu d'Oultremont
</template>

<script>
import '@/icons/school'
import '@/icons/language'
import '@/icons/code'
import '@/icons/briefcase'
import '@/icons/plane'
import '@/icons/github'
import '@/icons/linkedin'

export default {

}
</script>
