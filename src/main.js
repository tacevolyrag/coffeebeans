import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import $ from 'jquery';
import 'bootstrap';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// 驗證套件
import {
  ValidationObserver, ValidationProvider, extend, localize, configure,
} from 'vee-validate';
// 驗證規則
import * as rules from 'vee-validate/dist/rules';
// 語系包
import TW from 'vee-validate/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';
// 數字轉為千分位
import './assets/js/filter';
import './bus';

window.$ = $;
Vue.config.productionTip = false;
Vue.component('Loading', Loading);
Vue.use(VueAxios, axios);

// 所有驗證規則
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
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
