'use strict';

const mysql = require('mysql');
const {promisify} = require('util');

module.exports = class Conexion {
    static makeConection(){
        this.connection = mysql.createConnection({
            host:'localhost', //%
            user:'grupo3',
            password:'1234',
            database:'tienda'
        });
        this.connection.connect((err) => {
            if(err) throw err;
            console.log('Conected!');
        });
    }

    static getConnection(){
        if(this.connection === undefined || this.connection == ""){
            this.makeConection();
        }
        console.log("Pasando...");
        this.connection.query = promisify(this.connection.query);
        return this.connection;
    }
}


