const express = require('express');
const router = express.Router;
const getItemController = require('../controllers/getItemController')


/* GET home page. */
router.get('/items', getItemController.index);


module.exports = router;
