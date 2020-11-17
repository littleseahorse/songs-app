<template>
  <main>
    <page-header />
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
</style>
