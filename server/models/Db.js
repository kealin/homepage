/**
 * Created by Kim Lindqvist on 12-Mar-17.
 */
var mongoose = require( 'mongoose' );
require('dotenv').load();
mongoose.Promise = require('bluebird');

mongoose.connect(process.env.DATABASE_CONNECTION_STRING, { server: { reconnectTries: Number.MAX_VALUE } });

mongoose.connection.on('connected', function () {
    console.log('Mongoose connection open to ' + process.env.DATABASE_CONNECTION_STRING);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});

process.on('SIGINT', function() {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});