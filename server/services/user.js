/**
 * Created by Kim Lindqvist on 13-Mar-17.
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Promise = require('bluebird');
var _ = require('lodash');

const service = {};

service.login = login;
service.create = create;

module.exports = service;

function login(username, password) {

    let res;
    User.findOne({username: username})
        .then((user) => {
            if (user && bcrypt.compareSync(password, user.hash)) {
                res = {
                    _id: user._id,
                    username: user.username,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: jwt.sign({sub: user._id}, process.env.SECRET)
                };
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
    return Promise.resolve(res);
}
function createUser(data) {

    let res = {};
    let user = _.omit(data, 'password');
    user.hash = bcrypt.hashSync(data.password, 10);

    User.insert(user)
        .then((doc) => {
            res = doc;
        })
        .catch((err) => {
            return Promise.reject(err);
        });

}

function create(data) {

    let res;
    User.findOne({username: data.username})
        .then((user) => {
            if (user) {
                res = 'Username "' + data.username + '" is already taken';
            } else {
                createUser(data).then((user) => {
                    res = user;
                });
            }
        })
        .catch((err) => {
            return Promise.reject(err);
        });
    return Promise.resolve(res);
}




