let express = require('express');
let router = express.Router();
const measure_Alfonso = require('../controllers/measure.controller');


router.post('/addMeasure', measure_Alfonso.addMeasure)
router.post('/getMeasure', measure_Alfonso.getMeasure)
module.exports = router;