<template>
  <main>
    <PageHeader msg="Songs Tracker" />
    <router-view />
  </main>
</template>

<script>
import PageHeader from './components/Header';
export default {
  name: 'App',
  components: {
    PageHeader,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  font-display: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
*::before,
*::after {
  box-sizing: border-box;
}
html {
  overflow-y: scroll;
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.6em;
}
body {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 1.6em;
  color: #2f4f4f;
  background-color: #fff;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  display: block;
  margin: 0 0 20px;
  line-height: normal;
  font-weight: bold;
}
h1 {
  margin: 20px auto;
  font-size: 2em;
}
h2 {
  margin: 0 0 10px;
  padding: 15px 10px 10px;
  font-size: 1em;
  color: #ffffff;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #48d1cc;
}
img {
  width: auto;
  max-width: 100%;
  height: auto;
  margin: 0;
  padding: 0 15px;
  border: none;
  line-height: normal;
  vertical-align: middle;
  border-radius: 0;
  filter: blur(0);
  transform: translateZ(0);
}
#nav {
  z-index: 1;
  position: fixed;
  width: 100%;
  height: 100px;
  top: 0;
  background-color: #48d1cc;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
}
#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2f4f4f;
}
#nav a:hover {
  color: #7d9c9b !important;
}
#nav a.router-link-exact-active {
  color: #fff;
}
section {
  max-width: 95%;
  width: 600px;
  margin: 0 auto;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.2);
}
section h2 {
  background-color: #48d1cc;
}
iframe {
  border: none;
}
input,
textarea {
  width: 180px;
  margin: 20px 0 0;
  padding: 5px 7px;
  border-color: #48d1cc;
  color: #2f4f4f;
}
input:focus,
textarea:focus {
  outline: none;
  border-color: #fff;
  background-color: #d5f4f3;
}
button {
  margin: 10px 0 20px;
  padding: 5px 15px;
  color: #2f4f4f;
  background-color: #48d1cc;
  border-color: #48d1cc;
  cursor: pointer;
}
button:hover {
  color: #fff;
  background-color: #2f4f4f;
  border-color: #2f4f4f;
}
button:focus {
  outline: none;
}
.flex {
  display: flex;
}
.flex-item {
  position: relative;
}
.flex.flex-wrap {
  flex-wrap: wrap;
}
.flex.direction-column {
  flex-direction: column;
}
.flex.direction-row {
  flex-direction: row;
}
.flex.direction-row-reverse {
  flex-direction: row-reverse;
}
.flex.direction-column-reverse {
  flex-direction: column-reverse;
}
.flex.vertical-align-center {
  align-items: center;
}
.flex.vertical-align-start {
  align-items: flex-start;
}
.flex.vertical-align-end {
  align-items: flex-end;
}
.flex.content-center {
  justify-content: center;
}
.flex.content-start {
  justify-content: flex-start;
}
.flex.content-end {
  justify-content: flex-end;
}
.flex.content-evenly {
  justify-content: space-evenly;
}
.flex.content-around {
  justify-content: space-around;
}
.flex.content-between {
  justify-content: space-between;
}
.uppercase {
  text-transform: uppercase;
}
.error {
  margin: 10px 0 0;
  color: red;
}
svg {
  width: 22px;
  border-radius: 50%;
  transition: ease-in-out 0.4s;
}
svg:hover {
  transform: scale(1.3);
  cursor: pointer;
  box-shadow: 0px 1px 3px -1px rgba(0, 0, 0, 0.2);
}
.song-data {
  padding: 15px;
}
.song-data .flex-item {
  width: auto;
  min-width: 205px;
  margin: 0 2px;
}
.song-data p {
  margin: 2px 0;
  font-size: 12px;
}
.song-data span {
  font-size: 18px;
}
span.song-title {
  font-size: 26px;
}
span.song-artist {
  font-size: 22px;
}
span.song-album {
  font-size: 14px;
}
</style>
