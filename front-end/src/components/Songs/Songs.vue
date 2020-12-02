<template>
  <section class="songs-list flex content-center direction-column">
    <SongsSearch />
    <SongsList />
  </section>
</template>

<script>
import SongsSearch from './SongsSearch';
import SongsList from './SongsList';
export default {
  name: 'Songs',
  props: {},
  data() {
    return {};
  },
  components: {
    SongsSearch,
    SongsList,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
