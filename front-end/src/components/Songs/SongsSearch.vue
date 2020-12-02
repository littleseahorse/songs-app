<template>
  <div>
    <h2 class="flex-item uppercase flex direction-row content-between">
      <span class="flex-item">{{ msg }}</span>
    </h2>
    <div class="flex-item flex direction-column">
      <Form autocomplete="off">
        <div
          v-on:click="activate(1)"
          class="input-block"
          v-bind:class="{ active: active_el == 1 }"
        >
          <Field
            id="search"
            name="search"
            v-model="search"
            v-bind:class="{ valid: search !== '' }"
            as="input"
          />
          <label for="search">Search by title, artist, album or genre</label>
          <span
            v-on:click="activate(1)"
            v-bind:class="{ activespan: active_el == 1 }"
          ></span>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form } from 'vee-validate';
import _ from 'lodash';
export default {
  name: 'SongsSearch',
  components: {
    Field,
    Form,
  },
  props: {},
  data() {
    return {
      msg: 'Find a song',
      active_el: 0,
      search: '',
    };
  },
  watch: {
    search: _.debounce(async function() {
      const route = {
        name: 'Songs',
      };
      if (this.search !== '') {
        route.query = {
          search: this.search,
        };
      }
      this.$router.push(route);
    }, 700),
    '$route.query.search': {
      immediate: true,
      handler(value) {
        if (this.search !== '') {
          this.search = value;
        } else {
          this.search = '';
        }
      },
    },
  },
  methods: {
    activate(el) {
      this.active_el = el;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input-block {
  position: relative;
  width: 100%;
  margin-bottom: 40px;
}
button {
  margin: 30px 0;
}
label {
  position: absolute;
  left: 13%;
  top: 35px;
  font-size: 18px;
  font-weight: 200;
  color: #cecece;
  transition: all 0.5s ease;
  pointer-events: none;
  cursor: text;
}
input {
  width: 75% !important;
  height: 50px;
  padding: 17px 5px 5px;
  outline: none;
  border: 0;
  border-bottom: 1px solid #cecece;
}
.valid ~ label,
.active > input:focus ~ label {
  display: block;
  top: 0px;
  color: #2f4f4f;
  font-size: 13px;
}
.active > input:focus ~ .activespan {
  position: absolute;
  height: 1px;
  right: 42.5%;
  bottom: 0;
  content: ' ';
  background-color: #2f4f4f;
  transform: scaleX(5);
}
.active > .activespan {
  transition: all ease 0.5s;
  width: 15%;
  transform: scaleX(1);
}
</style>
