const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api',
    proxy({
      target: 'https://m.dcdapp.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      }
    })
  )
  app.use(
    '/ajax',
    proxy({
      target: 'https://m.toutiao.com',
      changeOrigin: true,
      pathRewrite: {
        '^/ajax': ''
      }
    })
  )
}