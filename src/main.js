import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import axios from './axios';
import store from './store';

Vue.config.productionTip = false;
Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultContainerElement: '#content',
});

new Vue({
  router,
  axios,
  store,
  render: (h) => h(App),
}).$mount('#app');
