var path = require('path');
var webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  resolve: {
    root: path.resolve('src')
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},
      {test: /\.html$/, loader: 'raw'}
    ]
  }
};
