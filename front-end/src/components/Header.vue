<template>
  <header class="header flex content-center">
    <div
      id="nav"
      class="flex direction-row content-around vertical-align-center"
    >
      <h2 class="uppercase">{{ msg }}</h2>
      <div>|</div>
      <router-link to="/">Home</router-link>
      <div>|</div>
      <router-link to="/about">About</router-link>
      <div>|</div>
      <router-link v-if="!$store.state.isUserLoggedIn" to="/register"
        >Register</router-link
      >
      <div v-if="!$store.state.isUserLoggedIn">|</div>
      <router-link v-if="!$store.state.isUserLoggedIn" to="/login"
        >Log In</router-link
      >
      <router-link v-if="$store.state.isUserLoggedIn" @click="logout" to="/"
        >Log Out</router-link
      >
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      msg: 'Songs Tracker',
    };
  },
  methods: {
    logout() {
      this.$store.dispatch('setToken', null);
      this.$store.dispatch('setUser', null);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  position: relative;
  width: 100%;
  height: 100px;
  margin: 0 0 100px;
}
.header h2 {
  margin: 0;
  padding: 0;
}
</style>
