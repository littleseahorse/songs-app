import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Songs from '../components/Songs.vue';
import CreateSong from '../components/CreateSong.vue';
import ViewSong from '../components/ViewSong.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/songs',
    name: 'Songs',
    component: Songs,
  },
  {
    path: '/songs/create',
    name: 'Create-Song',
    component: CreateSong,
  },
  {
    path: '/song/:songId',
    name: 'View-Song',
    component: ViewSong,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
