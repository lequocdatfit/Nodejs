var express = require('express');
var router = express.Router();
var db = require('../db');
var controller = require('../controller/users.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.post('/create', controller.postcreate);

router.get('/:id', controller.user);

module.exports = router;