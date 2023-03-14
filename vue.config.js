const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // proxy: {
    //   '/api': {
    //     target: 'http://iwenwiki.com:3000',
    //     ws: true,
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^api': ''
    //     }
    //   }
    // }
  }
})
