const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    const homePath = path.join(__dirname, '../src/public/home/index.html');
    res.sendFile(homePath);
})


router.get('/', (req, res) => {
    res.send('in construction');
 })

module.exports = router

