var express = require('express');
var router = express.Router();

var db = require('../db');
var controller = require('../controller/products.controller');

router.get('/', controller.index);
router.get('/search', controller.search);

module.exports = router;