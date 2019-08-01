const ControladorBase = require('./ControladorBase');
const DaoCategoria = require('../dao/DaoCategoria');

module.exports = class ControladorCategoria extends ControladorBase{

    constructor(){
        var dao = new DaoCategoria();
        super(dao)
    } 
}