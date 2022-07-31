const express = require('express')
const router = express.Router({mergeParams: true})

router.use('/auth', require('./auth.routes'))
router.use('/brand', require('./brand.routes'))
router.use('/material', require('./material.routes'))
router.use('/user', require('./user.routes'))
router.use('/sneakers', require('./sneakers.routes'))

module.exports = router