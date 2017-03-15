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
        .then((user) => {
            res.send(user);
        })
        .catch((err) => {
            res.status(400).send(err);
        });
}

async function create(req, res) {
    try {
        const user = await userService.create(req.body);
        if (!user._id) res.status(409).send(user);
        else res.status(200).send(user._id);
    } catch (e) {
        res.status(400).send(e.message);
    }
}