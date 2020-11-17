var express = require('express')
var router = express.Router();

router.post('/register', (req, res) => {
    console.log(req.body);
    res.send({ message: 'Register a user by sending a form' })
})

router.post('/login', (req, res) => {
    console.log(req.body);
    res.send({ message: 'The user MUST NOT be logged on' })
})

module.exports = router;