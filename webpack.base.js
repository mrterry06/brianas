const autoprefixer = require('autoprefixer');
const path = require('path');
const webpack = require('webpack');

// plugins
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const DefinePlugin = webpack.DefinePlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// loaders
exports.loaders = {
  js: {test: /\.js$/, exclude: /node_modules/, loader: 'babel'},

  jsHmr: {test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: {
    plugins: [
      ['react-transform', {
        transforms: [
          {transform: 'react-transform-hmr', imports: ['react'], locals: ['module']}
        ]
      }]
    ]
  }},

  scss: {test: /\.scss$/, loader: 'style!css!postcss-loader!sass'},

  scssExtract: {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!postcss-loader!sass')}
};


exports.config = {
  cache: true,
  debug: false,
  devtool: 'source-map',

  entry: {
    main: ['./src/main.js'],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk'
    ]
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./target'),
    publicPath: '/'
  },

  resolve: {
    extensions: ['', '.js'],
    modulesDirectories: ['node_modules'],
    root: path.resolve('.')
  },

  plugins: [
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CommonsChunkPlugin('vendor', '[name].js'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      hash: true,
      inject: 'body',
      template: './src/index.html'
    })
  ],

  postcss: [
    autoprefixer({ browsers: ['last 3 versions', 'Firefox ESR'] })
  ],

  sassLoader: {
    outputStyle: 'compressed',
    precision: 10,
    sourceComments: false
  }
};
