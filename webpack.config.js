const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval',

  entry: './example/src/app.js',

  output: {
    path: path.resolve('build'),
    filename: 'bundle.js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.less']
  },

  plugins: [new HtmlWebpackPlugin()],

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?presets[]=es2015&presets[]=react'],
        exclude: [path.resolve('node_modules')]
      },
      {
        test:   /\.less/,
        loaders: ['style', 'css', 'less'],
      }
    ]
  },

  stats: {
    colors: true
  },

  devServer: {
    stats: {
      chunkModules: false,
      colors: true
    }
  }
};