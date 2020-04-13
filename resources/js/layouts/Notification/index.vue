<template>
    <div class="relative md:mt-0">
        <a href="#" 
            class="no_click"
            v-click-outside="outSide"
            @click="isOpen = true"
        >
             <span class="fa fa-bell"></span>
        </a>
        <div class="z-50 absolute bg-gray-800 text-sm rounded w-64 mt-2 notification" v-show="isOpen">
            <div class="px-3 py-3 pt-2">
                <h3 class="text-center pb-1">Notifications</h3>
                <hr class="text-white">
                <ul>
                    <li class="border-b border-gray-700">
                        <a href="/movie/2" class="white-none block hover:bg-gray-700 px-2 py-2 flex items-center transition ease-in-out duration-150">
                            <img src="https://image.tmdb.org/t/p/w500/fETgNj6Gx04fkYM5WeWPOwpPUri.jpg" alt="poster" class="w-10 item-noti">
                            <span class="ml-4">Những Gã Trai Hư Trọn Đời</span>
                        </a>
                    </li>
                    <li class="border-b border-gray-700">
                        <a href="/movie/2" class="white-none block hover:bg-gray-700 px-2 py-2 flex items-center transition ease-in-out duration-150">
                            <img src="https://image.tmdb.org/t/p/w500/fETgNj6Gx04fkYM5WeWPOwpPUri.jpg" alt="poster" class="w-10 item-noti">
                            <span class="ml-4">Những Gã Trai Hư Trọn Đời</span>
                        </a>
                    </li>
                </ul>
                <span class="center text-center pt-2">
                    <a href="#">Xem tất cả</a>
                </span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            isOpen: false,
        }
    },
    methods: {
        outSide(){
            this.isOpen = false;
        },
    }
}
</script>
<style scoped>
    .notification{
        left: -125px;
    }
    .pt-2{
        padding-top: 10px !important;
    }
    .text-white{
        color: white;
        border: 1px solid;
    }
    .item-noti{
        display: block;
        height: 48px;
        width: 48px;
        border-radius: 50%;
    }
    @media only screen and (min-width: 1080px) {
        .notification{
            min-width: 350px;
            left: -160px;
        }
    }
</style>