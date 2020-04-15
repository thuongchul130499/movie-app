export default {
    state: {
        isLoading : false,
        data: [],
        query: '',
        listCates: [],
    },
    getters: {
        GET_GENRES: state => {
            return state.data.genres
        }
    },
    mutations: {
        GET_INDEX: (state, payload) => {
            state.isLoading = false;
            state.data = payload;
        },
        CHANGE_STATUS: state => {
            state.isLoading = !state.isLoading;
        },
        SET_QUERY: (state, payload) => state.query = payload,
        SET_CATE: (state, payload) => state.listCates = payload,
    },
    actions: {
        GET_INDEX: async (context) => {
            context.commit('CHANGE_STATUS');
            await axios.get('/api/index')
                .then(e => {
                    context.commit('GET_INDEX', e.data);
                })
        },
        GET_MOVIE: (context, id) => {
            return axios.get(`/api/movie/${id}`);
        },
        SEARCH: (context, query) => {
            context.commit('SET_QUERY', query);
            return axios.get(`/api/search?query=${query}`)
        },
        GET_CATE: context => {
            axios.get('/api/categories')
                .then(e => {
                    context.commit('SET_CATE', e.data);
                })
        }
    },
    namespaced: true
}
