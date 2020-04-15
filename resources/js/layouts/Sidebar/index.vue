<template>
    <div>
        <link href="https://use.fontawesome.com/releases/v5.0.6/css/all.css" rel="stylesheet">
        <div class="page-wrapper chiller-theme" :class="{toggled: toggle}">
            <a id="show-sidebar" class="btn btn-sm btn-dark" href="#" @click.prevent="toggleSidebar">
                <i class="fas fa-bars"></i>
            </a>
            <nav id="sidebar" class="sidebar-wrapper" :class="{relative: toggle}">
                <div class="sidebar-content">
                    <div class="sidebar-brand">
                        <a href="#">pro sidebar</a>
                        <div id="close-sidebar" @click.prevent="toggleSidebar">
                            <i class="fas fa-times"></i>
                        </div>
                    </div>
                    <div class="sidebar-header">
                        <div class="user-pic">
                        <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
                            alt="User picture">
                        </div>
                        <div class="user-info">
                        <span class="user-name">Jhon
                            <strong>Smith</strong>
                        </span>
                        <span class="user-role">Administrator</span>
                        <span class="user-status">
                            <i class="fa fa-circle"></i>
                            <span>Online</span>
                        </span>
                        </div>
                    </div>
                    <div class="sidebar-menu">
                        <ul>
                            <li class="header-menu">
                                <span>General</span>
                            </li>
                            <li class="sidebar-dropdown" @click.prevent="dropdown">
                                <a href="#">
                                    <i class="fa fa-tachometer-alt"></i>
                                    <span>Dashboard</span>
                                    <span class="badge badge-pill badge-warning">New</span>
                                </a>
                            </li>
                            <li class="sidebar-dropdown" @click.prevent="dropdown">
                                <a href="#">
                                <i class="fa fa-list-ol"></i>
                                <span>Categories</span>
                                </a>
                                <div class="sidebar-submenu">
                                    <ul>
                                        <li><router-link :to="{ name: 'admin-cates'}">List</router-link></li>
                                        <li><router-link :to="{ name: 'create-cate'}">Create</router-link></li>
                                    </ul>
                                </div>
                            </li>
                            <li class="sidebar-dropdown" @click.prevent="dropdown">
                                <a href="#">
                                <i class="fa fa-film"></i>
                                <span>Movies</span>
                                </a>
                                <div class="sidebar-submenu">
                                    <ul>
                                        <li><router-link :to="{ name: 'admin-movies'}">List</router-link></li>
                                        <li><router-link :to="{ name: 'create-movie'}">Create</router-link></li>
                                    </ul>
                                </div>
                            </li>
                             <li class="sidebar-dropdown" @click.prevent="dropdown">
                                <a href="#">
                                <i class="fa fa-user"></i>
                                <span>Actors</span>
                                </a>
                                <div class="sidebar-submenu">
                                    <ul>
                                        <li><router-link :to="{ name: 'admin-actors'}">List</router-link></li>
                                        <!-- <li><router-link :to="{ name: 'create-movie'}">Create</router-link></li> -->
                                    </ul>
                                </div>
                            </li>
                            <li class="header-menu">
                                <span>Extra</span>
                            </li>
                            <li>
                                <a href="#">
                                <i class="fa fa-book"></i>
                                <span>Documentation</span>
                                <span class="badge badge-pill badge-primary">Beta</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                <i class="fa fa-calendar"></i>
                                <span>Calendar</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sidebar-footer">
                    <a href="#">
                        <i class="fa fa-bell"></i>
                        <span class="badge badge-pill badge-warning notification">3</span>
                    </a>
                    <a href="#">
                        <i class="fa fa-envelope"></i>
                        <span class="badge badge-pill badge-success notification">7</span>
                    </a>
                    <a href="#">
                        <i class="fa fa-cog"></i>
                        <span class="badge-sonar"></span>
                    </a>
                    <a href="#" @click.prevent="LOG_OUT">
                        <i class="fa fa-power-off"></i>
                    </a>
                </div>
            </nav>
        </div>
    </div>
</template>
<script>
import { mapMutations} from 'vuex';
export default {
    name: 'Sidebar',
    data(){
        return {
            toggle: this.$store.getters.TOGGLE
        }
    },
    methods: {
        ...mapMutations('Account', [
            'LOG_OUT'
        ]),
        toggleSidebar(){
            this.toggle = !this.toggle;
            this.$store.dispatch('TOGGLE', this.toggle);
        },
        dropdown(event){
            let currentEle = event.currentTarget.querySelector('.sidebar-submenu');
            const list = document.getElementsByClassName('sidebar-submenu');
            for (let item of list) {
                if(item != currentEle){
                    item.classList.remove('show');
                }
            }
            currentEle.classList.toggle('show');
        },
    }
}
</script>
<style lang="scss" scoped>
    @import './index.scss';

    #show-sidebar{
        z-index: 9;
    }
    .show{
        display: block !important;
        -webkit-animation: fadeIn 1s;
        animation: fadeIn 1s;
    }


    @-webkit-keyframes fadeIn {
        from { 
            opacity: 0;
            -moz-transition: opacity 0.4s ease-in-out;
            -o-transition: opacity 0.4s ease-in-out;
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
        }
        to {
             opacity: 1; 
             -moz-transition: opacity 0.4s ease-in-out;
            -o-transition: opacity 0.4s ease-in-out;
            -webkit-transition: opacity 0.4s ease-in-out;
            transition: opacity 0.4s ease-in-out;
        }
    }
</style>
