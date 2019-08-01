'use strict';
const mysql = require('mysql');
const Conexion = require('../utiles/Conexion');
// const connection = Conexion.getConnection();

module.exports = class DaoBase {
    constructor(programa, tabla, ordenes){
        this.programa = programa;
        this.tabla = tabla;
        this.ordenes = ordenes;
    }

    selectAll(){
        return this.selectComun(this.ordenes.SELECT_ALL);
    }

    selectUno(id){
        return this.selectComun(this.ordenes.SELECT_UNO + mysql.escape(id));
    }

    DeleteUno(id){
        const connection = Conexion.getConnection();
        connection.query(this.ordenes.DELETE + mysql.escape(id), (err, rows) => {
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
        });
    }

    InsertUno(object){
        const connection = Conexion.getConnection();
        connection.query(this.ordenes.INSERT, object, (err, rows) => {
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
        });
    }

    UpdateUno(object, id){
        console.log(object[0]);
        const connection = Conexion.getConnection();
        connection.query(this.ordenes.UPDATE, [object, id], (err, rows) => {
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
        });
    }

    selectComun(sql){
        const connection = Conexion.getConnection();
        connection.query(sql, (err, rows) => {
            if(err) throw err;

            console.log('Data received from Db:\n');
            console.log(rows);
        });
    }
}