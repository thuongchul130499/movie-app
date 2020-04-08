export default {
    state: {
        isLoading: false,
        isNotFound: false,
    },
    getters: {},
    mutations: {
        NOT_FOUND: state => {
            state.isNotFound = !state.isNotFound;
        }
    },
    actions:{
        CREATE_MOVIE: (context, fd) => {
            return axios.post('/api/movies', fd,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                    })
        },
        GET_MOVIE: (context, id) => {
            return axios.get(`/api/movies/${id}/edit`)
        }
    },
    namespaced: true,
}