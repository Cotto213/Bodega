let express = require('express');
let router = express.Router();
const products_Alfonso = require('../controllers/products.controller');

router.post('/addProducts', products_Alfonso.addProducts)
module.exports = router;