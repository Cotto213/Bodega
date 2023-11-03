let express = require('express');
let router = express.Router();
const inventory_Alfonso = require('../controllers/inventory.controller');

router.post('/getInventory', inventory_Alfonso.getInventory)

module.exports = router;