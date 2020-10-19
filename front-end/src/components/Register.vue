<template>
  <div class="register">
    <h1>{{ msgReg }}</h1>
    <input type="email" name="email" placeholder="email" v-model="email" />
    <input
      type="password"
      name="password"
      placeholder="password"
      v-model="password"
    />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from '../services/AuthenticationService';
export default {
  name: 'Register',
  props: {},
  data() {
    return {
      msgReg: 'This your chance to register!',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      await AuthenticationService.register({
        email: this.email,
        password: this.password,
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
