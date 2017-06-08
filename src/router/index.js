import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import faq from '@/components/Faq'
import login from '@/components/Login'
Vue.use(Router)
Router.RouterMode = "history"
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/faq',
        name: 'faq',
        component: faq
    }, {

        path: '/login',
        name: 'login',
        component: login
    }]
})