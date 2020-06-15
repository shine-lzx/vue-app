"use strict";
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    port: 8888,
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
  },
  chainWebpack: (config) => {
    config.resolve.alias.set("@", resolve("src"));
  },
};
