<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      An web application for keeping track of your favourite songs.
    </p>
    <h3></h3>
    <ul>
      <li>
        <a href="#" rel="noopener"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
