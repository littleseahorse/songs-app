<template>
  <div class="register flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <div class="flex-item flex direction-column vertical-align-center">
      <input type="email" name="email" placeholder="email" v-model="email" />
      <input
        type="password"
        name="password"
        placeholder="password"
        v-model="password"
      />
      <div class="error" v-html="error" />
      <button class="uppercase" @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      msg: 'This your chance to register!',
      email: '',
      password: '',
      error: null,
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password,
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register {
  max-width: 95%;
  width: 600px;
  margin: 0 auto;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
}
.register h2 {
  margin: 0 0 10px;
  padding: 15px 0 10px;
  line-height: 1.5;
  font-size: 1.15em;
  background-color: #48d1cc;
}
</style>
