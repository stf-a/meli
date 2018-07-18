const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController')


/* GET home page. */
router.get('/api/items', searchController.index);


module.exports = router;
