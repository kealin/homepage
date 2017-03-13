/**
 * Created by Kim Lindqvist on 12-Mar-17.
 */
const express = require('express');
const router = express.Router();
const userService = require('../services/user');

router.post('/login', login);
router.post('/create', create);

module.exports = router;

function login(req, res) {
    userService.login(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.status(401).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            console.log('asd');
            res.status(400).send(err);
        });
}

function create(req, res) {
    userService.create(req.body)
        .then(function (user) {
            if(user) res.sendStatus(200);
            else res.status(400).send('Error creating user');
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}