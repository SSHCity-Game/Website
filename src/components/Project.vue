<template>
  <section>
    <Team />
  </section>
</template>

<script>
import Team from './Team.vue';

export default {
  name: 'Project',
  components: { Team },
};
</script>

<style scoped>
/*  Fix on mobile*/
@media only screen and (min-width: 1300px) {
  .center-content {
    padding-left: 20em;
    padding-right: 20em;
  }
}

</style>
