let express = require('express');
let router = express.Router();
const products_Alfonso = require('../controllers/products.controller');

router.post('/addProducts', products_Alfonso.addProducts)

router.post('/getProducts', products_Alfonso.getProducts)
router.post('/editProducts', products_Alfonso.editProducts)
router.post('/deleteProducts', products_Alfonso.deleteProducts)
module.exports = router;