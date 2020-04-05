export default {
    state: {
        isLoggedIn: false,
    },
    getters: {
        IS_LOGGEND_IN: state => {
            return state.isLoggedIn;
        },
    },
    mutations: {
        LOG_IN: (state, payload) => {
            state.isLoggedIn = true;
            localStorage.setItem(
                'token',
                payload
            )
        },
        LOG_OUT: state => {
            state.isLoggedIn = false;
            localStorage.removeItem('token')
        }
    },
    actions: {
        LOGGED_IN_SUCCESS: (context, token) => {
            context.commit('LOG_IN', token.data.access_token)
        },
    },
    namespaced: true
}