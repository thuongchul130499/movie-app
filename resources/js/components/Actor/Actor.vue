<template>
    <div>
        <Loading v-if="loading"/>
        <Cast :casts="actors.data" :type="true" :actors="actors" :getCasts="getCasts"/>
    </div>
</template>
<script>
import Cast from '../MovieCast';
import Loading from '../Loading';
export default {
    name: 'Actor',
    components: { Cast, Loading },
    data(){
        return {
            actors: {},
            loading: false,
        }
    },
    mounted(){
        this.getCasts();
    },
    methods: {
        async getCasts(page = 1){
            this.loading = true;
            await axios.get(`/api/dashboard/actors?page=${page}`)
            .then(e => {
                this.actors = e.data;
            });
            this.loading = false;
        }
    }
}
</script>