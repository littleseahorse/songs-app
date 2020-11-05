<template>
  <section class="songs flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <div class="flex-item flex direction-column vertical-align-center">
      <div v-for="song in songs" v-bind:key="song.id">
        {{ song.title }}
        {{ song.artist }}
        {{ song.album }}
      </div>
    </div>
  </section>
</template>

<script>
import SongsService from '../services/SongsService';
export default {
  name: 'Songs',
  props: {},
  data() {
    return {
      msg: 'Songs',
      songs: null,
    };
  },
  async mounted() {
    const response = await SongsService.index();
    this.songs = response.data;
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
