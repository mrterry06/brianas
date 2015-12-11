const path = require('path');
const webpack = require('webpack');


module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  }
};
