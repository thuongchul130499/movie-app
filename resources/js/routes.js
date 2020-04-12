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
            path: '/dashboard',
            name: 'Dashboard',
            redirect: '/',
            component: () => import('@/pages/Dashboard'),
            children: [
                {
                    path: '/',
                    name: 'dashboard',
                    component: () => import('@/components/Dashboard/Index')
                }
            ]
        },
        {
            path: '/admin/',
            name: 'DashboardAdmin',
            redirect: '/admin/dashboard',
            component: () => import('@/pages/Admin'),
            meta: {
                requiresAuth: true,
            },
            children: [
                {
                    path: 'dashboard',
                    name: 'admin-index',
                    component: () => import('@/components/Admin/Index')
                },
                {
                    path: 'movies',
                    name: 'admin-movies',
                    component: () => import('@/components/Admin/Movie/List')
                },
                {
                    path: 'create/movie',
                    name: 'create-movie',
                    component: () => import('@/components/Admin/Movie/Create')
                }
                ,
                {
                    path: 'movie/:id',
                    name: 'edit-movie',
                    component: () => import('@/components/Admin/Movie/Edit')
                },
                {
                    path: 'actors',
                    name: 'admin-actors',
                    component: () => import('@/components/Admin/Actor/List')
                },
            ]
        },
        {
            path: '/',
            name: 'Home',
            redirect: 'home',
            component: () => import('@/pages/Home'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/components/Home')
                },
                {
                    path: '/movie/:id',
                    name: 'movie',
                    component: () => import('@/components/Movie')
                },
                {
                    path: '/actors',
                    name: 'actors',
                    component: () => import('@/components/Actor/Actor')
                }
                ,
                {
                    path: '/actors/:id',
                    name: 'actor',
                    component: () => import('@/components/Actor/Detail')
                }
            ]
        }
    ]
})

export default router;
