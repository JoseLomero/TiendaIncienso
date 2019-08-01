import React, { Component } from "react";

export default class Producto extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }

   render() {
      return (
         <div className="container card card-body border border-success col-sm-10 col-10 ">
            <button
               className="btn btn-success col-6 col-sm-2"
               onClick={() => this.props.add(false)}
            >
               Añadir
            </button>

            <ul className="list-group mt-3">
               <li className="list-group-item bg-dark">
                  <h3 className="text-white">Productos</h3>
               </li>
               {this.props.listaProductos}
            </ul>
         </div>
      );
   }
}
