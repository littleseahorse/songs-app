<template>
  <section class="login flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <form v-on:submit.prevent="login">
      <div class="flex-item flex direction-column vertical-align-center">
        <input type="email" name="email" placeholder="Email" v-model="email" />
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
        />
        <div class="error" v-html="error" />
        <button type="submit" class="uppercase">Login</button>
      </div>
    </form>
  </section>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  name: 'Login',
  props: {},
  data() {
    return {
      msg: 'Welcome back! Have fun!',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password,
        });
        this.$store.dispatch('setToken', response.data.token);
        this.$store.dispatch('setUser', response.data.user);
        this.$router.push({
          name: 'Songs',
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
