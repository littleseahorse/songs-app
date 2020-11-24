<template>
  <section class="create-song flex content-center direction-column">
    <h2 class="flex-item uppercase">{{ msg }}</h2>
    <Form
      class="flex direction-row flex-wrap content-center"
      v-on:submit="save"
      autocomplete="off"
    >
      <div class="flex-item flex direction-column vertical-align-center">
        <div
          v-on:click="activate(1)"
          class="input-block"
          v-bind:class="{ active: active_el == 1 }"
        >
          <Field
            id="title"
            type="text"
            name="title"
            v-model="song.title"
            v-bind:class="{ valid: song.title !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="title">Title</label>
          <span
            v-on:click="activate(1)"
            v-bind:class="{ activespan: active_el == 1 }"
          ></span>
          <ErrorMessage name="title" />
        </div>
        <div
          v-on:click="activate(2)"
          class="input-block"
          v-bind:class="{ active: active_el == 2 }"
        >
          <Field
            id="artist"
            type="text"
            name="artist"
            v-model="song.artist"
            v-bind:class="{ valid: song.artist !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="artist">Artist</label>
          <span
            v-on:click="activate(2)"
            v-bind:class="{ activespan: active_el == 2 }"
          ></span>
          <ErrorMessage name="artist" />
        </div>
        <div
          v-on:click="activate(3)"
          class="input-block"
          v-bind:class="{ active: active_el == 3 }"
        >
          <Field
            id="genre"
            type="text"
            name="genre"
            v-model="song.genre"
            v-bind:class="{ valid: song.genre !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="genre">Genre</label>
          <span
            v-on:click="activate(3)"
            v-bind:class="{ activespan: active_el == 3 }"
          ></span>
          <ErrorMessage name="genre" />
        </div>
        <div
          v-on:click="activate(4)"
          class="input-block"
          v-bind:class="{ active: active_el == 4 }"
        >
          <Field
            id="album"
            type="text"
            name="album"
            v-model="song.album"
            v-bind:class="{ valid: song.album !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="album">Album</label>
          <span
            v-on:click="activate(4)"
            v-bind:class="{ activespan: active_el == 4 }"
          ></span>
          <ErrorMessage name="album" />
        </div>
        <div
          v-on:click="activate(5)"
          class="input-block"
          v-bind:class="{ active: active_el == 5 }"
        >
          <Field
            id="album-image"
            type="text"
            name="album-image"
            v-model="song.albumImageUrl"
            v-bind:class="{ valid: song.albumImageUrl !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="album-image">Album Image</label>
          <span
            v-on:click="activate(5)"
            v-bind:class="{ activespan: active_el == 5 }"
          ></span>
          <ErrorMessage name="album-image" />
        </div>
        <div
          v-on:click="activate(6)"
          class="input-block"
          v-bind:class="{ active: active_el == 6 }"
        >
          <Field
            id="youtube-id"
            type="text"
            name="youtube-id"
            v-model="song.youtubeId"
            v-bind:class="{ valid: song.youtubeId !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="youtube-id">YouTube Id</label>
          <span
            v-on:click="activate(6)"
            v-bind:class="{ activespan: active_el == 6 }"
          ></span>
          <ErrorMessage name="youtube-id" />
        </div>
        <div
          v-on:click="activate(7)"
          class="input-block"
          v-bind:class="{ active: active_el == 7 }"
        >
          <Field
            id="tab"
            type="text"
            name="tab"
            v-model="song.tab"
            v-bind:class="{ valid: song.tab !== '' }"
            as="input"
            :rules="isRequired"
          />
          <label for="tab">Tab</label>
          <span
            v-on:click="activate(7)"
            v-bind:class="{ activespan: active_el == 7 }"
          ></span>
          <ErrorMessage name="tab" />
        </div>
      </div>
      <div class="flex-item flex direction-column vertical-align-center">
        <div
          v-on:click="activate(8)"
          class="input-block"
          v-bind:class="{ active: active_el == 8 }"
        >
          <Field
            id="lyrics"
            name="lyrics"
            v-model="song.lyrics"
            v-bind:class="{ valid: song.lyrics !== '' }"
            rows="25"
            style="height:95.4%;resize:none;"
            as="textarea"
            :rules="isRequired"
          />
          <label for="lyrics">Lyrics</label>
          <span
            v-on:click="activate(8)"
            v-bind:class="{ activespan: active_el == 8 }"
          ></span>
          <ErrorMessage name="lyrics" />
        </div>
      </div>
      <button type="submit" class="uppercase">Save Changes</button>
    </Form>
  </section>
</template>

<script>
import SongsService from '../services/SongsService';
import { Field, Form, ErrorMessage } from 'vee-validate';
export default {
  name: 'Create-Song',
  components: {
    Field,
    Form,
    ErrorMessage,
  },
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
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    const response = await SongsService.show(songId);
    this.song = response.data;
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
    isRequired(value) {
      if (value && value.trim()) {
        return true;
      }
      return 'This is required';
    },
    async save() {
      const songId = this.$store.state.route.params.songId;
      try {
        await SongsService.put(this.song);
        this.$router.push({
          name: 'View-Song',
          params: {
            songId: songId,
          },
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
span[role='alert'] {
  position: absolute;
  display: block;
  left: 50%;
  transform: translateX(-50%);
  color: #f00;
  font-size: 14px;
}
</style>
