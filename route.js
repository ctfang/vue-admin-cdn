import {defineAsyncComponent} from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router'

export const routes = [
    {
        path: '/404',
        component: () => import('@/views/404.js'),
        hidden: true,
    },

    {
        path: '/',
        name: 'Example',
        meta: { title: 'Example', icon: 'help' },
        component: () => import('@/views/dashboard/index.js'),
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () => import('@/views/404.js'),
            meta: { title: 'Dashboard', icon: 'House' }
        }]
    },

    {
        path: '/fda',
        name: 'Example2',
        meta: { title: 'Example2', icon: 'House' },
        component: () => import('@/views/dashboard/index.js'),
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
