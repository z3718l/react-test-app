const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
        target: 'http://localhost:3100', // 跨域的地址
        changeOrigin: true,
        })
    )
}