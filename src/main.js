// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/common.css'
import App from './App'
import router from './router'
import axios from "axios"

document.cookie = "name=ricky&test=415231321";
axios.defaults.baseURL = 'http://www.ricky.kim/server';
axios.defaults.headers.common['Content-Type'] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.response.use((response) => {
    return response.data;
}, function(error) {
    return Promise.reject(error);
});

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

// router.beforeEach((to, from, next) => {

// })

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})