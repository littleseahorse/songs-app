<template>
  <section class="create-song flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <form
      class="flex direction-row flex-wrap content-center"
      v-on:submit.prevent="create"
      autocomplete="off"
    >
      <div class="flex-item flex direction-column vertical-align-center">
        <div
          v-on:click="activate(1)"
          class="input-block"
          v-bind:class="{ active: active_el == 1 }"
        >
          <input
            id="title"
            type="text"
            name="title"
            v-model="song.title"
            v-bind:class="{ valid: song.title !== '' }"
          />
          <label for="title">Title</label>
          <span
            v-on:click="activate(1)"
            v-bind:class="{ activespan: active_el == 1 }"
          ></span>
        </div>
        <div
          v-on:click="activate(2)"
          class="input-block"
          v-bind:class="{ active: active_el == 2 }"
        >
          <input
            id="artist"
            type="text"
            name="artist"
            v-model="song.artist"
            v-bind:class="{ valid: song.artist !== '' }"
          />
          <label for="artist">Artist</label>
          <span
            v-on:click="activate(2)"
            v-bind:class="{ activespan: active_el == 2 }"
          ></span>
        </div>
        <div
          v-on:click="activate(3)"
          class="input-block"
          v-bind:class="{ active: active_el == 3 }"
        >
          <input
            id="genre"
            type="text"
            name="genre"
            v-model="song.genre"
            v-bind:class="{ valid: song.genre !== '' }"
          />
          <label for="genre">Genre</label>
          <span
            v-on:click="activate(3)"
            v-bind:class="{ activespan: active_el == 3 }"
          ></span>
        </div>
        <div
          v-on:click="activate(4)"
          class="input-block"
          v-bind:class="{ active: active_el == 4 }"
        >
          <input
            id="album"
            type="text"
            name="album"
            v-model="song.album"
            v-bind:class="{ valid: song.album !== '' }"
          />
          <label for="album">Album</label>
          <span
            v-on:click="activate(4)"
            v-bind:class="{ activespan: active_el == 4 }"
          ></span>
        </div>
        <div
          v-on:click="activate(5)"
          class="input-block"
          v-bind:class="{ active: active_el == 5 }"
        >
          <input
            id="album-image"
            type="text"
            name="album-image"
            v-model="song.albumImageUrl"
            v-bind:class="{ valid: song.albumImageUrl !== '' }"
          />
          <label for="album-image">Album Image</label>
          <span
            v-on:click="activate(5)"
            v-bind:class="{ activespan: active_el == 5 }"
          ></span>
        </div>
        <div
          v-on:click="activate(6)"
          class="input-block"
          v-bind:class="{ active: active_el == 6 }"
        >
          <input
            id="youtube-id"
            type="text"
            name="youtube-id"
            v-model="song.youtubeId"
            v-bind:class="{ valid: song.youtubeId !== '' }"
          />
          <label for="youtube-id">YouTube Id</label>
          <span
            v-on:click="activate(6)"
            v-bind:class="{ activespan: active_el == 6 }"
          ></span>
        </div>
        <div
          v-on:click="activate(7)"
          class="input-block"
          v-bind:class="{ active: active_el == 7 }"
        >
          <input
            id="tab"
            type="text"
            name="tab"
            v-model="song.tab"
            v-bind:class="{ valid: song.tab !== '' }"
          />
          <label for="tab">Tab</label>
          <span
            v-on:click="activate(7)"
            v-bind:class="{ activespan: active_el == 7 }"
          ></span>
        </div>
      </div>
      <div class="flex-item flex direction-column vertical-align-center">
        <div
          v-on:click="activate(8)"
          class="input-block"
          v-bind:class="{ active: active_el == 8 }"
        >
          <textarea
            id="lyrics"
            name="lyrics"
            v-model="song.lyrics"
            v-bind:class="{ valid: song.lyrics !== '' }"
            rows="25"
            style="height:95.4%;resize:none;"
          ></textarea>
          <label for="lyrics">Lyrics</label>
          <span
            v-on:click="activate(8)"
            v-bind:class="{ activespan: active_el == 8 }"
          ></span>
        </div>
      </div>
      <div class="error" v-html="error" />
      <button class="uppercase">Create Song</button>
    </form>
  </section>
</template>

<script>
import SongsService from '../services/SongsService';
export default {
  name: 'Create-Song',
  props: {},
  data() {
    return {
      msg: 'Song Metadata',
      active_el: 0,
      song: {
        title: '',
        artist: '',
        genre: '',
        album: '',
        albumImageUrl: '',
        youtubeId: '',
        lyrics: '',
        tab: '',
      },
    };
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
    async create() {
      try {
        await SongsService.post(this.song);
        this.$router.push({
          name: 'Songs',
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-song {
  width: 100vw;
}
.create-song h2 {
  width: 100%;
}
.input-block {
  position: relative;
  width: 100%;
}
.flex-item {
  width: 50%;
}
button {
  margin: 30px 0;
}
label {
  position: absolute;
  left: 18%;
  top: 35px;
  font-size: 18px;
  font-weight: 200;
  color: #cecece;
  transition: all 0.5s ease;
  pointer-events: none;
  cursor: text;
}
input,
textarea {
  width: 65% !important;
  height: 40px;
  padding: 17px 5px 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #cecece;
}
.valid ~ label,
.active > input:focus ~ label,
.active > textarea:focus ~ label {
  display: block;
  top: 0px;
  color: #2f4f4f;
  font-size: 13px;
}
.active > input:focus ~ .activespan,
.active > textarea:focus ~ .activespan {
  position: absolute;
  height: 1px;
  right: 43.5%;
  bottom: 0;
  content: ' ';
  background-color: #2f4f4f;
  transform: scaleX(5);
}
.active > .activespan {
  transition: all ease 0.5s;
  width: 13%;
  transform: scaleX(1);
}
</style>
