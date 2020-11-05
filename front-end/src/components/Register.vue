<template>
  <section class="register flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <form v-on:submit.prevent="register" autocomplete="off">
      <div class="flex-item flex direction-column vertical-align-center">
        <input type="email" name="email" placeholder="Email" v-model="email" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
          autocomplete="new-password"
        />
        <div class="error" v-html="error" />
        <button class="uppercase">Register</button>
      </div>
    </form>
  </section>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      msg: 'Your chance to register!',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
