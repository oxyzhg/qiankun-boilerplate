const { name } = require("./package");

module.exports = {
  devServer: {
    port: 4002,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  configureWebpack: {
    output: {
      library: `${name}-[name]`,
      libraryTarget: "umd",
      jsonpFunction: `webpackJsonp_${name}`
    }
  },

  lintOnSave: false
};
