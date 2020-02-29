import Router from 'vue-router'

import routes from './routes'

// 创建router实例对象，其中的路由封装在routes.js中
export default () => {
  return new Router({
    routes,
    mode: 'history', // url地址上无#，不用hash路由
    // base: '/base/', //会在路由前添加/base/，用来区分

    // 指定router-link（即渲染出来的a标签，使a进行前端路由的跳转）的class名
    // 可以全局设置类样式
    linkActiveClass: 'active-link', // 路由部分匹配时加上这个class
    linkExactActiveClass: 'exact-active-link', // 路由完全匹配时加上这个class
    scrollBehavior (to, from, savedPosition) { // 路径跳转的滚动行为
      if (savedPosition) {
        return savedPosition
      } else {
        return { x: 0, y: 0 }
      }
    },

    // 处理url中的参数，类似于JSON.parse
    // parseQuery (query) { },
    // 处理url中的参数，类似于JSON.stringify
    // stringifyQuery (obj) { }

    // 当浏览器不支持前端路由跳转时会自动处理，设为false时，每次都要请求服务器
    fallback: true
  })
}
