export default {
    state: {
        isLoading : false,
        data: [],
    },
    getters: {},
    mutations: {
        GET_INDEX: (state, payload) => {
            state.isLoading = false;
            state.data = payload;
        }
    },
    actions: {
        GET_INDEX: async (context) => {
            await axios.get('/api/index')
                .then(e => {
                    context.commit('GET_INDEX', e.data);
                })
        },
        GET_MOVIE: (context, id) => {
            return axios.get(`/api/movie/${id}`);
        }
    },
    namespaced: true
}