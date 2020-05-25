<template>
  <section>
    <div class="container">
      <form @submit.prevent="signUp">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">S'inscrire</p>
          </header>

          <section class="modal-card-body">
            <b-field label="Nom d'utilisateur">
              <b-input placeholder="JDup06" v-model="username" required/>
            </b-field>

            <b-field label="Nom">
              <b-input placeholder="Dupond" v-model="lastName" required/>
            </b-field>

            <b-field label="Prénom">
              <b-input placeholder="Jean" v-model="firstName" required/>
            </b-field>

            <b-field label="Email">
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

            <b-field label="Confirmation Mot de passe">
              <b-input type="password"
                       v-model="password2"
                       placeholder="Confirmation"
                       password-reveal
                       required>
              </b-input>
            </b-field>

            <b-field>
              <b-button type="is-primary" v-on:click="signUp">S'inscrire</b-button>
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
  name: 'SignUp',
  data() {
    return {
      error: false,
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password2: '',
      password: '',
    };
  },
  methods: {
    arePasswordCorrect() {
      if (this.error) this.error = false;
      if (this.password !== this.password2) {
        this.error = 'Les mots de passes ne correspondent pas';
      }
    },
    signUp() {
      this.arePasswordCorrect();
      if (this.error) {
        return;
      }
      this.$http.post('/users', {
        username: this.email,
        password: this.password,
        email: this.email,
        firstName: this.firstName,
        lastName: this.lastName,
      })
        .then((request) => this.signUpSuccessful(request))
        .catch(() => this.signUpFailed());
    },
    signUpSuccessful(req) {
      if (!req.data.token) {
        this.loginFailed();
        return;
      }

      localStorage.token = req.data.token;
      this.error = false;

      this.$router.go(0); // refresh the page
    },
    signUpFailed() {
      this.error = 'Impossible de s\'inscrire.';
    },
  },
};
</script>

<style scoped>

</style>
