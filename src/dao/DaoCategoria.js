'use strict';

const DaoBase = require('./DaoBase');

const ORDENES_CATEGORIA = {
    'INSERT' : 'INSERT INTO categorias SET ?',
    'SELECT_ALL' : 'SELECT * FROM categorias',
    'SELECT_UNO' : 'SELECT * FROM categorias WHERE id_categoria = ',
    'DELETE' : 'DELETE FROM categorias WHERE id_categoria = ',
    'UPDATE' : 'UPDATE categorias SET ? WHERE id_categoria = ?'
}

module.exports = class DaoCategoria extends DaoBase{

    constructor(){
        super("DaoCategoria", "Categoria", ORDENES_CATEGORIA)
    }
}


