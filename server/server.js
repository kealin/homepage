const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const expressJwt = require('express-jwt');

require('dotenv').load();
require('./models/Db');
const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '..', 'dist')));

app.use(expressJwt({secret: process.env.SECRET})
    .unless({
        path: [
            '/api/user/login',
            '/api/user'
        ]
    })
);

app.use('/api/user', require('./controllers/user'));

module.exports = app;
