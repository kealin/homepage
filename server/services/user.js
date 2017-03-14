/**
 * Created by Kim Lindqvist on 13-Mar-17.
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Promise = require('bluebird');
const _ = require('lodash');

const service = {};

service.login = login;
service.create = create;

module.exports = service;

function login(username, password) {
    return new Promise((resolve, reject) => {

        User.findOne({username: username})
            .then((user) => {
                if (user && bcrypt.compareSync(password, user.hash)) {
                    resolve({
                        _id: user._id,
                        username: user.username,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: jwt.sign({sub: user._id}, process.env.SECRET)
                    });
                } else resolve();
            })
            .catch((err) => {
                reject(err);
            });
    });
}

function createUser(data) {

    let user = _.omit(data, 'password');
    user.hash = bcrypt.hashSync(data.password, 10);

    User.create(user)
        .then((doc) => {
           return Promise.resolve(doc._id);
        })
        .catch((err) => {
            return Promise.reject(err);
        });

}

function create(data) {
    return new Promise((resolve, reject) => {

    User.findOne({username: data.username})
        .then((user) => {
            if (user) {
                resolve('Username "' + data.username + '" is already taken');
            } else {
                p = createUser(data).then((user) => {
                    resolve(user);
                });
            }
        })
        .catch((err) => {
            reject(err);
        });
    })
}





