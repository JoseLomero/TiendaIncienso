const mysql = require('mysql');
var connection_mysql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tienda'
});
connection_mysql.connect();
connection_mysql.state();