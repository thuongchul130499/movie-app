<template>
    <div>
        <Loading v-if="isLoading"/>
        <table class="table">
            <thead>
                <tr>
                    <th>Poster</th>
                    <th>Tên phim</th>
                    <th>Tên gốc</th>
                    <th>Ngôn ngữ chính</th>
                    <th>Ngày khơi chiếu</th>
                    <th>Trạng thái</th>
                    <th>Thể loại</th>
                    <th>Ngôn ngữ phim</th>
                    <th>Vote</th>
                    <th>Hành động</th>
                </tr>
            </thead>
            <tbody v-if="!isLoading">
                <tr v-for="(movie, index) in movies.data" :key="index">
                    <td scope="row" class="poster">
                        <img :src="`http://127.0.0.1:8000/uploads/${movie.poster_path}`" alt="">
                    </td>
                    <td>{{ movie.title }}</td>
                    <td>{{ movie.original_title }}</td>
                    <td>{{ movie.original_language }}</td>
                    <td>{{ movie.release_date }}</td>
                    <td>{{ movie.status }}</td>
                    <td class="genres">{{ genres(movie) }}</td>
                    <td>{{ movie.spoken_languages }}</td>
                    <td>{{ movie.vote_average }}</td>
                    <td>
                        <router-link class="btn btn-primary btn-sm" :to="{ name: 'edit-movie', params: {id: movie.id } }">
                            <span class="fa fa-edit"></span>
                        </router-link>
                        <button class="btn btn-danger btn-sm">
                            <span class="fa fa-trash"></span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <pagination :data="movies" @pagination-change-page="getResults"></pagination>
    </div>
</template>
<script>
import Loading from '@/components/Loading';
export default {
    name: 'Movie',
    components: { Loading },
    data() {
        return {
            movies: {},
            isLoading: false,
        }
	},

	mounted() {
        this.getResults();
        if(this.$store.state.Movie.isNotFound){
            this.$swal({
                text: 'Ops... Không tìm thấy yêu cầu',
                icon: 'warning'
            })
            this.$store.commit('Movie/NOT_FOUND');
        }
	},

	methods: {
		async getResults(page = 1) {
            this.isLoading = true;
			axios.get('/api/movies?page=' + page)
				.then(response => {
                    this.movies = response.data;
                    this.isLoading = false;
			});
        },
        genres(movie){
            return movie.genreses.reduce((result, { name }) => {
                result.push(name);
                return result;
            }, []).join(', ')
        }
	}
}
</script>
<style>
    .poster{
        max-width: 100px;
        max-height: 120px;
    }
    td{
        vertical-align: middle !important;
    }
    .genres{
        max-width: 90px;
    }
</style>