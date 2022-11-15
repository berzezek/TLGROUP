import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("../views/ContactsView.vue"),
    },
    {
      path: "/open-api",
      name: "open-api",
      component: () => import("../views/OpenApiview.vue"),
    },
  ],
});

export default router;
