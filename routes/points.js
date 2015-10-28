var express = require('express');
var router = express.Router();
var PointController = require('../controllers/PointController');

router.get('/', PointController.listPoints);
router.post('/', PointController.createPoint);
router.get('/location/:latitude/:longitude', PointController.findPointByLocation);
router.get('/categories', PointController.listCategories);
router.post('/categories', PointController.createCategory);

module.exports = router;