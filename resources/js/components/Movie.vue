<template>
    <div>
        <Loading v-if="Object.keys(movie).length === 0 && movie.constructor === Object"/>
        <div v-else>
            <MovieInfo :movie="movie"/>
            <MovieCast :casts="movie.cast"/>
            <MovieImage :movie="movie"/>
        </div>
    </div>
</template>

<script>
import MovieInfo from './/MovieInfo';
import MovieCast from './/MovieCast';
import MovieImage from './/MovieImage';
import Loading from './Loading';
export default {
    name: 'Movie',
    components: { MovieInfo, MovieCast, MovieImage, Loading },
    data(){
        return {
            movie: {},
        }
    },
    created(){
        this.$store.dispatch('App/GET_MOVIE', this.$route.params.id)
            .then(e => {
                this.movie = e.data;
            }).catch(async err => {
                await this.$swal({
                    title: 'Oops...',
                    icon: 'error',
                    text: 'Không tìm thấy yêu cầu!'
                });

                this.$router.push({ name: 'home'});
            });
    },
}
</script>