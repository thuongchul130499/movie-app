<template>
    <div>
        <Loading v-if="isLoading"/>
            <table class="table">
                <thead>
                    <tr>
                        <th>Ảnh</th>
                        <th>Tên</th>
                        <th>Tên khác</th>
                        <th>Ngày sinh</th>
                        <th>Hoạt động</th>
                        <th>Giới tính</th>
                        <th>Ngày mất</th>
                        <th>Độ nổi tiếng</th>
                        <th>Nơi Sinh</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody v-if="!isLoading">
                    <tr v-for="actor in actors.data" :key="actor.id">
                        <th><img :src="actor.profile_path" :alt="actor.name"></th>
                        <td>{{ actor.name }}</td>
                        <td v-html="arrToString(actor)"></td>
                        <td>{{ actor.birthday }}</td>
                        <td>{{ actor.known_for_department }}</td>
                        <td>{{ actor.gender }}</td>
                        <td>{{ actor.deathday }}</td>
                        <td>{{ actor.popularity }}</td>
                        <td>{{ actor.place_of_birth }}</td>
                        <td>
                            <button class="btn btn-primary btn-sm">
                                <span class="fa fa-search"></span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <VuePaginate :pagination="getActors" :object="actors"></VuePaginate>
    </div>
</template>
<script>
import Loading from '@/components/Loading';
import VuePaginate from '@/components/VuePaginate';
export default {
    name: 'Actor',
    components: { Loading, VuePaginate },
    data() {
        return {
            actors: {},
            isLoading: false,
        }
	},

	mounted() {
        this.getActors();
    },
	methods: {
        getActors(page = 1){
            axios.get(`/api/actors?page=${page}`)
                .then(e => {
                    this.actors = e.data;
                });
        },
        arrToString(actor){
            return actor.also_known_as.toString().replace(/,/gi, '<br />');
        },
    }
}
</script>
<style>
    td{
        vertical-align: middle !important;
    }
    img {
        max-width: 200px;
    }
</style>