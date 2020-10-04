var express = require('express');
var router = express.Router();
var db = require('../db');
var controller = require('../controller/users.controller');
var validate = require('../validate/users.validate.js');
var auMiddleware = require('../middleware/login.middleware');


router.get('/',auMiddleware.authRequire, controller.index);

router.get('/cookie', function(req, res, next) {
	res.cookie('user-id:', 12345);
	res.send("Hello");
});

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', validate.postcreate, controller.postcreate);

router.get('/:id', controller.user);

module.exports = router;