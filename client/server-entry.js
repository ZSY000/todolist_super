import createApp from './create-app'

export default (context) => {
  return new Promise((resolve, reject) => {
    const { app, router } = createApp()
    router.push(context.url)
    router.onReady(() => {
      const matchedComponents = router.getMatchedComponents()
      if (!matchedComponents.length) {
        return reject(new Error('No component matched'))
      }
      // 设置服务端的页面元信息
      context.meta = app.$meta()
      resolve(app)
    })
  })
}
