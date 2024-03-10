import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import GamePage from "../views/GamePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [ {
    path: '/',
    name: 'home',
    component: HomePage,
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/game',
    name: 'game',
    component: GamePage,
    meta: {
      title: 'Game',
    },
  },],
});

router.beforeEach(async (to) => {
  document.title = to.meta.title;
});

export default router;
