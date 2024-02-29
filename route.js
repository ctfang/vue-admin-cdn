import {defineAsyncComponent} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

export const routes = [
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true,
    },

    {
        path: '/',
        name: 'Example',
        meta: { title: 'Example', icon: 'el-icon-s-help' },
        component: () => import('@/views/dashboard/index.js'),
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/dashboard/index.js'),
            meta: { title: 'Dashboard', icon: 'dashboard' }
        }]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
