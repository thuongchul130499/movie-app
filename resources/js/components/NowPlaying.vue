<template>
    <div class="now-playing-movies py-24">
        <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Now Playing</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <CardMovie v-for="item in datas" :key="item.id" :movie="item"/>
        </div>
    </div>
</template>
<script>
    import CardMovie from "./CardMovie";
    export default {
        name: 'NowPlaying',
        components: { CardMovie },
        computed: {
            datas: {
                get(){
                    return this.$store.state.App.data.nowPlayingMovies;
                }
            }
        }

    }
</script>