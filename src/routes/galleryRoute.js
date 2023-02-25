const express = require('express')
const router = express.Router()
const galleryController = require('../app/controllers/galleryController')

router.use('/', galleryController.index)

module.exports = router
