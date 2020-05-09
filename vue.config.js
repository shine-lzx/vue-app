module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 9999,
    open: true,
    proxy: {
      "/api": {
        target: "http://192.168.200.248:50000/api",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  }
};
