var path = require('path');
var express = require('express');
var mongoose = require('mongoose');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// =======================================
// Connect to MongoDB 
// =======================================
var mongoURI = 'mongodb://zhangbenny:3Dammitman@ds019766.mlab.com:19766/quanitified_skin' || 'mongodb://localhost/quantified_skin';
mongoose.connect(mongoURI);

// =======================================
// Load routers, main is inline 
// =======================================
require('./public/routers/routes.js')(app, express);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});


// =======================================
// Inserts data into MongoDB database 
// =======================================
require('./public/data/temperatures2015.js')
require('./public/data/temperatures2016.js')

// =======================================
// Start Server 
// =======================================
var port = process.env.PORT || 8080
app.listen(port, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at ' + port);
});
