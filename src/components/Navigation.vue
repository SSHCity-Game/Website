<template>
  <section>
    <b-navbar :fixed-top=true :spaced=true type="is-black">
      <template slot="brand">
        <b-navbar-item :to="{ path: '/' }" tag="router-link">
          <img
            :src="require('../assets/logo.png')"
            alt="Ca c'est du jeu"
          >
        </b-navbar-item>
      </template>
      <template slot="start">
        <b-navbar-item :to="{ path: '/project' }" tag="router-link">
          Le projet
        </b-navbar-item>
        <!-- <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown> -->
      </template>

      <template slot="end">
        <b-navbar-item tag="div">
          <div v-if="!currentUser" class="buttons">
            <a class="button is-primary" @click="signUp">
              <strong>Sign up</strong>
            </a>
            <b-button class="is-light" @click="login">Se connecter</b-button>
          </div>
          <div v-if="currentUser" class="buttons">
            <b-button class="is-primary" @click="logout">Se déconnecter</b-button>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Login from './Login.vue';
import SignUp from './SignUp.vue';

export default {
  name: 'Navigation',
  computed: {
    ...mapGetters({ currentUser: 'currentUser' }),
  },
  created() {
    this.checkCurrentLogin();
  },
  updated() {
    this.checkCurrentLogin();
  },
  methods: {
    checkCurrentLogin() {
      if (!this.currentUser && this.$route.path === '/') {
        this.$router.push(`/?redirect=${this.$route.path}`);
      }
    },
    login() {
      // From inside Vue instance
      this.$buefy.modal.open({
        parent: this,
        component: Login,
        hasModalCard: true,
        trapFocus: true,
      });
    },
    signUp() {
      // From inside Vue instance
      this.$buefy.modal.open({
        parent: this,
        component: SignUp,
        hasModalCard: true,
        trapFocus: true,
      });
    },
    logout() {
      // From inside Vue instance
      delete localStorage.token;
      this.$store.dispatch('logout');
      this.$router.go(0);
    },
  },
};
</script>

<style scoped>
</style>
