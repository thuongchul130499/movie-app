<template>
<nav class="relative border-b border-gray-800 text-gray-900">
  <div class="container mx-auto flex justify-between">
    <div class="relative block p-4 lg:p-6 text-xl text-blue-600 font-bold"></div>
    <ul class="flex">
        <li class="hoverable hover:bg-blue-800 hover:text-white">
            <a href="#" @mouseover="getCate" class="relative block py-6 px-4 lg:p-3 text-sm lg:text-base font-bold hover:bg-blue-800 hover:text-gray text-white">Danh mục</a>
            <div class="p-6 mega-menu mb-16 sm:mb-0 shadow-xl bg-gray-800">
              <div class="container mx-auto w-full flex flex-wrap justify-between mx-2">
                <li v-for="(cate, index) in cates" :key="index" class="px-4 sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                    <a :href="`#category-${index}`" class="text-gray-100">{{ cate }}</a>
                </li>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </nav>
</template>
<script>
export default {
    data(){
        return {
            cates: []
        }
    },
    methods:{
        getCate(){
            if(this.cates.length === 0){
                this.cates = this.$store.getters["App/GET_GENRES"]
            }
            return ;
        }
    }
}
</script>
  <style>
  .mega-menu {
    display: none;
    left: 0;
    position: absolute;
    text-align: left;
    width: 100%;
  }
  .hoverable {
    position: static;
  }

  .hoverable > a:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  .hoverable:hover .mega-menu {
    display: block;
  }
  .toggleable > label:after {
    content: "\25BC";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }
  .toggle-input {
    display: none;
  }
  .toggle-input:not(checked) ~ .mega-menu {
    display: none;
  }

  .toggle-input:checked ~ .mega-menu {
    display: block;
  }

  .toggle-input:checked + label {
    color: white;
    background: #2c5282; /*@apply bg-blue-800 */
  }

  .toggle-input:checked ~ label:after {
    content: "\25B2";
    font-size: 10px;
    padding-left: 6px;
    position: relative;
    top: -1px;
  }

  </style>