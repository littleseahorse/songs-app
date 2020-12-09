<template>
    <tr>
        <th v-for="(header, $index) in header"
            v-bind:key="$index"
            v-bind:header="header">
            <td>{{header.identifier}}</td>
        </th>
    </tr>
</template>

<script>
export default {
  name: 'TableHeader',
  props: ['header'],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
tr {
  background-color: #ffffff;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
tr th {
  min-width: 25%;
}
tr th td {
  display: inline-table;
  line-height: 1.4;
  font-size: 15px;
  letter-spacing: 1px;
  color:#48d1cc;
  font-weight: 600;
  text-transform: capitalize;
}
</style>