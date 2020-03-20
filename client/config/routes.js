// import Todo from '../views/todo/todo.vue'
// import Login from '../views/login/login.vue'

// 封装所有路由
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    // path: '/app/:num',
    path: '/app',
    props: true,
    // 异步加载组件
    component: () => import('../views/todo/todo.vue'),
    name: 'todo', // 给路由命名
    meta: { // 定义页面元信息，同html中的meta标签
      title: 'Todo',
      description: 'this is todo'
    },
    // children: [
    //   {
    //     path: 'child',
    //     component: Login
    //   }
    // ]

    // 钩子函数，进入路由前调用
    beforeEnter: (to, from, next) => {
      next()
      // console.log('11')
    }
  },
  {
    path: '/login',
    // 异步加载组件
    component: () => import('../views/login/login.vue')
  }
]
