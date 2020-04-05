import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login')
        },
        {
            path: '/',
            name: 'Home',
            redirect: 'home',
            component: () => import('@/layouts/Home'),
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: () => import('@/components/Home')
                },
                {
                    path: '/movie/:id',
                    name: 'movie',
                    component: () => import('@/components/Movie')
                }
            ]
        }
    ]
})

export default router;