const express = require('express');
const router = express.Router();
const getItemController = require('../controllers/getItemController')


router.get('/api/items', getItemController.index)

module.exports = router;
