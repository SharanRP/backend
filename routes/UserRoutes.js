const express = require('express');
const router = express.Router();
const {login, signup} = require('../controllers/UserController')

router.post('/loginblog', login)

router.post('/signup', signup)

module.exports = router
