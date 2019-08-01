'use strict';

module.exports = class ControladorBase{
    constructor(tipo){
        this.tipo = tipo;
    }

    listAll(){
        return this.tipo.selectAll();
    }

    listOne(id){
        return this.tipo.selectUno(id);
    }

    deleteOne(id){
        return this.tipo.DeleteUno(id);
    }

    insertOne(object){
        return this.tipo.InsertUno(object);
    }

    updateOne(object, id){
        return this.tipo.UpdateUno(object, id);
    }
}