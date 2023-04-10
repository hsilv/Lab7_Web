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
    CDAALM: "./src/pages/books/CDAALM.js",
    EATPV: "./src/pages/books/EATPV.js",
    ECSLCDM: "./src/pages/books/ECSLCDM.js",
    EHQC: "./src/pages/books/EHQC.js",
    LBDA: "./src/pages/books/LBDA.js",
    abogacia: "./src/pages/story/abogacia/abogacia.js",
    bodas: "./src/pages/story/bodas_truncas/bodas_truncas.js",
    cpspp: "./src/pages/story/cpspp/cpspp.js",
    eat: "./src/pages/story/eat/eat.js",
    mecanica: "./src/pages/story/mecanica/mecanica.js",
    sicariato: "./src/pages/story/sicariato/sicariato.js",
    ultimatum: "./src/pages/story/ultimatum/ultimatum.js",
    story: "./src/pages/story/story.js",
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
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/books/CDAALM.html",
      filename: "CDAALM.bundle.html",
      chunks: ["CDAALM"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/books/EATPV.html",
      filename: "EATPV.bundle.html",
      chunks: ["EATPV"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/books/ECSLCDM.html",
      filename: "ECSLCDM.bundle.html",
      chunks: ["ECSLCDM"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/books/EHQC.html",
      filename: "EHQC.bundle.html",
      chunks: ["EHQC"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/books/LBDA.html",
      filename: "LBDA.bundle.html",
      chunks: ["LBDA"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/abogacia/abogacia.html",
      filename: "abogacia.bundle.html",
      chunks: ["abogacia"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/bodas_truncas/bodas_truncas.html",
      filename: "bodas_truncas.bundle.html",
      chunks: ["bodas"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/cpspp/cpspp.html",
      filename: "cpspp.bundle.html",
      chunks: ["cpspp"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/eat/eat.html",
      filename: "eat.bundle.html",
      chunks: ["eat"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/mecanica/mecanica.html",
      filename: "mecanica.bundle.html",
      chunks: ["mecanica"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/sicariato/sicariato.html",
      filename: "sicariato.bundle.html",
      chunks: ["sicariato"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/ultimatum/ultimatum.html",
      filename: "ultimatum.bundle.html",
      chunks: ["ultimatum"],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: "./src/pages/story/story.html",
      filename: "story.bundle.html",
      chunks: ["story"],
    }),
    new MiniCSSExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
};
