const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = function (env, options) {
  const isProduction = options.mode === "production";

  const config = {
    context: path.resolve(__dirname, "src"),

    mode: isProduction ? "production" : "development",

    devtool: isProduction ? "none" : "source-map",

    entry: "./index",

    resolve: {
      extensions: [".js", ".jsx"]
    },

    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: "babel-loader",
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
           use: ["style-loader", "css-loader"]
           /*use: ExtractTextPlugin.extract({
            fallback: "style-loader",
            use: "css-loader"})*/
        },
        {
          test: /\.(ttf|eot|svg|woff|png)$/,
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]?[hash]"
          }
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        hash: true,
        template: "./index.html"
      }),
      new ExtractTextPlugin("static/[name].css")
    ],

    output: {
      publicPath: '/'
    },
    devServer: {
      historyApiFallback: true
    }
  };

  return config;
};