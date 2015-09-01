var express = require('express');
var router = express.Router();
var controller = require('../controllers/AuthController');

router.post('/', controller.authenticate);

module.exports = router;
