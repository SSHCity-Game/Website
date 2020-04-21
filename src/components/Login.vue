<template>
  <section>
    <div class="container">
      <form @submit.prevent="login">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Connexion</p>
          </header>

          <section class="modal-card-body">
            <b-field label="Email ou Nom d'utilisateur">
              <b-input placeholder="Ex: contact@safexty.com" v-model="email" required/>
            </b-field>

            <b-field label="Mot de passe">
              <b-input type="password"
                       v-model="password"
                       placeholder="Mot de passe"
                       password-reveal
                       required>
              </b-input>
            </b-field>

            <b-field>
              <b-button type="is-primary" v-on:click="login">Se connecter</b-button>
            </b-field>
            <div class="alert is-danger" v-if="error">{{ error }}</div>
          </section>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      error: false,
      email: '',
      password: '',
    };
  },
  methods: {
    login() {
      this.$http.post('/users/authenticate', {
        username: this.email,
        password: this.password,
      })
        .then((request) => this.loginSuccessful(request))
        .catch(() => this.loginFailed());
    },
    loginSuccessful(req) {
      if (!req.data.token) {
        this.loginFailed();
        return;
      }

      localStorage.token = req.data.token;
      this.error = false;

      this.$router.go(0); // refresh the page
    },
    loginFailed() {
      this.error = "Nom d'utilisateur ou mot de passe incorrect.";
      delete localStorage.token;
    },
  },
};
</script>

<style scoped>

</style>
