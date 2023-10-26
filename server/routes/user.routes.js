let express = require('express');
let router = express.Router();
const users =  require  ('../controllers/users.controller');

router.post('/addUsers', users.addUsers)

module.exports = router;