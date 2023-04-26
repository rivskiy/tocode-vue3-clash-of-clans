import {
  createRouter,
  createWebHashHistory
} from "vue-router";

const routerHistory = createWebHashHistory();

import HomePage from './page/Home-page.vue';
import AboutPage from './page/About-page.vue';
import NotFound from './page/NotFound-page.vue';
import Item from './page/ItemAlias-page.vue';

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item,
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
    },
    {
      path: '/:CatchAll(.*)',
      redirect: '/404'
    }
  ]
})

export default router;