<template>
  <section>
    <Navigation/>
    <Hero/>
    <Project/>
    <Footer/>
  </section>
</template>

<script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue';
  import Hero from '../components/Hero';
  import Navigation from '../components/Navigation';
  import Footer from '../components/Footer';
  import Project from '../components/Project';

  export default {
    name: 'Home',
    components: {
      Project,
      Footer,
      Navigation,
      Hero,
      HelloWorld,
    },
  };
</script>
