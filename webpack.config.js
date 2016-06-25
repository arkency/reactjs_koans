var webpack = require('webpack');
var path = require('path');

module.exports = function(hostname) {
 return {
    entry: [
      'webpack-dev-server/client?' + `http://${hostname}`,
      'webpack/hot/only-dev-server',
      './exercises/main'
    ],
  
    output: {
      path:       __dirname + '/build/',
      filename:   'app.js',
      publicPath: 'http://' + hostname + '/build/',
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
}