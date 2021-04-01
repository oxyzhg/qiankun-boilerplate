const { name } = require("./package");

module.exports = {
  devServer: {
    port: 4000,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  },

  lintOnSave: false
};
