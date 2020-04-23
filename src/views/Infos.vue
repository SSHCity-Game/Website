<template>
  <section>
    <Navigation />
    <div class="container top-padding">
      <h1 class="title">Le projet</h1>
      <h2 class="subtitle">
        Voici le descriptif technique du projet avec les techologies utilisées !
      </h2>
    </div>
    <div class="container top-padding">
        Le jeu est basé sur <a href="https://godotengine.org/">GodotEngine</a>.
    </div>
  </section>
</template>

<script>
import Navigation from '../components/Navigation.vue';

export default {
  name: 'Infos',
  components: { Navigation },
};
</script>

<style scoped>
.top-padding {
  padding-top: 1em;
}
</style>
