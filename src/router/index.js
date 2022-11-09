import { createRouter, createWebHistory } from "vue-router";

const routes = [

    { path: "/", name: "home", component: () => import("@/views/Home.vue") },

    { path: "/professions", name: "profession", component: () => import("@/views/professions/Index.vue") },

    { path: "/professions/create", name: "profession-create", component: () => import("@/views/professions/Create.vue") },

    { path: "/professions/edit/:id", name: "profession-edit", component: () => import("@/views/professions/Edit.vue") }
]

const router = createRouter({ history: createWebHistory(), routes })

export default router;