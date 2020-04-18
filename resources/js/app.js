import './bootstrap';
import Vue from 'vue';
import store from './stores/index.js';
import router from './routes.js';
import { initialize } from "./services/auth";

import App from '@/views/App';
// import library
import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import Multiselect from 'vue-multiselect'
import VueI18n from 'vue-i18n';
import VueNestable from 'vue-nestable'

// use library
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.use(VueI18n);
Vue.use(VueNestable)

//use component
Vue.component('pagination', require('laravel-vue-pagination'));
Vue.component('multiselect', Multiselect)

//custom directive
Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        if (!(el == event.target || el.contains(event.target))) {
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
});

import lang from '@/lang/lang.js';
const i18n = new VueI18n({
  locale: 'vi',
  lang
})

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    i18n,
    render: h => h(App),
});

export default app;
