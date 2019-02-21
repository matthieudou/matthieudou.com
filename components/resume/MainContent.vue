<template>
  <div class="content">
    <div class="shadow hover:shadow-md m-1 p-4 mt-4">
      <div class="flex items-center">
        <icon width="1rem" height="1rem" scale="2" name="briefcase" class="mr-2"></icon>
        <h3 class="text-blue">Expérience</h3>
      </div>
      <div class="mt-4">
        <h4>Fullstack developer</h4>
        <p class="text-grey-darker">Smovin (avr. 2018 - Actuellement)</p>
      </div>
      <div class="mt-4">
        <h4>Fullstack developer</h4>
        <p class="text-grey-darker">Seraphin SA (sep. 2017 - fev. 1018)</p>
      </div>
      <div class="mt-4">
        <h4>Monteur de photomaton</h4>
        <p class="text-grey-darker">CheeseBox (2016 - 2017)</p>
      </div>
      <div class="mt-4">
        <h4>Caisse/Mise en rayon</h4>
        <p class="text-grey-darker">Colruyt (oct. 2015 - avr. 2016)</p>
      </div>
      <div class="mt-4">
        <h4>Vendeur comptoir</h4>
        <p class="text-grey-darker">Carodec (août 2014)</p>
      </div>
      <div class="mt-4">
        <h4>Rénovation toiture</h4>
        <p class="text-grey-darker">Elico (août 2013)</p>
      </div>
    </div>
    <div class="flex mt-4">
      <div class="shadow hover:shadow-md m-1 p-4 w-1/2">
        <div class="flex items-center">
          <icon width="1rem" height="1rem" scale="2" name="language" class="mr-2"></icon>
          <h3 class="text-blue">Langues</h3>
        </div>
        <div class="mt-4">
          <h4>Français</h4>
          <p class="text-grey-darker">Langue maternelle</p>
        </div>
        <div class="mt-4">
          <h4>Néerlandais</h4>
          <p class="text-grey-darker">Compétence professionnelle</p>
        </div>
        <div class="mt-4">
          <h4>Anglais</h4>
          <p class="text-grey-darker">Compétence professionnelle</p>
        </div>
      </div>
    <div class="shadow hover:shadow-md m-1 p-4 w-1/2">
      <div class="flex items-center">
        <icon width="1rem" height="1rem" scale="2" name="code" class="mr-2"></icon>
        <h3 class="text-blue">Compétences</h3>
      </div>
      <div class="mt-4">
        <ul>
          <li>HTML 5 & CSS 3</li>
          <li>Javascript (ES6)</li>
          <li>Ruby</li>
          <li>Rspec</li>
          <li>Frameworks
            <ul>
              <li>Rails</li>
              <li>Vue.js</li>
              <li>Nuxt.js</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    </div>
    <div class="shadow hover:shadow-md p-4 m-1">
      <div class="flex items-center">
        <icon width="1rem" height="1rem" scale="2" name="school" class="mr-2"></icon>
        <h3 class="text-blue">Formations</h3>
      </div>
      <div class="mt-4">
        <h4>Le Wagon Bootcamp<span class="text-grey-darker"> (juin 2017)</span></h4>
        <p class="text-grey-darker">FullStack Developer, Web Development</p>
      </div>
      <div class="mt-4">
        <h4>Technologie de l’informatique<span class="text-grey-darker"> (sep 2016 - jan 2017)</span></h4>
        <p class="text-grey-darker">Ephec Louvain-la-Neuve | 1<sup>ère</sup> bac</p>
      </div>
      <div class="mt-4">
        <h4>Informatique de gestion<span class="text-grey-darker"> (sep 2014 - juin 2016)</span></h4>
        <p class="text-grey-darker">Institut Paul Lambin | 1<sup>ère</sup> bac</p>
      </div>
      <div class="mt-4">
        <h4>Brevet animateur<span class="text-grey-darker"> (mars 2014)</span></h4>
        <p class="text-grey-darker">ONE | Les Scouts ASBL</p>
      </div>
      <div class="mt-4">
        <h4>Humanités<span class="text-grey-darker"> (juin 2014)</span></h4>
        <p class="text-grey-darker">Sciences 6 - Anglais 4 | Institut de l’Assomption</p>
      </div>
    </div>
    <div class="shadow hover:shadow-md m-1 p-4 mt-4">
      <div class="flex items-center">
        <icon width="1rem" height="1rem" scale="2" name="plane" class="mr-2"></icon>
        <h3 class="text-blue">Loisirs</h3>
      </div>
      <p class="mt-4">Scoutisme, menuiserie, ski, bière, bonne nourriture, sports nautiques, open source, musique</p>
    </div>
    <div class="shadow hover:shadow-md m-1 p-4 bg-blue flex mt-4 text-white">
      <div class="flex items-center w-1/2">
        <h4>
          <icon width="1rem" height="1rem" scale="2" name="github" class="mr-2"></icon>
          <a class="text-white" href="https://github.com/matthieudou">matthieudou</a>
        </h4>
      </div>
      <div class="flex items-center w-1/2">
        <h4>
          <icon width="1rem" height="1rem" scale="2" name="linkedin" class="mr-2"></icon>
          <a class="text-white" href="https://www.linkedin.com/in/matthieudou/">Matthieu d'Oultremont</a>
        </h4>
      </div>
    </div>
  </div>
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
