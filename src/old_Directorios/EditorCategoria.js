import React, { Component } from "react";

export default class EditorCategoria extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

   

    render() {
        

        return (
            <div>
                <h1>Categoria</h1>
                <input placeholder="idCategoria"></input>
                <input placeholder="nombre"></input>
                <input placeholder="descripción"></input>

            </div>
        );
    }
}