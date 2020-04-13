<template>
    <div class="movie-cast border-b border-gray-800">
        <Loading v-if="loading"/>
        <div class="container mx-auto px-4 py-16 row">
            <section class="col-md-3 row">
                <div class="col-md-12 col-lg-12 mb-3">
                    <img :src="actor.profile_path">
                </div>
                <div class="col-md-12 col-lg-12 row m-auto text-center">
                   <a href="#" class="col-md-3">
                       <i class="fa fa-dribbble"></i>
                       </a>
                    <a href="#" class="col-md-3">
                        <i class="fa fa-twitter"></i>
                        </a>
                    <a href="#" class="col-md-3">
                        <i class="fa fa-linkedin"></i>
                        </a>
                    <a href="#" class="col-md-3">
                        <i class="fa fa-facebook"></i>
                        </a>
                </div>
                <div class="col-md-12 col-lg-12 mb-3 mt-3">
                    <h2 class="mb-2">Thông tin</h2>
                    <h4>Được biết đến với</h4>
                    <p class="mb-2">{{ actor.known_for_department}}</p>
                    <h4>Giới tính</h4>
                    <p class="mb-2">{{ actor.gendor }}</p>
                    <h4>Ngày sinh</h4>
                    <p class="mb-2">{{ actor.birthday }}</p>
                    <h4>Nơi sinh</h4>
                    <p class="mb-2">{{ actor.place_of_birth }}</p>
                    <h4>Nghệ danh</h4>
                    <p class="mb-2">{{ actor.also_known_as ? actor.also_known_as.toString() : '' }}</p>
                </div>
            </section>
            <section class="col-md-9 container-fluid row">
                <div class="col-md-12 col-lg-12">
                    <h1 class="mb-5">{{ actor.name }}</h1>
                    <h4 class="mb-3">Giới thiệu</h4>
                    <p class="mb-10 text-bio" v-html="actor.biography"></p>
                    <section class="fimls">
                        <h4 class="mb-3">Phim tham gia</h4>
                        <div class="row m-0">
                            <div id="known_for_scroller" class="scroller_wrap should_fade is_fading w-100">
                                <ul class="horizontal_media_list scroller">
                                    <li class="account_adult_false item_adult_false" v-for="movie in actor.movies" :key="movie.id">
                                        <div class="image">
                                            <router-link :to="{ name: 'movie', params: { id: movie.id }}">
                                                <img :src="movie.path" :alt="movie.title" class="poster lazyload lazyloaded">
                                            </router-link>
                                        </div>
                                        <p>
                                            <router-link class="title" :to="{ name: 'movie', params: { id: movie.id }}">
                                                <bdi>{{ movie.name }}</bdi>
                                            </router-link>
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import CastRela from '../MovieCast';
import Loading from '../Loading';
import settings from "../../const";
export default {
    name: 'Detail',
    components: { CastRela, Loading },
    data(){
        return {
            loading: false,
            actor: {},
            host: settings.host,
        }
    },
    created(){
        this.getActor()
    },
    methods: {
        async getActor(){
            this.loading = true;
            await axios.get(`/api/dashboard/actors/${this.$route.params.id}`).
                then(e => {
                    this.actor = e.data
                }).catch(async e => {
                    await this.$swal({
                        title: 'Oops...',
                        icon: 'error',
                        text: 'Không tìm thấy yêu cầu!'
                    });
                    this.$router.push({ name: 'home' });
                });
            this.loading = false;
        }
    }
}
</script>
<style lang='scss' scoped>
    @import './detail.scss';
    .fa{
        font-size: 20px;
    }
    h2{
        font-size: 25px;
        font-weight: bold;
    }
    h4{
        font-size: 16px;
        font-weight: bold;
    }
    h1{
        font-size: 30px;
        font-weight: bold;
    }
    .text-bio{
        line-height: 25px;
    }
</style>
