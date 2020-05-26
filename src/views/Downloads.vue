<template>
  <section>
    <Navigation/>
    <section class="section has-background-light">
      <div class="container" style="margin-top: 3em">
        <h1 class="title is-size-1">Les téléchargements</h1>
        <h2 class="subtitle">
          Retrouvez l'ensemble des téléchargements associés au jeu.
        </h2>
      </div>
      <div class="container top-padding">
        <h1 class="title">Le jeu</h1>
        <div class="buttons">
          <a href="https://github.com/SAFExTY/SSHCity/releases/download/1.0.0/Release-1.0.0.zip"
             target="_blank">
            <b-button type="is-primary" icon-left="download">Télécharger le jeu</b-button>
          </a>
          <a href="#" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-info" icon-left="book">Manuel D'installation</b-button>
          </a>
          <a href="#" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-info" icon-left="book">Manuel D'utilisation</b-button>
          </a>
        </div>
        <p>Vous devez posseder un ordinateur avec Windows 10 64 bits.</p>
      </div>
      <div class="container top-padding">
        <h1 class="title">Le projet</h1>
        <div class="buttons">
          <a href="https://github.com/SAFExTY/SSHCity/releases/download/1.0.0/Release-1.0.0.zip"
             target="_blank">
            <b-button type="is-warning" icon-left="download">Le rapport de projet</b-button>
          </a>
          <a href="#" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-warning" icon-left="feather" inverted>Version allégée</b-button>
          </a>
          <a href="Licenses.zip" style="padding-left: 1em"
             target="_blank">
            <b-button type="is-success" icon-left="gavel">Licenses</b-button>
          </a>
        </div>
      </div>
    </section>
    <Footer/>
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Infos',
  components: {
    Footer,
    Navigation,
  },
};
</script>

<style scoped>
  .top-padding {
    padding-top: 1em;
  }
</style>
