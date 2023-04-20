import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import WelcomeView from "../views/WelcomeView.vue";
import MainView from "../views/MainView.vue";
import LegalView from "../views/LegalView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import LoaderView from "../views/LoaderView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "welcome",
    component: WelcomeView,
  },
  {
    path: "/theia",
    name: "main",
    component: MainView,
  },
  {
    path: "/legal",
    name: "legal",
    component: LegalView,
  },
  {
    path: "/privacy",
    name: "privacy",
    component: PrivacyView,
  },
  {
    path: "/loader",
    name: "loader",
    component: LoaderView,
  },
  // {
  //   path: "/profile",
  //   name: "profile",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/ProfileScreen.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
