// Importa solo lo que necesitas de vue-router
import { createRouter, createWebHistory } from "vue-router";

// Crea un array con todas las rutas
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

// Crea el router con la historia web y las rutas
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Exporta el router por defecto
export default router;
