const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://iwenwiki.com:3000',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
      '/foo': {
        target: 'https://interface.music.163.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/foo': ''
        }
      }
    }
  }
})
