<template>
  <section>
    <Navigation/>
    <section class="section has-background-light">
      <div class="container top-padding">
        <h1 class="title">Le project</h1>
        <h2 class="subtitle">
          Voici le descriptif technique du projet avec les technologies utilisées !
        </h2>
      </div>
      <div class="container top-padding">
        <p>Le jeu est basé sur <a href="https://godotengine.org/">GodotEngine</a>.</p>
        <p>Le site internet utilise <a href="https://nodejs.org/">Node.JS</a>, <a
          href="https://vuejs.org/">Vue.JS</a>, <a href="https://buefy.org/">Buefy</a> (<a
          href="https://bulma.io/">Bulma</a>).</p>
      </div>
      <div class="container top-padding">
        <h1 class="title">Les bibliothèques :</h1>
        <h2 class="subtitle"></h2>
      </div>
      <div class="container">
        <p>L'ensemble des ressources imagées du jeu proviennent de <a
          href="https://fr.freepik.com/">FreePik</a>.</p>
        <p>Les sons proviennent de <a href="https://lasonotheque.org/">La Sonotheque</a>.</p>
      </div>
    </section>
    <Footer />
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Infos',
  components: { Footer, Navigation },
};
</script>

<style scoped>
  .top-padding {
    padding-top: 1em;
  }
</style>
