const express = require('express')
const router = express.Router()

router.get('/',  (req, res) => {
    res.render('home')
})

router.get('/pet_description', (req, res) => {
    res.render('petDescription')
})

router.get('/pet_supply', (req, res) => {
    res.render('petSupply')
})

module.exports = router