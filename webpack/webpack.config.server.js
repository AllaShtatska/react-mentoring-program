const merge = require("webpack-merge");
const nodeExternals = require("webpack-node-externals");
const common = require("./webpack.config.common");

const isDevMod = process.env.NODE_ENV === "development";

module.exports = merge(common, {
  name: "server",
  target: "node",
  entry: "./src/serverRenderer.js",
  externals: [nodeExternals()],
  output: {
    filename: "js/serverRenderer.js",
    libraryTarget: "commonjs2"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/,
        loader: "css-loader",
        options: {
          exportOnlyLocals: true, //It doesn't embed CSS but only exports the identifier mappings
          modules: true,
          localIdentName: "[name]-[hash:5]"
        }
      }
    ]
  }
});
