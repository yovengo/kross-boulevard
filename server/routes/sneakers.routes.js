const express = require('express')
const Sneakers = require('../models/Sneakers')
const router = express.Router({mergeParams: true})

router.get('/', async (req, res) => {
    try {
        const list = await Sneakers.find()
        res.status(200).send(list)
    } catch (error) {
        res.status(500).json({message: 'На сервере произошла ошибка. Попробуйте позже'})
    }
})


module.exports = router