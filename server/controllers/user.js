/**
 * Created by Kim Lindqvist on 12-Mar-17.
 */
const express = require('express');
const router = express.Router();
const userService = require('../services/user');

router.post('/login', login);
router.post('/create', create);
router.get('/', getAll);
router.get('/:_id', getById);
//router.put('/:_id', update);
//router.delete('/:_id', remove);

module.exports = router;

async function login(req, res) {
    try {
    const user = await userService.login(req.body.username, req.body.password)
    res.send(user);
    } catch(e) {
        res.status(400).send(e);
    }
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

async function getById(req, res) {
    try {
        const user = await userService.getById(req._id);
        res.status(200).send(user);
    } catch (e) {
        res.status(400).send(e.message);
    }
}

async function getAll(req, res) {
    try {
        const users = await userService.getAll();
        res.status(200).send(users);
    } catch (e) {
        res.status(400).send(e.message);
    }
}