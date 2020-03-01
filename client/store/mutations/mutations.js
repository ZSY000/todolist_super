// 对数据的修改，且必须是同步操作，不能有异步操作
export default {
  updateCount (state, num) {
    state.count = num
  }
}
