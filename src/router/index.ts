import { createRouter, createWebHashHistory, RouterOptions, Router, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/', component: () => import('@/layouts/BasicLayout.vue')
    }
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes
} as RouterOptions)

export default router