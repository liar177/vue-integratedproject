module.exports = {
  lintOnSave: false,
  devServer: {
    open: true,
    proxy: {
      // 代理请求
      "/api": {
        target: "http://api.zhanyisc.com", // 目标接口域名
        changeOrigin: true, // 是否跨域
        pathRewrite: {
          "^/api": "" // 发现/api开头 去掉
        }
      }
    }
  }
};
