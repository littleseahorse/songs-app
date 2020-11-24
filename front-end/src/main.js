import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { sync } from 'vuex-router-sync';
import { FontAwesomeIcon } from './plugins/font-awesome';
import VuePlyr from 'vue-plyr';

sync(store, router);

createApp(App)
  .use(store)
  .use(router)
  .component('fa', FontAwesomeIcon)
  .use(VuePlyr, {
    plyr: {},
  })
  .mount('#app');
