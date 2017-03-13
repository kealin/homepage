/**
 * Created by Kim Lindqvist on 13-Mar-17.
 */
const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;

const UserSchema = new mongoose.Schema({
        username: {type: String, required: true},
        hash: {type: String, required: true},
        firstName: {type: String, required: false},
        lastName: {type: String, required: false},
        email: {type: String, required: true}
    },
    {
        timestamps: true
    });

module.exports = mongoose.model('User', UserSchema);