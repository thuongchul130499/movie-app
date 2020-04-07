export default {
    state: {
        toggle: true,
    },
    getters: {
        TOGGLE: state => {
            return state.toggle;
        }
    },
    mutations: {
        SET_TOGGLE: (state, status) => {
            state.toggle = status;
        }
    },
    actions: {
        TOGGLE: (context, status) => {
            context.commit('SET_TOGGLE', status);
        }
    }
}