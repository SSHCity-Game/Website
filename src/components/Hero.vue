<template>
  <section>
    <b-carousel :pause-hover=false>
      <b-carousel-item :key="i" v-for="(carousel, i) in carousels">
        <section :class="`hero is-large is-dark is-bold`">
          <div :style="{ backgroundImage: 'url(' + carousel.img + ')' }"
               class="screen-hero hero-body has-text-centered"/>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  name: 'Hero',
  data() {
    return {
      carousels: [
        {
          // eslint-disable-next-line global-require
          img: require('../assets/slides/screen.png'),
        },
        {
          // eslint-disable-next-line global-require
          img: require('../assets/slides/screen2.png'),
        },
      ],
    };
  },
};
</script>

<style scoped>
  .screen-hero {
    background-size: cover;
    background-position: center;
  }
</style>
