<template>
  <div class="flex-item flex direction-column">
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg }}</span>
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
          <div
            class="flex-item flex direction-column vertical-align-center content-center"
          >
            <button
              v-if="isUserLoggedIn"
              v-on:click="
                navigateTo({
                  name: 'Edit-Song',
                })
              "
              type="submit"
              class="uppercase"
            >
              Edit Song
            </button>
            <button
              v-on:click="
                navigateTo({
                  name: 'Songs',
                })
              "
              type="submit"
              class="uppercase"
            >
              View Songs
            </button>
            <button
              v-if="isUserLoggedIn && !bookmark"
              v-on:click="bookmarkOne"
              type="submit"
              class="uppercase"
            >
              Bookmark
            </button>
            <button
              v-if="isUserLoggedIn && bookmark"
              v-on:click="unbookmarkOne"
              type="submit"
              class="uppercase"
            >
              Unbookmark
            </button>
          </div>
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
import { mapState } from 'vuex';
import BookmarksService from '../../services/BookmarksService';
export default {
  name: 'SongMetadata',
  props: ['song'],
  data() {
    return {
      msg: 'Song Metadata',
      bookmark: null,
    };
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user']),
  },
  mounted: async function() {
    if (!this.isUserLoggedIn) {
      return;
    } else {
      try {
        const response = await BookmarksService.index({
          songId: this.$store.state.route.params.songId,
          userId: this.user.id,
        });
        const bookmarks = response.data;
        if (bookmarks.length) {
          this.bookmark = bookmarks[0];
          // console.log(this.bookmark);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    bookmarkOne: async function() {
      try {
        const response = await BookmarksService.post({
          songId: this.song.id,
          userId: this.user.id,
        });
        this.bookmark = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    unbookmarkOne: async function() {
      try {
        await BookmarksService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
button {
  min-width: 131px;
  margin: 10px 0;
}
</style>
