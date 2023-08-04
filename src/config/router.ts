import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/Get",
    name: "Get",
    component: () => import("@/views/GetHttps.vue"),
  },
  {
    path: "/Post",
    name: "Post",
    component: () => import("@/views/PostHttps.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
