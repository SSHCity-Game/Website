<template>
  <b-navbar :fixed-top=true :spaced=true type="is-black">
    <template slot="brand">
      <b-navbar-item :to="{ path: '/' }" tag="router-link">
        <img
          :src="require('../assets/logo.png')"
          alt="Lightweight UI components for Vue.js based on Bulma"
        >
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item :to="{ path: '/' }" tag="router-link">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <b-button class="is-light" @click="login">Se connecter</b-button>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
import Login from './Login.vue';

export default {
  name: 'Navigation',
  methods: {
    login() {
      // From inside Vue instance
      this.$buefy.modal.open({
        parent: this,
        component: Login,
        hasModalCard: true,
        trapFocus: true,
      });
    },
  },
};
</script>

<style scoped>
</style>
