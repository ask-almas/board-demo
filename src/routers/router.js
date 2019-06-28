import Vue from 'vue'
import VueRouter from 'vue-router'
import Signin from '../components/Signin.vue'
import App from '../App.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', component: App},
    {path: '/signin', component: Signin}
]

export default new VueRouter({mode: 'history', routes})