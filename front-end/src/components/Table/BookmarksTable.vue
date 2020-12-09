<template>
  <table>
    <TableHeader v-bind:header="tableHeaders" />
    <TableRow
      v-for="(row, $index) in tableRows"
      v-bind:key="$index"
      v-bind:row="row"
      v-on:click="
        navigateTo({
          name: 'View-Song',
          params: { songId: row.[0].value },
        })
      "
    />
  </table>
</template>

<script>
// import { mapAction, mapState } from 'vuex';
import { mapState } from 'vuex';
import TableHeader from './TableHeader.vue';
import TableRow from './TableRow.vue';
import BookmarksService from '../../services/BookmarksService';
export default {
  components: {
    TableHeader,
    TableRow,
  },
  // beforeMount() {
  //   this.retrieveTableData();
  // },
  data() {
    return {
      tableData: [{}],
    };
  },
  computed: {
    ...mapState(['isUserLoggedIn', 'user']),
    tableHeaders() {
      return Object.keys(this.tableData[0]).map((header, index) => {
        return {
          index: index,
          identifier: header,
        };
      });
    },
    tableRows() {
      return this.tableData.map((obj) => {
        return Object.keys(obj).map((key, idx) => {
          return {
            key: key,
            value: Object.values(obj)[idx],
          };
        });
      });
    },
  },
  mounted: async function() {
    if (!this.isUserLoggedIn) {
      return;
    } else {
      try {
        const response = await BookmarksService.index({
          userId: this.user.id,
        });
        var bookmarks = response.data;
        bookmarks = JSON.parse(
          JSON.stringify(bookmarks, ['songId', 'title', 'artist', 'bookmarked'])
        );
        if (bookmarks.length) {
          this.tableData = bookmarks;
        } else {
          this.tableData = [
            {
              songId: 'none',
              title: 'none',
              artist: 'none',
              bookmarked: 'none',
            },
          ];
        }
        // console.log(bookmarks);
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
    // ...mapActions(['retrieveTableData']),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: calc(100vw - 119%);
  border-collapse: separate;
  border: 1px solid #48d1cc;
  /* box-shadow: 0px 0px 20px 12px whitesmoke; */
}
</style>
