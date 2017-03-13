const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

require('dotenv').load();

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(expressJwt({secret: process.env.SECRET})
    .unless({
        path: [
            '/api/user/login',
            '/api/user/create'
        ]
    })
);

app.use('/api/user', require('./routes/user'));

module.exports = app;
