import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import {
  ValidationObserver, ValidationProvider, extend, localize, configure,
} from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import TW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
import './assets/js/filter';

Vue.config.productionTip = false;

Vue.component('Loading', Loading);
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
Vue.use(VueAxios, axios);
Vue.prototype.$bus = new Vue();

Object.keys(rules).forEach((rule) => {
  extend(rule, rules[rule]);
});

configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
  },
});

localize('zh_TW', TW);
window.$ = $;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
