import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/views/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'router-fade' },
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue'),
    meta: { transition: 'router-fade' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: { transition: 'router-fade' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
