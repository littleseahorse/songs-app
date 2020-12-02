<template>
  <div class="home">
    <Hello msg="Welcome to Songs Tracker App" />
  </div>
</template>

<script>
// @ is an alias to /src
import Hello from './Hello.vue';

export default {
  name: 'Home',
  components: {
    Hello,
  },
};
</script>
