const mySql = require('mysql2');

const connection = mySql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '0+5U5AY?v~_m',
    database: 'news'
})

connection.connect((err) => {
    return err ? console.log(err) : console.log('DataBase connected');
})


