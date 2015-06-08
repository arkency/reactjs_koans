var express = require('express');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

app.get('/app.js', function (req, res) {
  res.redirect('//localhost:9090/build/app.js');
});

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/build/index.html');
});

app.use(express.static(__dirname + '/build/stylesheets'));

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    noInfo: true,
    historyApiFallback: true
  }).listen(9090, 'localhost', function (err, result) {
      if (err) {
        console.log(err);
      }
    });

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:%s', server.address().port);
});