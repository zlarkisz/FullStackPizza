import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/index.vue';

const routes = [
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
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
