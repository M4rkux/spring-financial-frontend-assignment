import { createRouter, createWebHistory } from 'vue-router';
import Users from '../views/Users.vue';

const routes = [
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/users/:id',
    name: 'User',
    component: () => import('@/views/User')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Users' }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
