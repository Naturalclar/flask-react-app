const webpack = require('webpack');

module.exports = {
  entry: __dirname + '/src/main.js',
  output: {
    path: __dirname + '/static/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test:/\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test:/\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      }
    ]
  }
};