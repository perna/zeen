var express = require('express');
var router = express.Router();
var RoleController = require('../controllers/RoleController');

router.get('/', RoleController.listRoles);
router.post('/', RoleController.createRole);
router.put('/:id', RoleController.updateRole);

module.exports = router;
