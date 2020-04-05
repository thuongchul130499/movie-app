import './bootstrap';
import Vue from 'vue';
import store from './stores/index.js';
import router from './routes.js';
import { initialize } from "./services/auth";
import App from '@/views/App';

import VueSweetalert2 from 'vue-sweetalert2';
Vue.use(VueSweetalert2);

initialize(store, router);

const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
});

export default app;