<template>
    <div>
        <form enctype="multipart/form-data" @submit.prevent="createMovie">
            <div class="row form-group">
                <div class="col">
                    <label>Ngôn ngữ gốc :</label>
                    <input 
                        type="text"
                        name="original_language" 
                        class="form-control" 
                        placeholder="Original language" 
                        v-model.trim="$v.movie.original_language.$model"
                        :class="{
                            'is-invalid':$v.movie.original_language.$error,
                            'is-valid':!$v.movie.original_language.$invalid,
                        }"
                    >
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.original_language.required"> Original Language không được bỏ trống </span>
                        <span v-if="!$v.movie.original_language.minLength"> Original Language không quá ngắn </span>
                        <span v-if="!$v.movie.original_language.maxLength"> Original Language không quá dài </span>
                    </div>
                </div>
                <div class="col">
                    <label>Tiêu đề gốc :</label>
                    <input 
                        type="text" 
                        name="original_title" 
                        class="form-control" 
                        placeholder="Original title" 
                        v-model.trim="$v.movie.original_title.$model"
                        :class="{
                            'is-invalid':$v.movie.original_title.$error,
                            'is-valid':!$v.movie.original_title.$invalid,
                        }"
                    >
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.original_title.required"> Original Title không được bỏ trống </span>
                        <span v-if="!$v.movie.original_title.minLength"> Original Title không quá ngắn </span>
                        <span v-if="!$v.movie.original_title.maxLength"> Original Title không quá dài </span>
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Tên phim</label>
                    <input 
                        type="text"
                        name="title" 
                        class="form-control" 
                        placeholder="Title" 
                        v-model.trim="$v.movie.title.$model"
                        :class="{
                            'is-invalid':$v.movie.title.$error,
                            'is-valid':!$v.movie.title.$invalid,
                        }"
                    >
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.title.required"> Title không được bỏ trống </span>
                        <span v-if="!$v.movie.title.minLength"> Title không quá ngắn </span>
                        <span v-if="!$v.movie.title.maxLength"> Title không quá dài </span>
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Mô tả</label>
                    <textarea 
                        type="text" 
                        name="overview"
                        class="form-control" 
                        placeholder="Overview" 
                        v-model.trim="$v.movie.overview.$model"
                        :class="{
                            'is-invalid':$v.movie.overview.$error,
                            'is-valid':!$v.movie.overview.$invalid,
                        }"
                    ></textarea>
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.overview.required"> Overview không được bỏ trống </span>
                        <span v-if="!$v.movie.overview.maxLength"> Overview không quá dài </span>
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Dành cho người lớn :</label>
                    <select 
                        name="adult"
                        class="form-control"
                        placeholder="Overview" 
                        v-model.trim="$v.movie.adult.$model"
                        :class="{
                            'is-invalid':$v.movie.adult.$error,
                            'is-valid':!$v.movie.adult.$invalid,
                        }"
                    >
                        <option value="0">Yes</option>
                        <option value="1">No</option>
                    </select>
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.adult.between"> Giá trị không hợp lệ </span>
                    </div>
                </div>
                <div class="col">
                    <label>Trạng thái:</label>
                    <select class="form-control" v-model="movie.status" name="status">
                        <option value="released">Đã công chiếu</option>
                        <option value="soon">Sắp chiếu</option>
                    </select>
                </div>
                <div class="col">
                    <label>Mô tả ngắn:</label>
                    <input type="text" class="form-control" placeholder="Tag line" v-model="movie.tagline" name="tagline">
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Kinh phí</label>
                    <input type="number" class="form-control" placeholder="Kinh phí" v-model="movie.budget" name="budget">
                </div>
                <div class="col">
                    <label>Danh thu</label>
                    <input type="number" class="form-control" placeholder="Danh thu" v-model="movie.revenue" name="revenue">
                </div>
                <div class="col">
                    <label>Ngày công chiếu</label>
                    <input 
                        type="date"
                        class="form-control" 
                        name="release_date"
                        v-model.trim="$v.movie.release_date.$model"
                        :class="{
                            'is-invalid':$v.movie.release_date.$error,
                            'is-valid':!$v.movie.release_date.$invalid,
                        }"
                    >
                    <div class="invalid-feedback">
                        <span v-if="!$v.movie.overview.required"> Ngày công chiếu không được bỏ trống </span>
                    </div>
                </div>
                <div class="col">
                    <label>Runtime</label>
                    <input type="number" class="form-control" v-model="movie.runtime" name="runtime">
                </div>
            </div>
            <div class="form-group">
                <multiselect 
                    v-model="tags" 
                    tag-placeholder="Add this as new tag"
                    placeholder="Search or add a tag"
                    label="name"
                    track-by="name"
                    :options="options"
                    :multiple="true"
                    name="tags"
                    :value="tags"
                    :taggable="true"
                >
                </multiselect>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Videos</label>
                    <div class="custom-file">
                        <input type="file" class="custom-file-input" accept="video/*" ref="video" name="video">
                        <label class="custom-file-label">Choose file</label>
                    </div>
                </div>
                 <div class="col">
                    <label>Image</label>
                    <div class="custom-file">
                        <input 
                            multiple
                            type="file" 
                            class="custom-file-input" 
                            accept="image/png, image/jpeg, image/jpg" 
                            ref="files"
                            @change="selectFile"
                            name="images[]"
                        >
                        <input type="hidden" name="image_ids[]" v-if="type === 'edit'">
                        <label class="custom-file-label">Choose file</label>
                    </div>
                    <div class="filed">
                        <div class="level"
                            v-for="(file, index) in movie.images"
                            :key="index"
                            :class="file.invalidMessage && 'text-danger'"
                            >
                            <div class="level-left">
                                <div class="level-item">{{ file.name }}
                                    <a 
                                        @click.prevent="movie.images.splice(index, 1), files.splice(index, 1), movie.image_ids = movie.image_ids.filter(e => e != file.id)"
                                        class="cursor"
                                        :id="file.id"
                                    >
                                        <span v-if="file.invalidMessage">&nbsp; - {{ file.invalidMessage }} </span> 
                                        <span class="fa fa-times-circle"></span> 
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row form-group">
                <div class="col">
                    <label>Poster</label>
                    <div class="custom-file">
                        <input 
                            type="file"
                            class="custom-file-input"
                            accept="image/png, image/jpeg, image/jpg" 
                            ref="poster" 
                            name="poster"
                            @change="selectPoster"
                        >
                        <label class="custom-file-label">{{ poster_name == '' ? 'Choose file' : poster_name }}</label>
                        <div class="invalid-feedback">
                            <span v-if="error_poster != '' ">{{ error_poster }}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <button type="submit" class="btn btn-success"> Create </button>
            </div>
        </form>
    </div>
</template>

<script>
import _ from 'lodash';
import Multiselect from 'vue-multiselect'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators';
export default {
    props: ['type'],
    name: 'FormValidate',
    components: { Multiselect },
    data(){
        return {
            error: false,
            movie: {
                original_language: '',
                original_title: '',
                adult: 1,
                overview: '',
                images: [],
                popularity: 0,
                budget: 0,
                release_date: '',
                revenue: 0,
                runtime: 0,
                status: 'released',
                tagline: '',
                title: '',
                spoken_languages: '',
                video: '',
                poster: '',
                image_ids: [],
            },
            poster_name: '',
            tags: [],
            files: [],
            options: [],
            error_poster: '',
        }
    },
    async created(){
        await axios.get('/api/movies/create')
            .then(res => {
                this.options = res.data;
            })
    },
    mounted () {
        if(this.type == 'edit'){
            this.getMovie(this.$route.params.id);
        }
    },
    validations: {
        movie: {
            original_language:{
                required,
                minLength: minLength(3),
                maxLength: maxLength(10)
            },
            original_title:{
                required,
                minLength: minLength(3),
                maxLength: maxLength(255)
            },
            title:{
                required,
                minLength: minLength(3),
                maxLength: maxLength(255)
            },
            overview:{
                required,
                maxLength: maxLength(3000)
            },
            adult:{
                between: between(0, 1)
            },
            release_date:{
                required,
            }
        }
    },
    methods: {
        selectFile(){
            const files = this.$refs.files.files;
            this.files = [...this.files, ...files]
            this.movie.images = [
                ...this.movie.images,
                ..._.map(files, file => ({
                    name: file.name,
                    size: file.size,
                    type: file.type,
                    invalidMessage: this.validate(file)
                }))
            ]
        },
        selectPoster(){
            this.poster_name = this.$refs.poster.files[0].name
        },
        validate(file){
            const MAX_SIZE = 2000000;
            const allowedTypes = ['image/jpeg', 'image/png', "image/jpg"];
            if(file !== undefined){
                if(file.size > MAX_SIZE){
                    return `Max size : ${MAX_SIZE/1000}Kb`;
                }
                if(!allowedTypes.includes(file.type)){
                    return 'Not an image';
                }
                return '';
            }else{
                'Không được trống'
            }
        },
        async createMovie($event){
            this.$v.$touch();
            if(this.validate(this.$refs.poster.files[0]) == ''){
                if(!this.$v.$invalid){
                    let fd = new FormData($event.target);
                    fd.append('tags', JSON.stringify(this.tags));
                    this.$store.dispatch('Movie/CREATE_MOVIE', fd)
                    .then(res => {
                        this.$router.push({ name: 'admin-movies' });
                    }).catch(err => {
                        this.$swal({
                            text: err.response.data.message,
                            button: true,
                            icon: 'error',
                            dangerMode: true
                        });
                    })
                }
            }else{
                this.$refs.poster.classList.add('is-invalid');
                this.error_poster = this.validate(this.movie.poster);
            }
        },
        getMovie(id){
            this.$store.dispatch('Movie/GET_MOVIE', id)
                .then(res => {
                    const movie = res.data.data;
                    this.movie = { ...this.movie, ...movie }
                    this.poster_name = movie.poster_path.replace('movies/', '')
                    this.tags = movie.genreses
                    this.movie.images = this.handleImages(movie.images)
                })
                .catch(err => {
                    if(err.response.status === 404){
                        this.$store.commit('Movie/NOT_FOUND');
                        this.$router.push({ name: 'admin-movies'});
                    }
                })
        },
        handleImages(images){
            return images.map( e => {
                this.movie.image_ids.push(e.id)
                let image = JSON.parse(e.backdrops);
                return {
                    id: e.id,
                    invalidMessage:"",
                    name: image.original_name,
                    size: image.size,
                    type: image.type
                }
            });
        }
    }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>