var express = require('express');
var path = require('path');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

router.get('/login', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/login.html'));
});

router.get('/dashboard', function(req, res, next) {
  res.sendFile(path.join(__dirname + '/../public/dashboard.html'));
});

module.exports = router;
