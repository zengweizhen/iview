const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  devServer: {

    // 跨域问题处理 在 api.pathUrl 中的 /testApi 替换成 空字符串 ‘’ 并拼接到 http://172.31.21.45:7001/api/ 后面
    // getUserInfo: '/testApi/user/queryUserInfo'
    // proxy: {
    //   '/testApi': {
    //     target: 'http://172.31.21.45:7001/api/',
    //     changeOrigin: true,
    //     pathRewrite: { '^/testApi': '' }
    //   }
    // }
    // 跨域问题处理，所有的请求都转换到 http://172.31.21.45:7001/api/ 后面
    proxy: 'http://172.31.21.45:7001/api/'
  }
})
