const express = require('express')
const {addDemo } = require('../controllers/demoControllers')

const router = express.Router()

router.post('/demo', addDemo)

module.exports = {routes:router}