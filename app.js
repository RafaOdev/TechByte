const express = require('express');
const router = require('./routes/routes.js');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(router);

app.use(express.static(path.join(__dirname, 'src' , 'public')));


app.listen(PORT, () => {
    console.log('funcionando');
})


