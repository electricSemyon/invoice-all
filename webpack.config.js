const webpack = require('webpack');
const path = require('path');
const loadersConf = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HOST = process.env.HOST || "127.0.0.1";
const PORT = process.env.PORT || "8888";

module.exports = {
  watch: Boolean(!process.env.PROD),
  entry: [
    './src/index.js',
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'public/js'),
    filename: 'bundle.js'
  },
  module: {
    rules: loadersConf
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, "src"),
      path.join(__dirname, "node_modules"),
    ],
    alias: {
      "styles": path.resolve(__dirname, 'styles/'),
    }
  },
  devServer: {
    contentBase: "./public",
    watchOptions: {
      ignored: /node_modules/
    },
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    port: PORT,
    host: HOST,
    proxy: {
      "/api": {
        "target": "http://localhost:8000",
        "secure": false
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true
    }),
  ]
};