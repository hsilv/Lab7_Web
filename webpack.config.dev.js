/** @type {import('webpack').Configuration} */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: ["./src/app/index.js"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.bundle.js",
  },
  mode: 'development',
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|.scss|.sass$/i,
        use: [MiniCSSExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jpg|.JPG$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/app/index.html",
      filename: "index.bundle.html",
    }),
    new MiniCSSExtractPlugin(),
  ],
};
