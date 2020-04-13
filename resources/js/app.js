import './bootstrap';
import Vue from 'vue';
import store from './stores/index.js';
import router from './routes.js';
import { initialize } from "./services/auth";

import App from '@/views/App';

import VueSweetalert2 from 'vue-sweetalert2';
import Vuelidate from 'vuelidate';
import Multiselect from 'vue-multiselect'

Vue.component('multiselect', Multiselect)
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);
Vue.component('pagination', require('laravel-vue-pagination'));

Vue.directive('click-outside', {
    bind: function (el, binding, vnode) {
      el.clickOutsideEvent = function (event) {
        // here I check that click was outside the el and his childrens
        if (!(el == event.target || el.contains(event.target))) {
          // and if it did, call method provided in attribute value
          vnode.context[binding.expression](event);
        }
      };
      document.body.addEventListener('click', el.clickOutsideEvent)
    },
    unbind: function (el) {
      document.body.removeEventListener('click', el.clickOutsideEvent)
    },
  });
  
initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

export default app;