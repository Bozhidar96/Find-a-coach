import { createRouter, createWebHistory } from 'vue-route';

import CoachDetail from './pages/coaches/CoachDetail.vue';
import CoachList from './pages/coaches/CoachList.vue';
import CoachRegistration from './pages/coaches/CoachRegistration.vue';

import ContactCoach from './pages/requests/ContactCoach.vue';
import RequestReceive from './pages/requests/RequestReceive.vue';

import NotFound from './pages/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: './coaches',
    },
    {
      path: '/coaches',
      component: CoachList,
    },
    {
      path: '/coaches/:id',
      component: CoachDetail,
      children: {
        path: '/contact',
        component: ContactCoach,
      },
    },
    {
      path: '/register',
      component: CoachRegistration,
    },
    {
      path: '/request',
      component: RequestReceive,
    },
    {
      path: '/:notFound(.*)',
      component: NotFound,
    },
  ],
});

export default router;
