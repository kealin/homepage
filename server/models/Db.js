/**
 * Created by Kim Lindqvist on 12-Mar-17.
 */
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_CONNECTION_STRING, {server: {reconnectTries: Number.MAX_VALUE}});

mongoose.connection.on('connected', () => {
    console.log('Mongoose connection open to ' + process.env.DB_CONNECTION_STRING);
});

mongoose.connection.on('error', (err) => {
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose connection disconnected');
});

process.on('SIGINT', () => {
    mongoose.connection.close(function () {
        console.log('Mongoose default connection disconnected through app termination');
        process.exit(0);
    });
});