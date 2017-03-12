var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');

/** Change path based on dev environment **/
require('dotenv').config({path: '.env.test'});


var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'dist')));
console.log(path.join(__dirname, '..', 'dist'));

app.use(expressJwt({ secret: process.env.SECRET }).unless({ path: ['/users/authenticate'] }));

module.exports = app;
