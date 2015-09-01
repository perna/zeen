var express = require('express');
var router = express.Router();
var PointController = require('../controllers/PointController');

router.get('/', PointController.index);
router.get('/categories', PointController.listCategories);
router.post('/categories', PointController.createCategory);

module.exports = router;