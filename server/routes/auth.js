/**
 * Created by Kim Lindqvist on 12-Mar-17.
 */
var userService = require('services/auth');
router.post('/login', authenticate);

module.exports = router;

function authenticate(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (user) {
            if (user) {
                res.send(user);
            } else {
                res.status(401).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}