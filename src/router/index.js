import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/game',
    name: 'TheGame',
    component: () => import(/* webpackChunkName: "infos" */ '../views/TheGame.vue'),
  },
  {
    path: '/project',
    name: 'TheProject',
    component: () => import(/* webpackChunkName: "project" */ '../views/TheProject.vue'),
  },
  {
    path: '/downloads',
    name: 'Téléchargements',
    component: () => import(/* webpackChunkName: "downloads" */ '../views/Downloads.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
