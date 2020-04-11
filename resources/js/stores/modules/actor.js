export default {
    state: {
        actors: [],
    },
    getters: {
        GET_ACTOR: state => {
            return state.actors;
        }
    },
    mutations: {
        SET_ACTOR: (state, actors) => {
            state.actors = actors;
        }
    },
    actions:{},
    namespaced: true,
}