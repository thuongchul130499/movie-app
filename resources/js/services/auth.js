export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const isLoggedIn = store.getters["Account/IS_LOGGEND_IN"];
        const token = localStorage.getItem('token');
        if ( requiresAuth && !isLoggedIn) {
            next('/login');
        } else if (to.path === '/login' && (isLoggedIn || token)) {
            router.push('/');
        } else {
            next();
        }
    });

    axios.interceptors.response.use(null, (error) => {
        if(error.response.status === 401) {
            store.commit('Account/LOG_OUT');
            router.push('/login');
        }

        return Promise.reject(error);
    });

    axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('token')}`;
}