var express = require('express');
var app = express();
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var buildConfig = require('./webpack.config')


var host = 'react-koans-etherealite.c9users.io';
var webpackPort = 8081;
var webpackHostname= `${host}:${webpackPort}`;
var config = buildConfig(webpackHostname);


app.get('/app.js', function (req, res) {
  res.redirect(`//${webpackHostname}/build/app.js`);
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
  }).listen(webpackPort, process.env.IP, function (err, result) {
      if (err) {
        console.log(err);
      }
    });

var server = app.listen(8080, function () {
  console.log('Listening at http://localhost:%s', server.address().port);
});