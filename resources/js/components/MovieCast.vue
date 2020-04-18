<template>
    <div class="movie-cast border-b border-gray-800">
        <div class="container mx-auto px-4 py-16">
            <h2 class="text-4xl font-semibold">Cast</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                <div class="mt-8" v-for="cast in casts" :key="cast.id">
                    <router-link :to="{ name: 'actor', params: { id: cast.id }} ">
                        <img :src="`https://image.tmdb.org/t/p/w300/${cast.profile_path}`" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150" v-if="!type">
                        <img :src="cast.profile_path" alt="actor1" class="hover:opacity-75 transition ease-in-out duration-150" v-if="type">
                    </router-link>
                    <div class="mt-2">
                        <a href="#" class="text-lg mt-2 hover:text-gray:300 text-center">{{ cast.name }}</a>
                        <div class="text-sm text-gray-400 vanvan">
                            {{ cast.character }}
                            <!-- <span v-if="cast.movies.length">Tên phim : {{ cast.movies.toString() }}</span> -->
                            <!-- <span v-else>Không rõ</span> -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="row mt-10" v-if="actors">
                <VuePaginate :pagination="getCasts" :object="actors"></VuePaginate>
            </div>
        </div>
    </div>
</template>
<script>
import VuePaginate from '@/components/VuePaginate';
export default {
    props: ['casts', 'type', 'getCasts', 'actors'],
    name: 'MovieCast',
    components: { VuePaginate },
}
</script>
<style>
    .btn{
        fill: white !important;
    }
    .little-dot{
        background: white !important;
    }
</style>
