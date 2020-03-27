const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Workhard2019',
    database: 'hungry-alarm-login-c',
})

module.exports = connection