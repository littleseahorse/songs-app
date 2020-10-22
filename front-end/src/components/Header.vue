<template>
  <header class="header flex content-center">
    <div
      id="nav"
      class="flex direction-row content-around vertical-align-center"
    >
      <h1 class="uppercase">{{ msg }}</h1>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/register">Register</router-link>
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
.header h1 {
  margin: 0;
  font-size: 1.15em;
}
</style>
