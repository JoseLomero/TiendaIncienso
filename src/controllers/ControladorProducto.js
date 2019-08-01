const ControladorBase = require('./ControladorBase');
const DaoProducto = require('../dao/DaoProducto');

module.exports = class ControladorProducto extends ControladorBase{

    constructor(){
        var dao = new DaoProducto();
        super(dao)
    }  
}