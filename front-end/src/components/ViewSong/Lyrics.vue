<template>
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
              v-model="song_prop"
              readonly
            ></textarea>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Lyrics',
  // props: ['song'],
  props: ['song-prop'],
  // props: ['lyrics'],
  data() {
    return {
      song_prop: this.song,
      msg_lyrics: 'Lyrics',
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
