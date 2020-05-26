<template>
  <section>
    <Navigation/>
    <section class="section has-background-light">
      <div class="container top-padding" style="margin-top: 3em">
        <h1 class="title">Les téléchargements</h1>
        <h2 class="subtitle">
          Ca clic
        </h2>
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
