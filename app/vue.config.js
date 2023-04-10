const { defineConfig } = require("@vue/cli-service");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");
const Dotenv = require("dotenv-webpack");
module.exports = defineConfig({
  publicPath: "",
  transpileDependencies: true,
  configureWebpack: {
    plugins: [new NodePolyfillPlugin(), new Dotenv()],
    stats: { warnings: false },
  },
  chainWebpack: (config) => {
    config.plugins.delete("friendly-errors");
  },
});
