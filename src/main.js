import Vue from 'vue'
import App from './App.vue'
import Signin from './components/Signin.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './routers/router'

Vue.config.productionTip = false
Vue.use(Vuetify);
Vue.use(Vuelidate);
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
