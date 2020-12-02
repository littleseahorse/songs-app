import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Register from '../components/Register.vue';
import Login from '../components/Login.vue';
import Songs from '../components/Songs/Songs.vue';
import CreateSong from '../components/CreateSong.vue';
import ViewSong from '../components/ViewSong/ViewSong.vue';
import EditSong from '../components/EditSong.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
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
    path: '/songs/:songId',
    name: 'View-Song',
    component: ViewSong,
  },
  {
    path: '/songs/:songId/edit',
    name: 'Edit-Song',
    component: EditSong,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
