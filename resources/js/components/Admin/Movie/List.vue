<template>
    <div>
        <Loading v-if="isLoading"/>
        <div class="row">
            <div class="col-md-1">
                <ul class="nav nav-pills flex-column" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a
                            class="nav-link active text-dark"
                            id="home-tab"
                            data-toggle="tab"
                            href="#current"
                            role="tab"
                            aria-controls="home"
                            aria-selected="true"
                            @click.prevent="current = true"
                        >Hiện có</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link bg-danger text-dark"
                            id="profile-tab"
                            data-toggle="tab"
                            href="#trash" 
                            role="tab" 
                            aria-controls="profile" 
                            aria-selected="false"
                            @click.prevent="current = false"
                        ><i class="fa fa-trash" aria-hidden="true"></i>Trash</a>
                    </li>
                </ul>
            </div>
            <div class="col-md-11">
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
                            <tr v-for="(movie, index) in movies.data" :key="movie.id" v-show="current" :id="`item${movie.id}`">
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
                                    <button class="btn btn-danger btn-sm" @click="destroy(movie.id)">
                                        <span class="fa fa-trash"></span>
                                    </button>
                                </td>
                            </tr>
                        <tr v-for="(movie, index) in movies_trash.data" :key="movie.id" v-show="!current">
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
                                <button class="btn btn-success btn-sm" @click="restore(movie.id)">
                                    <span class="fa fa-undo"></span>
                                </button>
                                <button class="btn btn-danger btn-sm">
                                    <span class="fa fa-trash"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <VuePaginate v-show="current" :pagination="getResults" :object="movies"></VuePaginate>
                <VuePaginate v-show="!current" :pagination="getMoviestrash" :object="movies_trash"></VuePaginate>
            </div>
        </div>
    </div>
</template>
<script>
import Loading from '@/components/Loading';
import VuePaginate from '@/components/VuePaginate';
export default {
    name: 'Movie',
    components: { Loading, VuePaginate },
    data() {
        return {
            movies: {},
            movies_trash: {},
            isLoading: false,
            current: true,
        }
	},

	mounted() {
        this.getResults();
        this.getMoviestrash();
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
			await axios.get(`/api/movies?page=${page}`)
				.then(response => {
                    this.movies = response.data;
                    this.isLoading = false;
            });
        },
        async getMoviestrash(page = 1){
            await axios.get(`/api/movies_trash?page=${page}`)
				.then(response => {
                    this.movies_trash = response.data;
            });
        },
        genres(movie){
            return movie.genreses.reduce((result, { name }) => {
                result.push(name);
                return result;
            }, []).join(', ')
        },
        destroy(id){
            this.$swal({
                title: 'Cho vào thùng rác',
                text: 'Bạn chắc muốn xóa nó ?',
                showCancelButton: true,
                icon: 'error',
                confirmButtonText: 'Có',
                cancelButtonText: 'Hủy bỏ!',
                reverseButtons: true
            }).then( e => {
                if(e.value){
                    axios.delete(`/api/movies/${id}`)
                        .then(e => {
                            this.$swal({
                                text: 'Xóa thành công',
                                button: true,
                                icon: 'success',
                            });   
                        });
                }
            });
        },
        restore(id){
            this.$swal({
                title: 'Khôi phục',
                text: 'Bạn muốn khôi phục bộ phim này?',
                showCancelButton: true,
                icon: 'warning',
                confirmButtonText: 'Có',
                cancelButtonText: 'Hủy bỏ!',
                reverseButtons: true
            }).then(async e => {
                if(e.value){
                    await axios.put(`/api/movies/${id}/restore`)
                        .then(e => {
                            this.$swal({
                                text: 'Khôi phục thành công',
                                button: true,
                                icon: 'success',
                            });  
                        });
                    this.getMoviestrash(movies_trash.current_page) 
                }
            });
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