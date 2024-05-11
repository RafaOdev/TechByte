const express = require('express');
const router = require('./src/routes/routes.js');


const app = express();
app.use(router);


const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log('funcionando');
})


