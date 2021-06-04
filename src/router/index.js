import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';

const routes = [
  {
    path: '/',
    name: 'Users',
    component: Users
  },
  {
    path: '/user/:id',
    name: 'User',
    component: () => import('@/views/User')
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
