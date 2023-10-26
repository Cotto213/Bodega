let express = require('express');
let router = express.Router();
const bodega_Alfonso = require('../controllers/bodega.controller');

router.post('/addBodega', bodega_Alfonso.addBodega)

module.exports = router;