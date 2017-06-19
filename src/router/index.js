import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import faq from '@/components/Faq'
import login from '@/components/Login'
import dashboard from "@/components/Dashboard"
Vue.use(Router)
Router.RouterMode = "history"
export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: home,
        meta: { requireAuth: true }
    }, {
        path: '/faq',
        name: 'faq',
        component: faq,
        meta: { requireAuth: true }
    }, {

        path: '/login',
        name: 'login',
        component: login

    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: dashboard,
        meta: { requireAuth: true }
    }]

})