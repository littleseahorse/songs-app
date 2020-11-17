<template>
  <section class="songs flex content-center direction-column">
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg }}</span
      ><fa
        v-on:click="
          navigateTo({
            name: 'Create-Song',
          })
        "
        class="flex-item plus-icon"
        icon="plus-circle"
      ></fa>
    </h2>
    <div class="flex-item flex direction-column">
      <div
        class="flex direction-row content-between song"
        v-for="song in songs"
        v-bind:key="song.id"
      >
        <div class="flex-item flex direction-column vertical-align-start">
          <span class="song-title">
            {{ song.title }}
          </span>
          <span class="song-artist">
            {{ song.artist }}
          </span>
          <span class="song-album">
            {{ song.album }}
          </span>
          <button
            type="submit"
            v-on:click="
              navigateTo({
                name: 'View-Song',
                params: { songId: song.id },
              })
            "
            class="uppercase"
          >
            View Song
          </button>
        </div>
        <div class="flex-item">
          <img v-bind:src="song.albumImageUrl" alt="" />
        </div>
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
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song {
  padding: 15px;
}
.song span {
  display: block;
  margin: 1px;
}
.song-title {
  font-size: 26px;
}
.song-artist {
  font-size: 20px;
}
.song-album {
  font-size: 14px;
}
svg {
  width: 22px;
  border-radius: 50%;
  transition: ease-in-out 0.4s;
}
svg:hover {
  transform: scale(1.3);
  cursor: pointer;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.2);
}
</style>
