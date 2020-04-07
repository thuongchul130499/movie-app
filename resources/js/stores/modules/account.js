import router from '@/routes.js';
import { currentUser } from '@/services/auth';
const user = currentUser();
export default {
    state: {
        isLoggedIn: false,
        currentUser: user,
    },
    getters: {
        IS_LOGGEND_IN: state => {
            return state.isLoggedIn || state.currentUser; 
        },
        CURRENT_USER: state => {
            return state.currentUser;
        }
    },
    mutations: {
        LOG_IN: (state, payload) => {
            state.isLoggedIn = true;
            console.log(payload);
            state.currentUser = Object.assign({}, payload.user, {token: payload.access_token});
            localStorage.setItem('user', JSON.stringify(state.currentUser));
        },
        LOG_OUT: state => {
            if(router.currentRoute.name === 'login'){
                return;
            }
            state.isLoggedIn = false;
            state.currentUser = {};
            localStorage.removeItem('user');
            router.replace('/');
        }
    },
    actions: {
        LOGGED_IN_SUCCESS: (context, data) => {
            context.commit('LOG_IN', data.data)
        },
    },
    namespaced: true
}