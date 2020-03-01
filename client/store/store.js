import Vuex from 'vuex'
import defaultState from './state/state'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import actions from './actions/actions'

const isDev = process.env.NODE_ENV === 'development'

export default () => {
  const store = new Vuex.Store({
    strict: isDev, // 使用严格模式开发，在mutations外部不可以对数据进行修改
    state: defaultState,
    mutations,
    getters,
    actions,
    // 自定义插件，按顺序执行，存储的是方法
    plugins: [
      (store) => {
        console.log('plugins')
      }
    ]
    // modules: { // 模块
    //   a: {
    //     namespaced: true, // 命名空间，mutations和actions在指定模块内有效
    //     state: {
    //       text: 12
    //     },
    //     mutations: {
    //       updateText (state, text) {
    //         state.text = text
    //       }
    //     },
    //     getters: {
    //       // getters和rootState是全局的，可以获取全局中的数据
    //       textPlus (state, getters, rootState) {
    //         return state.text + 1
    //       }
    //     }
    //   }
    // }
  })
  // vuex热更新
  if (module.hot) {
    module.hot.accept([
      './state/state',
      './mutations/mutations',
      './actions/actions',
      './getters/getters'
    ], () => {
      const newState = require('./state/state').default
      const newMutations = require('./mutations/mutations').default
      const newActions = require('./actions/actions').default
      const newGetters = require('./getters/getters').default
      store.hotUpdate({
        state: newState,
        mutations: newMutations,
        getters: newGetters,
        actions: newActions
      })
    })
  }
  return store
}
