const express = require('express')
const router = express.Router()
const servicesController = require('../app/controllers/servicesController')

router.use('/', servicesController.index)

module.exports = router
