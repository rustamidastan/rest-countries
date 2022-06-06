import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/countries/:alphaCode",
    name: "CountryInfo",
    component: () => import("../views/CountryInfo.vue"),
    props: true,
  },

  //redirect
  {
    path: "/all-countries",
    redirect: "/",
  },

  //catch all not found

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
