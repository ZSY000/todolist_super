<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <!-- <todo></todo> -->

    <!-- 跳转到指定名称的路由 -->
    <router-link :to="{name: 'todo'}">todo</router-link>
    <router-link to="/login">login</router-link>

    <!-- 给组件的显隐添加动画效果，用transition标签包裹 -->
    <transition name='fade'>
      <router-view></router-view>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
// import Todo from './views/todo/todo.vue' //todo组件使用异步加载

export default {
  components: {
    Header,
    Footer
    // Todo   // todo组件使用异步加载
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
</style>
