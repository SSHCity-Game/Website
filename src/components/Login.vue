<template>
  <section>
    <div class="container">
      <form @submit.prevent="login">
        <div class="modal-card" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Connexion</p>
          </header>

          <section class="modal-card-body">
            <b-field label="Email">
              <b-input placeholder="Email" v-model="email" type="email" required/>
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
      isEmailValid: true,
      email: '',
      password: '',
    };
  },
  methods: {
    testEmail() {
      const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      this.isEmailValid = re.test(this.email);
    },
    login() {
      console.log(this.email);
      console.log(this.password);
    },
  },
};
</script>

<style scoped>

</style>
