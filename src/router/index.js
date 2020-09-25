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
    path: '/toko',
    component: () => import(/* webpackChunkName: "toko" */ '../views/toko/Toko.vue'),
    children: [
      {
        path: '',
        name: 'Toko',
        component: () => import(/* webpackChunkName: "toko" */ '../views/toko/TokoList.vue'),
      },
      {
        path: 'tambah',
        name: 'TokoAdd',
        component: () => import(/* webpackChunkName: "toko-tambah" */ '../views/toko/TokoAdd.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
