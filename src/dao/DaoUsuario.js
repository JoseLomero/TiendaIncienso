'use strict';

const DaoBase = require('./DaoBase');

const ORDENES_USUARIO = {
    'INSERT' : 'INSERT INTO usuarios SET ?',
    'SELECT_ALL' : 'SELECT * FROM usuarios',
    'SELECT_UNO' : 'SELECT * FROM usuarios WHERE user_id = ',
    'DELETE' : 'DELETE FROM usuarios WHERE user_id = ',
    'UPDATE' : 'UPDATE usuarios SET user_nombre = ? WHERE user_id = ?'
}

module.exports = class DaoCategoria extends DaoBase{

    constructor(){
        super("DaoUsuario", "Usuario", ORDENES_USUARIO)
    }
}


