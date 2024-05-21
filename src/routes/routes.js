const express = require('express');
const path = require('path');
const router = express.Router();


router.get('/', (req, res) => {
    const homePath = path.join(__dirname, '../public/home/index.html');
    res.sendFile(homePath);
})

module.exports = router

