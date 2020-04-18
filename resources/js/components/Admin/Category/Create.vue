<template>
  <div class="container-fluid row">
    <div class="text-center col-md-12 mt-5">
        <h3 class="text-dark">Tạo mới danh mục phim</h3>
    </div>
    <div class="col-md-9">
        <Cate link="Advanced">
            <VueNestable v-model="listCates">
                <VueNestableHandle
                    slot-scope="{ item }"
                    :item="item"
                    :max-depth="2"
                    children-prop="nested"
                    key-prop="key"
                    class="item-cate"
                    
                >
                    <i class="fas fa-list"/>
                    {{ item.name }}
                </VueNestableHandle>
            </VueNestable>
        </Cate>
        <div class="col-md-12 text-center">
            <button class="btn btn-success btn-sm" @click.prevent="postCate"> Xác nhận </button>
        </div>
    </div>
    <div class="col-md-3">
        <span class="text-dark">Danh mục mới</span>
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="newCate">Thêm mới</button>
            </div>
            <input type="text" class="form-control" placeholder="Tên danh mục" aria-describedby="button-addon1" ref="cate_name">
        </div>
    </div>
  </div>
</template>

<script>
import Cate from './Cate.vue';
import { uniID } from '@/services/helper.js';
import { mapState } from 'vuex';
export default {
    components: {
        Cate
    },
    data () {
        return {
            error: null,
            listCates: this.$store.getters['App/GET_CATE']
       }
    },
    mounted(){
        this.getCate();
    },
    methods: {
        getCate(){
            axios.get('/api/categories')
                .then(e => {
                    this.listCates = e.data;
                })
        },
        newCate(){
            let cate = this.$refs.cate_name.value;
            this.listCates.push({
                id: Date.now(),
                name: cate,
                children: []
            });
            this.postCate();
        },
        postCate(){
            axios.post('/api/categories', { categories: this.listCates }).
                then(e => {
                    this.$swal({
                        text: 'Cập nhật thành công',
                        icon: 'success',
                        button: true,
                    })
                }).catch(e => {
                    this.$swal({
                        text: 'Vui lòng thử lại',
                        icon: 'warning',
                    })
                });
        },
        viewFilm(){
            alert(1)
        }
    }
}
</script>
<style lang="scss" scoped>
    h3{
        font-size: 30px;
        font-weight: bold;
    }
    .item-cate{
        border: 1px solid gray;
        padding: 5px;
    }
</style>