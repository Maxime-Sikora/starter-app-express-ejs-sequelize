const express = require('express');
const router = express.Router();

// require controllers
const mainController = require('./controller/mainController')

// Les routes
router.get('/', mainController.index)

module.exports = router;