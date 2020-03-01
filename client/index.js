import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './app.vue'
import createRouter from './config/router'
import createStore from './store/store'

import './assets/styles/global.styl'
// import actions from './store/actions/actions'
// import mutations from './store/mutations/mutations'
// import state from './store/state/state'
// import routes from './config/routes'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

// 注册模块
store.registerModule('c', {
  state: {
    num: '注册模块'
  }
})
// 解绑模块
// store.unregisterModule('c')

// 第一个参数相当于getters方法，这个方法的返回值，发生变化时执行第二个参数函数
store.watch((state) => state.count === 4, () => {
  console.log('count === 4')
})

// 监测mutations
store.subscribe((mutations, state) => {
  // console.log('mutations变了')
  // console.log(state)
})

// 监测actions
store.subscribeAction((action, state) => {
  console.log('actions变了')
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  // console.log(from)
  // console.log('beforeEach')
  next()
})

router.beforeResolve((to, from, next) => {
  // console.log('beforeResolve')
  next()
})

new Vue({
  store,
  router, // 引入路由
  render: (h) => h(App)
}).$mount('#root')
