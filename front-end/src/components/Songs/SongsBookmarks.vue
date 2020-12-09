<template>
  <div
    v-if="$store.state.isUserLoggedIn"
    class="flex-item flex direction-column"
  >
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg }}</span>
    </h2>
    <div class="flex-item flex direction-column">
      <BookmarksTable />
    </div>
  </div>
</template>

<script>
import BookmarksTable from '../Table/BookmarksTable.vue';
export default {
  name: 'SongsBookmarks',
  props: {},
  data() {
    return {
      msg: 'Bookmarks',
    };
  },
  components: {
    BookmarksTable,
  },
  computed: {},
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
