const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    index: ["@babel/polyfill", "./assets/js/index.js"],
    service: ["@babel/polyfill", "./assets/js/service.js"],
    english: ["@babel/polyfill", "./assets/js/english.js"],
    coding: ["@babel/polyfill", "./assets/js/coding.js"],
    lectures: ["@babel/polyfill", "./assets/js/lectures.js"],
    main_lecture: ["@babel/polyfill", "./assets/js/main_lecture.js"],
  },
  devServer: {
    contentBase: "./dist",
  },
  devtool: "inline-source-map",
  output: {
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 'style-loader',
          MiniCssExtractPlugin.loader,
          "css-loader",
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "assets/js"),
        exclude: /(node_modules)|(dist)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(jpe?g|png|gif|svg|otf|ttf)$/i,
        loader: "file-loader?name=/assets/[name].[ext]",
      },
    ],
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin(), new TerserPlugin()],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "./templates/index.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "service.html",
      template: "./templates/service.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "english.html",
      template: "./templates/english.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "coding.html",
      template: "./templates/coding.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "lectures.html",
      template: "./templates/lectures.html",
      inject: false,
    }),
    new HtmlWebpackPlugin({
      filename: "main_lecture.html",
      template: "./templates/main_lecture.html",
      inject: false,
    }),
    new MiniCssExtractPlugin({ filename: "[name].min.css" }),
  ],
};
