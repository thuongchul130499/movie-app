<template>
    <div v-if="loading">
        <Loading />
    </div>
    <div v-else>
        <div class="container mx-auto px-4 pt-16">
            <Popular/>
            <NowPlaying/>
        </div>
    </div>
</template>
<script>
    import { mapActions, mapState } from 'vuex';
    import NowPlaying from "./NowPlaying";
    import Popular from "./Popular";
    import Loading from "./Loading";
    export default {
        name: 'Home',
        components: { NowPlaying ,Popular, Loading },
        data(){
            return {
                loading: true,
            }
        },
        mounted(){
            this.GET_INDEX()
        },
        computed: {
            ...mapState('App', ['isLoading'])
        },
        watch: {
            isLoading(newValue, oldValue) {
                !newValue ? this.loading = false :this.loading = true;
            },
        },
        methods: {
            ...mapActions({
                GET_INDEX: 'App/GET_INDEX',
            }),
        }
    }
</script>
