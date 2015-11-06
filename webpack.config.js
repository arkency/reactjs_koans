var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: [
    'webpack-dev-server/client?http://localhost:9090',
    'webpack/hot/only-dev-server',
    './exercises/main'
  ],

  output: {
    path:       __dirname + '/build/',
    filename:   'app.js',
    publicPath: 'http://localhost:9090/build/'
  },

  module: {
    loaders: [
      { test: path.join(__dirname, 'exercises'), loaders: ['react-hot', 'babel-loader']}
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
