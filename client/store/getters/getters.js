// 对传过来的数据进行处理并应用到页面上，类似于computed计算属性
export default {
  fullName (state) {
    return `${state.firstName}·${state.lastName}`
  }
}
