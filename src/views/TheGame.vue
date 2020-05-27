<template>
  <section>
    <Navigation/>
    <section class="section has-background-light">
      <div class="container top-padding">
        <h1 class="title is-size-1">Le jeu</h1>
        <div class="container">
        <h4 class="title is-size-4">Présentation</h4>
          <p>Notre projet est un jeu vidéo, qui se rapproche d’un City-Builder centré
            sur le pôle de secours, il est réalisé en vue 2D isométrique.
            La visée principale de notre jeu est d’apprendre à gérer la construction
            d’une ville et de son service de secours. Le joueur doit donc bâtir sa ville
            autour de cet axe. Des incidents (accident de voiture, malaise, maladie...)
            apparaissent de manière aléatoire et décime sa population. Pour avancer dans
            le jeu le joueur devra prendre en charge le plus grand nombre de patients
            afin de gagner les points nécessaires à la construction et à l’amélioration des
            bâtiments, du pôle de secours ou simplement des bâtiments résidentiels.</p>
        </div>
        <div class="container top-padding">
        <h4 class="title is-size-4">Historique</h4>
          <p>Notre projet est un jeu vidéo, qui se rapproche d’un City-Builder centré
            sur le pôle de secours, il est réalisé en vue 2D isométrique.
            La visée principale de notre jeu est d’apprendre à gérer la construction
            d’une ville et de son service de secours. Le joueur doit donc bâtir sa ville
            autour de cet axe. Des incidents (accident de voiture, malaise, maladie...)
            apparaissent de manière aléatoire et décime sa population. Pour avancer dans
            le jeu le joueur devra prendre en charge le plus grand nombre de patients
            afin de gagner les points nécessaires à la construction et à l’amélioration des
            bâtiments, du pôle de secours ou simplement des bâtiments résidentiels.</p>
        </div>
      </div>
    </section>
    <Hero />
    <Footer />
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Hero from '../components/Hero.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Infos',
  components: { Footer, Hero, Navigation },
};
</script>

<style scoped>
  .top-padding {
    padding-top: 1em;
  }
</style>
