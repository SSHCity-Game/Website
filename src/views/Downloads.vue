<template>
  <section>
    <Navigation/>
    <div class="container top-padding" style="margin-top: 3em">
      <h1 class="title">Les téléchargements</h1>
      <h2 class="subtitle">
        Ca clic
      </h2>
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
