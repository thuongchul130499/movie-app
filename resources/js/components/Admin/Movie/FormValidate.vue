<template>
    <div>
        <Loading v-if="loading" />
        <form enctype="multipart/form-data" @submit.prevent="handleForm" v-if="!loading">
            <input type="hidden" name="_method" value="put" v-if="type == 'edit'"/>
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
                <label>Thể loại</label>
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
            <div class="form-group">
                <button
                    type="button"
                    class="btn btn-primary btn-sm"
                    data-toggle="modal"
                    data-target="#modelId"
                    :class="{
                            'btn-danger':$v.movie.actor_ids.$error,
                            'btn-primary':!$v.movie.actor_ids.$invalid,
                       }"
                >
                  Chọn diễn viên
                </button>
                <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-secondary" type="button"><span class="fa fa-search "></span></button>
                                    </div>
                                    <input type="text" class="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1" v-model="filter_actor">
                                </div>
                            </div>
                            <div class="modal-body" id="list-actors">
                                <div class="container-fluid row">
                                    <input type="hidden" name="actor_ids" v-model="movie.actor_ids">
                                    <div class="col-md-3" v-for="(actor, index) in getActor" :key="index">
                                        <div class="custom-control custom-checkbox image-checkbox">
                                            <input
                                                type="checkbox"
                                                class="custom-control-input"
                                                :id="actor.name + index"
                                                ref="actor_ids"
                                                @change="pushActor"
                                                :value="actor.id"
                                                :checked="movie.actor_ids.includes(actor.id)"
                                            >
                                            <label class="custom-control-label text-center" :for="actor.name + index">
                                                <img :src="actor.profile_path" alt="#" class="img-fluid">
                                                {{ actor.name }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
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
                        <input type="hidden" name="image_ids[]" v-if="type === 'edit'" :value="movie.image_ids">
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
                                        @click.prevent="
                                            movie.images.splice(index, 1),
                                            files.splice(index, 1),
                                            movie.image_ids.push(file.id)
                                        "
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
                <button type="submit" class="btn btn-success"> {{ type == 'create' ? 'Tạo mới' : 'Cập nhật'}} </button>
            </div>
        </form>
    </div>
</template>

<script>
import _ from 'lodash';
import { Multiselect } from 'vue-multiselect'
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators';
import Loading from '@/components/Loading';
export default {
    props: ['type'],
    name: 'FormValidate',
    components: { Multiselect, Loading },
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
                actor_ids: [],
            },
            poster_name: '',
            tags: [],
            files: [],
            options: [],
            actors: [],
            error_poster: '',
            loading: false,
            filter_actor: '',
        }
    },
    async created(){
        await axios.get('/api/movies/create')
            .then(res => {
                this.options = res.data.genres;
                this.$store.commit('Actor/SET_ACTOR', res.data.actors);
                this.actors = res.data.actors;
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
            },
            actor_ids:{
                required
            }
        }
    },
    computed: {
        getActor() {
            let filtered = this.actors;
            if(this.filter_actor){
                filtered = this.actors.filter(
                    actor => actor.name.toLocaleLowerCase().includes(this.filter_actor.toLocaleLowerCase())
                );
            }
            return filtered;
        }
    },
    methods: {
        selectFile(){
            let files = this.$refs.files.files;
            this.files = [...this.files, ...files];
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
        validate(file, type = false){
            if(type) return '';
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
        async handleForm($event){
            this.$v.$touch();
            if(this.validate(this.$refs.poster.files[0], this.type == 'edit' ? true : false) == ''){
                if(!this.$v.$invalid){
                    let fd = new FormData($event.target);
                    fd.append('tags', JSON.stringify(this.tags));
                    this.loading = true;
                    if(this.type == 'create'){
                        this.$store.dispatch('Movie/CREATE_MOVIE', fd)
                        .then(res => {
                            this.loading = false;
                            this.$router.push({ name: 'admin-movies' });
                        }).catch(err => {
                            this.loading = false;
                            this.$swal({
                                text: err.response.data.message,
                                button: true,
                                icon: 'error',
                                dangerMode: true
                            });
                        })
                    }else{
                        this.$store.dispatch('Movie/UPDATE_MOVIE', {
                            id: this.$route.params.id,
                            data: fd
                        }).then(e => {
                            this.loading = false;
                            this.$router.push({ name: 'admin-movies' });
                        }).catch(err => {
                            this.loading = false;
                            this.$swal({
                                text: err.response.data.message,
                                button: true,
                                icon: 'error',
                                dangerMode: true
                            });
                        });
                    }
                }
            }else{
                this.$refs.poster.classList.add('is-invalid');
                this.error_poster = this.validate(this.movie.poster);
            }
        },
        getMovie(id){
            this.loading = true;
            this.$store.dispatch('Movie/GET_MOVIE', id)
                .then(res => {
                    this.loading = false;
                    const movie = res.data.data;
                    this.movie = { ...this.movie, ...movie }
                    this.poster_name = movie.poster_path.replace('movies/', '')
                    this.tags = movie.genreses
                    this.movie.images = this.handleImages(movie.images)
                    this.movie.actor_ids = movie.actors.map( e => e.id )
                })
                .catch(err => {
                    this.loading = false;
                    if(err.response.status === 404){
                        this.$store.commit('Movie/NOT_FOUND');
                        this.$router.push({ name: 'admin-movies'});
                    }
                })
        },
        handleImages(images){
            return images.map( e => {
                let image = JSON.parse(e.backdrops);
                return {
                    id: e.id,
                    invalidMessage:"",
                    name: image.original_name,
                    size: image.size,
                    type: image.type
                }
            });
        },
        pushActor(){
            let arr = [];
            this.$refs.actor_ids.forEach(element => {
                if(element.checked){
                    arr.push(parseInt(element.value));
                }
            });
            this.movie.actor_ids = arr;
        }
    }
}
</script>
<style>
    .option__image{
        max-height: 100px;
        max-width: 100px;
    }
    .custom-control.image-checkbox {
    position: relative;
    padding-left: 0;
    }

    .custom-control.image-checkbox .custom-control-input:checked ~ .custom-control-label:after, .custom-control.image-checkbox .custom-control-input:checked ~ .custom-control-label:before {
    opacity: 1;
    }

    .custom-control.image-checkbox label {
    cursor: pointer;
    }

    .custom-control.image-checkbox label:before {
    border-color: #007bff;
    background-color: #007bff;
    }

    .custom-control.image-checkbox label:after, .custom-control.image-checkbox label:before {
    transition: opacity .3s ease;
    opacity: 0;
    left: .25rem;
    }

    .custom-control.image-checkbox label:focus, .custom-control.image-checkbox label:hover {
    opacity: .8;
    }

    .custom-control.image-checkbox label img {
    border-radius: 2.5px;
    }

    .form-group-image-checkbox.is-invalid label {
    color: #dc3545;
    }

    .form-group-image-checkbox.is-invalid .invalid-feedback {
    display: block;
    }
    #list-actors{
        max-height: 500px;
        overflow-y: scroll;
    }
</style>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
