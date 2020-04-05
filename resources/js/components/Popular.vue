<template>
    <div class="popular-movies">
        <h2 class="uppercase tracking-wider text-orange-500 text-lg font-semibold">Popular Movies</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            <CardMovie v-for="item in datas" :key="item.id" :movie="item"/>
        </div>
    </div>
</template>
<script>
    import CardMovie from "./CardMovie";
    export default {
        name: 'Popular',
        components: { CardMovie },
        computed: {
            datas: {
                get(){
                    return this.$store.state.App.data.popularMovies;
                }
            }
        }

    }
</script>