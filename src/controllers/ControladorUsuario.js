const ControladorBase = require('./ControladorBase');
const DaoUsuario = require('../dao/DaoUsuario');

module.exports = class ControladorUsuario extends ControladorBase{

    constructor(){
        var dao = new DaoUsuario();
        super(dao)
    }   
}