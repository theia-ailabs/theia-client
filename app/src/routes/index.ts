import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import MainScreen from "../screens/MainScreen.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/chat",
    name: "main",
    component: MainScreen,
  },
  {
    path: "/legal",
    name: "legal",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WelcomeScreen.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
