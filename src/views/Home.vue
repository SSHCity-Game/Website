<template>
  <section>
    <Navigation/>
    <Hero/>
    <Project/>
    <Footer/>
  </section>
</template>

<script>
import Hero from '../components/Hero.vue';
import Navigation from '../components/Navigation.vue';
import Footer from '../components/Footer.vue';
import Project from '../components/Project.vue';

export default {
  name: 'Home',
  components: {
    Project,
    Footer,
    Navigation,
    Hero,
  },
};
</script>
