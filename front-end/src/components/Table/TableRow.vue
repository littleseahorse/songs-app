<template>
  <tr>
    <td v-for="(cell, $index) in row" v-bind:key="$index">
      {{ cell.value }}
    </td>
  </tr>
</template>

<script>
export default {
  name: 'TableRow',
  props: ['row'],
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  cursor: pointer;
}
tr:hover {
  color: #7d9c9b;
}
</style>
