var express = require('express');
var router = express.Router();
var db = require('../db');
var controller = require('../controller/auth.controller');


router.get('/', controller.login);

router.post('/', controller.postlogin)

module.exports = router;