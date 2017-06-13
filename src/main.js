// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueNotifications from 'vue-notifications'
import miniToastr from 'mini-toastr'
import Ripple from 'vue-ripple-directive'
import App from './App'
import router from './router'
import test from './components/Test'
import VueResource from 'vue-resource'
const toastTypes = {
    success: 'success',
    error: 'error',
    info: 'info',
    warn: 'warn'
}
miniToastr.init({ types: toastTypes })

function toast({ title, message, type, timeout, cb }) {
    return miniToastr[type](message, title, timeout, cb)
}
const options = {
    success: toast,
    error: toast,
    info: toast,
    warn: toast
}
VueNotifications.config.timeout = 5000
Vue.use(VueNotifications, options)
Vue.directive('ripple', Ripple)

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.component('test', [test])
new Vue({
    el: '#app',

    router,
    render: h => h(App)
}).$mount("#app");