<template>
  <div
    v-if="$store.state.isUserLoggedIn"
    class="flex-item flex direction-column"
  >
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg }}</span>
    </h2>
    <div class="flex-item flex direction-column">
      <ViewedSongsTable />
    </div>
  </div>
</template>

<script>
import ViewedSongsTable from '../Table/ViewedSongsTable.vue';
export default {
  name: 'ViewedSongs',
  props: {},
  data() {
    return {
      msg: 'Viewed Songs',
    };
  },
  components: {
    ViewedSongsTable,
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
