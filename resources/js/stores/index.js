import Vue from 'vue';
import Vuex from 'vuex';
import App from './modules/app';
import Account from './modules/account';
import Template from './modules/template';
import Movie from './modules/movie';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        App,
        Account,
        Template,
        Movie
    }
})