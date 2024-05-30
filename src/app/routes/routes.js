const express = require('express');
const router = express.Router();
const path = require('path');


router.use((req, res, next) => {
    if(!req.path.endsWith('/') && !req.path.includes('.')){
        res.redirect(301, `${req.path}/`);
    }else {
        next();
    }
});


router.get('/', (req, res) => {
    const homePath = path.join(__dirname, '../../html/home/index.html');
    res.sendFile(homePath);
})


router.get('/test', (req,res)=>{
    res.send('teste');
})

module.exports = router

