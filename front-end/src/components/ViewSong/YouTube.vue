<template>
  <div class="flex-item flex direction-column">
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg_youtube }}</span>
    </h2>
    <div class="flex-item flex direction-column">
      <div class="song-data flex direction-row content-center">
        <div class="flex-item flex direction-column vertical-align-start">
          <p>
            <vue-plyr>
              <div>
                <iframe
                  v-if="youtubeId"
                  v-bind:src="mySrc"
                  allowfullscreen
                  allowtransparency
                  width="500"
                  height="280"
                ></iframe>
              </div>
            </vue-plyr>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['youtubeId'],
  data() {
    return {
      msg_youtube: 'YouTube Video',
    };
  },
  methods: {},
  computed: {
    mySrc: {
      get() {
        return `https://www.youtube.com/embed/${this.youtubeId}`;
      },
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
