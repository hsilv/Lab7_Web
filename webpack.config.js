/** @type {import('webpack').Configuration} */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/app/index.js",
    news: "./src/pages/news/news.js",
    popular: "./src/pages/popular/popular.js",
    CDAALM: './src/pages/books/CDAALM.js'
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
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
        test: /\.jpg|.JPG|.mp3$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/app/index.html",
      filename: "index.bundle.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/news/news.html",
      filename: "news.bundle.html",
      chunks: ["news"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/popular/popular.html",
      filename: "popular.bundle.html",
      chunks: ["popular"],
    }),
    new MiniCSSExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};
