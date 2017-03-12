var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');
var expressJwt = require('express-jwt');

require('dotenv').load();

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'dist')));
console.log(path.join(__dirname, '..', 'dist'));

app.use(expressJwt({ secret: process.env.SECRET })
    .unless({ path: [
        '/auth/login'
    ] }));

module.exports = app;
