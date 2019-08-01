import React, { Component } from "react";
import ControlListCategories from "../views/Categorias/Listado_categorias/controlListCategories.js";
import ControlListProducts from "../views/Productos/Listado_productos/controlListProducts";
import ControlListUsers from "../views/Usuarios/Listado_usuarios/controlListUsers";


// Cargamos Express y Router
const express = require('express');
const express_app = express();
const router = express.Router();

class ControlDisplay extends Component {
   constructor(props) {
      super(props);
      this.state = {
         controles: {
            users: true,
            categories: false,
            products: false
         },
         unsavedChanges: false
      };
   }

   chooseWindow = button => {
      if (
         (this.state.unsavedChanges &&
            window.confirm("Cambios sin guardar. \n ¿Descartar cambios?")) ||
         !this.state.unsavedChanges
      ) {
         this.changeInProgress(false);
         switch (button.target.value) {
            case "0":
               this.setState({
                  controles: {
                     users: true,
                     categories: false,
                     products: false
                  }
               });
                 
               
               break;
            case "1":
               this.setState({
                  controles: {
                     users: false,
                     categories: true,
                     products: false
                  }
               });
               express
               break;
            case "2":
               this.setState({
                  controles: {
                     users: false,
                     categories: false,
                     products: true
                  }
               });
               break;
            default:
               break;
         }
      }
   };
   changeInProgress = condition => {
      console.log("Cambio detectado");
      this.setState({ unsavedChanges: condition });
   };

   render() {
      return (
         <div>
            <div className="navbar navbar-expand-lg navbar-dark bg-dark">
               <button
                  name="users"
                  value="0"
                  className="btn btn-info btn-block m-3"
                  onClick={this.chooseWindow}
               >
                  Usuarios
               </button>
               <button
                  name="categories"
                  value="1"
                  className="btn btn-info btn-block m-3"
                  onClick={this.chooseWindow}
               >
                  Categorías
               </button>
               <button
                  name="products"
                  value="2"
                  className="btn btn-info btn-block m-3"
                  onClick={this.chooseWindow}
               >
                  Productos
               </button>
            </div>
            {this.state.controles.categories && (
               <div>
                  <ControlListCategories changing={this.changeInProgress} />
               </div>
            )}
            {this.state.controles.products && (
               <div>
                  <ControlListProducts changing={this.changeInProgress} />
               </div>
            )}
            {this.state.controles.users && (
               <div>
                  <ControlListUsers changing={this.changeInProgress} />
               </div>
            )}
         </div>
      );
   }
}
export default ControlDisplay;
