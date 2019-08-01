'use strict';

const DaoBase = require('./DaoBase');

const ORDENES_PRODUCTO = {
    'INSERT' : 'INSERT INTO productos SET ?',
    'SELECT_ALL' : 'SELECT * FROM productos',
    'SELECT_UNO' : 'SELECT * FROM productos WHERE id_producto = ',
    'DELETE' : 'DELETE FROM productos WHERE id_producto = ',
    'UPDATE' : 'UPDATE productos SET pro_descripcion = ? WHERE id_producto = ?'
}

module.exports = class DaoProducto extends DaoBase{

    constructor(){
        super("DaoProducto", "Producto", ORDENES_PRODUCTO)
    }
}


