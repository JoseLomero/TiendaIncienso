import React, { Component } from "react";
import { Categorias } from "../../../JSON/categorias.json";
import FormControlCategories from "../Formulario_categorias/form_control_categories";
import Categoria from "./listCategories.js";

class ControlListCategories extends Component {
   constructor(props) {
      super(props);
      this.state = {
         controles: {
            categories: true,
            formCategories: false
         },
         //Añadir los DAO correspondientes a cada
         categoriasList: [],

         transferItem: {}
      };
   }

   renderList = () => {
      Categorias.sort((a, b) => {
         if (a.id_categoria > b.id_categoria) return 1;
         else if (a.id_categoria < b.id_categoria) return -1;
         else return 0;
      });

      this.setState({
         controles: {
            categories: true,
            formCategories: false
         },
         categoriasList: Categorias.map((items, index) => {
            return (
               <li
                  className="list-group-item list-group-item-action d-flex justify-content-between"
                  key={index}
               >
                  <h5 className="mt-2">
                     <span className="font-weight-bold">ID: </span>
                     {items.id_categoria}
                     <span className="font-weight-bold"> Nombre: </span>
                     {items.cat_nombre}
                  </h5>
                  <div>
                     <button
                        className="btn btn-success mr-2"
                        onClick={() => this.openForm(items, false)}
                     >
                        Modificar
                     </button>
                     <button
                        className="btn btn-danger ml-2"
                        onClick={() => this.openForm(items, true)}
                     >
                        Eliminar
                     </button>
                  </div>
               </li>
            );
         })
      });
   };

   componentDidMount() {
      this.renderList();
   }

   openForm = (item, inputCondition) => {
      this.setState({
         controles: { categories: false, formCategories: true },
         transferItem: {
            id_categoria: item.id_categoria,
            cat_nombre: item.cat_nombre,
            cat_descripcion: item.cat_descripcion,
            input: inputCondition
         }
      });
   };

   cancel = event => {
      event.preventDefault();
      this.setState({
         controles: {
            categories: true,
            formCategories: false
         }
      });
   };

   savedItem = item => {
      item.preventDefault();
      if (item.target.id) {
         for (let i of Categorias) {
            if (item.target.id === i.id_categoria) {
               i.id_categoria = item.target.elements.id_categoria.value;
               i.cat_nombre = item.target.elements.cat_nombre.value;
               i.cat_descripcion = item.target.elements.cat_descripcion.value;
               break;
            }
         }
      } else {
         Categorias.push({
            id_categoria: item.target.elements.id_categoria.value,
            cat_nombre: item.target.elements.cat_nombre.value,
            cat_descripcion: item.target.elements.cat_descripcion.value
         });
      }
      this.renderList();
   };

   deleteItem = item => {
      for (let i in Categorias) {
         if (item === Categorias[i].id_categoria) {
            Categorias.splice(i, 1);
         }
      }
      this.renderList();
   };

   render() {
      return (
         <div className="my-5">
            {this.state.controles.categories && (
               <Categoria
                  listaCategorias={this.state.categoriasList}
                  add={this.openForm}
               />
            )}
            {this.state.controles.formCategories && (
               <FormControlCategories
                  elementoTransferido={this.state.transferItem}
                  saved={this.savedItem}
                  cancel={this.cancel}
                  delete={this.deleteItem}
                  changing={this.props.changing}
               />
            )}
         </div>
      );
   }
}

export default ControlListCategories;
