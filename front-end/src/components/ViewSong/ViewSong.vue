<template>
  <section class="song-panel flex flex-wrap content-start direction-row">
    <SongMetadata v-bind:song="song" />
    <YouTube v-bind:youtubeId="song.youtubeId" />
    <!-- <Lyrics v-bind:lyrics="song.lyrics" /> -->

    <div class="flex-item flex direction-column">
      <h2 class="flex-item uppercase flex direction-row content-between">
        <span class="flex-item">{{ msg_lyrics }}</span>
      </h2>
      <div class="flex-item flex direction-column">
        <div class="song-data flex direction-row content-center">
          <div class="flex-item flex direction-column vertical-align-start">
            <p>
              <textarea
                class="song-lyrics"
                v-model="song.lyrics"
                readonly
              ></textarea>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import SongsService from '../../services/SongsService';
import SongMetadata from './SongMetadata.vue';
import YouTube from './YouTube.vue';
// import Lyrics from './Lyrics.vue';
export default {
  name: 'View-Song',
  props: {},
  data() {
    return {
      msg_lyrics: 'Lyrics',
      song: {},
    };
  },
  components: {
    SongMetadata,
    YouTube,
    // Lyrics,
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    const response = await SongsService.show(songId);
    this.song = response.data;
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.song-panel {
  width: 95vw;
}
.song-panel > .flex-item {
  width: 50%;
}
textarea {
  min-width: 385px;
  min-height: 505px;
  margin: 0;
  padding: 0;
  font-size: 12px;
  outline: none;
  resize: none;
  border: 0;
}
</style>
