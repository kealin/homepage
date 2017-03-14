/**
 * Created by Kim Lindqvist on 13-Mar-17.
 */
const Promise = require('bluebird');
const mongoose = require('mongoose');

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

let model = mongoose.model('User', UserSchema);
model = Promise.promisifyAll(model);
module.exports = model;