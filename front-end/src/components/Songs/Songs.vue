<template>
  <section class="songs-list flex flex-wrap content-center direction-row">
    <SongsBookmarks />
    <ViewedSongs />
    <div class="flex-item flex direction-column">
      <SongsSearch />
      <SongsList />
    </div>
  </section>
</template>

<script>
import SongsBookmarks from './SongsBookmarks';
import ViewedSongs from './ViewedSongs';
import SongsSearch from './SongsSearch';
import SongsList from './SongsList';
export default {
  name: 'Songs',
  props: {},
  data() {
    return {};
  },
  components: {
    SongsBookmarks,
    SongsSearch,
    SongsList,
    ViewedSongs,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.songs-list {
  width: 95vw;
}
.songs-list > .flex-item {
  width: 48%;
  margin: 0.5%;
}
</style>
