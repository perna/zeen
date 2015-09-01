var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

router.get('/', UserController.listUsers);
router.post('/', UserController.createUser);
router.put('/:id', UserController.updateUser);

module.exports = router;
