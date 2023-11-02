let express = require('express');
let router = express.Router();  
const saleOrderInvoice_Alfonso = require('../controllers/saleorderinvoice.controller'); 

router.post('/addSaleOrderInvoice', saleOrderInvoice_Alfonso.addSaleOrderInvoice)

module.exports = router;