const Koa = require('koa')
const send = require('koa-send')
const path = require('path')
const app = new Koa()
const staticRouter = require('./routers/static')
const isDev = process.env.NODE_ENV === 'development'

app.use(async (ctx, next) => {
  if (ctx.path === '/favicon.ico') {
    send(ctx, 'favicon.ico', { root: path.join(__dirname, '../') })
  } else {
    await next()
  }
})

app.use(staticRouter.routes()).use(staticRouter.allowedMethods())
let pageRouter
// 判断是否为开发环境
if (isDev) {
  pageRouter = require('./routers/dev-ssr')
} else {
  pageRouter = require('./routers/ssr')
}

app.use(async (ctx, next) => {
  try {
    console.log(`request with path ${ctx.path}`)
    await next()
  } catch (error) {
    console.log(error)
    ctx.status = 500
    if (isDev) {
      ctx.body = error.message
    } else {
      ctx.body = 'Please try again later'
    }
  }
})

app.use(pageRouter.routes()).use(pageRouter.allowedMethods())

const HOST = process.env.HOST || '0.0.0.0'
const PORT = process.env.PORT || 3333

app.listen(PORT, HOST, () => {
  console.log(`Server is listening on ${HOST}:${PORT}`)
})
