<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <P>{{fullName}} {{counter}}</P>
    <!-- <p>{{num}}</p> -->
    <!-- <p>{{text}} {{textPlus}}</p> -->
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
import { // 便于在组件内部使用数据
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'

export default {
  // vue-meta声明页面元信息
  metaInfo: {
    title: 'The Todo App'
  },
  components: {
    Header,
    Footer
    // Todo   // todo组件使用异步加载
  },
  mounted () {
    let i = 1
    // this.$store.state.count = 1 // 使用strict：true后不能在mutatons外部修改数据
    console.log(this.$store)
    setInterval(() => {
      // commit接收两个参数，第一个为mutations对象，第二个为参数，多个参数以对象的形式传入
      this.updateCount(i++) // 使用mapMutations后可以直接用this.方法名
    }, 1000)
    this.updateCountAsync({ // 使用mapActions后可以直接用this.方法名
      num: 5,
      time: 2000
    })
    // this['a/updateText'](1) // 命名空间调用
  },
  computed: {
    // 使用state的几种方法
    // count () {
    //   return this.$store.state.count
    // },
    // ...mapState(['count']), // 不用声明count数据，使用mapState
    // ...mapState({
    //   counter: 'count'  // 使用mapState，重命名count
    // }), // 不用声明count数据
    ...mapState({
      counter: (state) => state.count
    }),
    ...mapState({
      num: (state) => state.c.num
    }),
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // ...mapState({
    //   text: (state) => state.a.text // 调用模块中的数据
    // }),
    ...mapGetters({
      fullName: 'fullName'
      // textPlus: 'a/textPlus'
    })
  },
  methods: {
    // ...mapMutations(['updateCount', 'a/updateText']),
    ...mapMutations(['updateCount']),
    ...mapActions(['updateCountAsync'])
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
