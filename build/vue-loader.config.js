// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true, // 避免空格影响
    extractCSS: !isDev,  // 提取css到一个文件中再加载，开发环境下不使用
    cssModules: {
      localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      camelCase: true //把css中的用-连接的class类名转成驼峰命名
    },
    // hotReload: false // 热重载



    // 自定义loader，可以在组件中使用
    // loaders: {
    //   'docs': docsLoader  
    // }
    // 在自定义loader解析完之前先用preLoader里的指定loader解析
    // preLoader: {},
    // 在自定义loader解析完之后再用preLoader里的指定loader解析
    // postLoader: {}
  }
}