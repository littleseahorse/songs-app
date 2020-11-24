<template>
  <div class="flex-item flex direction-column">
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg_metadata }}</span>
    </h2>
    <div class="flex-item flex direction-column">
      <div class="song-data flex direction-row content-between">
        <div class="flex-item flex direction-column vertical-align-start">
          <p>
            <i>Title: </i><span class="song-title">{{ song.title }}</span>
          </p>
          <p>
            <i>Artist: </i><span class="song-artist">{{ song.artist }}</span>
          </p>
          <p>
            <i>Genre: </i><span class="song-genre">{{ song.genre }}</span>
          </p>
          <p>
            <i>Other Info: </i><span class="song-tab">{{ song.tab }}</span>
          </p>
        </div>
        <div class="flex-item">
          <img v-bind:src="song.albumImageUrl" alt="" />
          <p>
            <i>Album: </i><span class="song-album">{{ song.album }}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['song'],
  data() {
    return {
      msg_metadata: 'Song Metadata',
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
