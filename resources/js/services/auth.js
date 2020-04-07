export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        const isLoggedIn = store.getters["Account/IS_LOGGEND_IN"];
        if ( requiresAuth && !isLoggedIn) {
            next('/login');
        } else if (to.path === '/login' && isLoggedIn) {
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
    if(store.getters['Account/CURRENT_USER']){
        const token = store.getters['Account/CURRENT_USER'].token;
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
}

export function currentUser() {
    const user = localStorage.getItem('user');

    if (!user) {
        return null;
    }

    return JSON.parse(user);
}