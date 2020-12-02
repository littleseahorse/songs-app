<template>
  <div>
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
        class="song-data flex direction-row content-between"
        v-for="song in songs"
        v-bind:key="song.id"
      >
        <div class="flex-item flex direction-column vertical-align-start">
          <p>
            <i>Title: </i><span class="song-title">{{ song.title }}</span>
          </p>
          <p>
            <i>Artist: </i><span class="song-artist">{{ song.artist }}</span>
          </p>
          <p>
            <i>Album: </i><span class="song-album">{{ song.album }}</span>
          </p>
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
  </div>
</template>

<script>
import SongsService from '../../services/SongsService';
export default {
  name: 'SongsList',
  props: {},
  data() {
    return {
      msg: 'Songs',
      songs: null,
    };
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler(value) {
        const response = await SongsService.index(value);
        this.songs = response.data;
      },
    },
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
.song-data p {
  text-align: left;
}
img {
  width: 200px;
}
</style>
