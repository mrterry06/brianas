const path = require('path');
const webpack = require('webpack');

// plugins
const DefinePlugin = webpack.DefinePlugin;


module.exports = {
  devtool: 'inline-source-map',

  resolve: {
    root: path.resolve('./src')
  },

  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loader: 'babel'}
    ]
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('test')
    })
  ]
};
