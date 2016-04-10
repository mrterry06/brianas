const webpack = require('webpack');
const webpackBase = require('./webpack.base');
const config = webpackBase.config;
const loaders = webpackBase.loaders;


module.exports = config;

config.entry.main.unshift(
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/dev-server'
);

config.module = {
  loaders: [
    loaders.jsHmr,
    loaders.scss
  ]
};

config.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

config.devServer = {
  contentBase: './src',
  historyApiFallback: true,
  hot: true,
  port: 3000,
  publicPath: config.output.publicPath,
  stats: {
    cached: true,
    cachedAssets: true,
    chunks: true,
    chunkModules: false,
    colors: true,
    hash: false,
    reasons: true,
    timings: true,
    version: false
  }
};
