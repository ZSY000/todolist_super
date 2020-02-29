import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import createRouter from './config/router'

import './assets/styles/global.styl'
// import routes from './config/routes'

Vue.use(VueRouter)

const router = createRouter()

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  console.log('beforeEach')
  next()
})

router.beforeResolve((to, from, next) => {
  console.log('beforeResolve')
  next()
})

new Vue({
  router, // 引入路由
  render: (h) => h(App)
}).$mount('#root')
