/**
 * Created by Kim Lindqvist on 13-Mar-17.
 */
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const _ = require('lodash');

const service = {};

service.login = login;
service.create = create;

module.exports = service;

async function login(username, password) {

    const user = await User.findOneAsync({username: username});
    if (user && bcrypt.compareSync(password, user.hash)) {
        return {
            _id: user._id,
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            token: jwt.sign({sub: user._id}, process.env.SECRET)
        }
    }
    else {
        throw new Error(`Invalid login attempt for ${username}`);
    }
}

function createUser(data) {
    let user = _.omit(data, 'password');
    user.hash = bcrypt.hashSync(data.password, 10);
    return User.createAsync(user);
}

async function create(data) {
    const user = await User.findOneAsync({username: data.username});
    if (user) {
        throw new Error(`Username ${data.username} is already taken`);
    }
    return createUser(data);
}





