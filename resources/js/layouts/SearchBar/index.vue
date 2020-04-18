<template>
    <div class="relative md:mt-0">
        <input
            type="text"
            class="bg-gray-800 text-sm rounded-full w-64 px-4 pl-8 py-1 focus:outline-none focus:shadow-outline anime" placeholder="Search (Press '/' to focus)"
            x-ref="search"
            v-click-outside="outSide"
            @click="isOpen = true"
            @keyup="onSearch"
            v-model="query"
        >
        <div class="absolute top-0">
            <svg class="fill-current w-4 text-gray-500 mt-2 ml-2" viewBox="0 0 24 24"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 01-1.42 1.4l-5.38-5.38a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z"/></svg>
        </div>
        <div class="spinner top-0 right-0 mr-4 mt-3" :class="{ none: !searching}"></div>
        <div
            class="z-50 absolute bg-gray-800 text-sm rounded w-64 mt-2"
            :class="{ none: !isOpen}"
        >
            <ul v-if="result.length > 0">
                 <li class="border-b border-gray-700" v-for="movie in result" :key="movie.id">
                    <router-link :to="{ name: 'movie', params: { id: movie.id }}" class="white-none block hover:bg-gray-700 px-3 py-3 flex items-center transition ease-in-out duration-150">
                        <img :src="movie.poster_path" alt="poster" class="w-8">
                        <span class="ml-4">{{ movie.title }}</span>
                    </router-link>
                </li>
            </ul>
            <div class="px-3 py-3" v-else>
                <span v-if="query.length > 0">
                    No results for "{{ query }}"
                </span>
                <span v-else>
                    Hãy thử tìm kiếm thứ gì đó
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'SearchBar',
    data(){
        return {
            isOpen: false,
            searching: false,
            timeout: null,
            query: '',
            result: [],
        }
    },
    methods: {
        outSide(){
            this.isOpen = false;
        },
        onSearch(){  
            this.searching = true; 
            clearTimeout(this.timeout);
            this.search();
        },
        search(){
            this.timeout = setTimeout(() => {
                if(this.query.length === 0){ this.searching = false; this.result = []; return; }
                this.$store.dispatch('App/SEARCH', this.query)
                    .then( e => {
                        this.searching = false;
                        this.result = e.data.data;
                    });
            }, 1000);
        }
    }
}
</script>
<style>
    .none{
        display: none;
    }
    .white-none{
        color: white !important;
        text-decoration: none !important;
    }
</style>