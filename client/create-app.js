import Vue from 'vue'
import VueRouter from 'vue-router'
import VueX from 'vuex'
import Meta from 'vue-meta'

import App from './app.vue'
import createStore from './store/store'
import createRouter from './config/router'
import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(VueX)
Vue.use(Meta)

export default () => {
  const router = createRouter()
  const store = createStore()

  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}
