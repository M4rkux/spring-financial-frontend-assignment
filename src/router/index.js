import { createRouter, createWebHistory } from 'vue-router';
import { publicPath } from '../../vue.config';
import Users from '../views/Users.vue';

const routes = [
  {
    path: `${publicPath}users`,
    name: 'Users',
    component: Users
  },
  {
    path: `${publicPath}users/:id`,
    name: 'User',
    component: () => import('@/views/User')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Users' }
  }
];

const router = createRouter({
  base: publicPath,
  history: createWebHistory(),
  routes
});

export default router;
