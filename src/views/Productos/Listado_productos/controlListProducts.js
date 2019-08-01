import React, { Component } from "react";
import { Productos } from "../../../JSON/productos.json";
import FormControlProducts from "../Formulario_productos/form_control_products";
import Producto from "./listProducts";

class ControlListProducts extends Component {
   constructor(props) {
      super(props);
      this.state = {
         controles: {
            products: true,
            formProducts: false
         },

         productosList: [],

         transferItem: {}
      };
   }
   renderList = () => {
      Productos.sort((a, b) => {
         if (a.id_producto > b.id_producto) return 1;
         else if (a.id_producto < b.id_producto) return -1;
         else return 0;
      });

      this.setState({
         controles: {
            products: true,
            formProducts: false
         },
         productosList: Productos.map(items => {
            return (
               <li
                  className="list-group-item list-group-item-action d-flex justify-content-between"
                  key={items.id_producto}
               >
                  <div>
                     <h5 className="mt-2">
                        <span className="font-weight-bold">ID: </span>
                        {items.id_producto}
                        <span className="font-weight-bold"> Nombre: </span>
                        {items.pro_descripcion}
                     </h5>
                     <h5 className="mt-2">
                        <span className="font-weight-bold"> Precio: </span>
                        {items.pro_precio} €
                        <span className="font-weight-bold"> Categoria: </span>
                        {items.id_categoria}
                     </h5>
                  </div>
                  <div className="mt-3">
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
      console.log("Elemento que se selecciona", item);
      this.setState(
         {
            controles: { productos: false, formProducts: true },
            transferItem: {
               id_producto: item.id_producto,
               pro_descripcion: item.pro_descripcion,
               pro_desLarga: item.pro_desLarga,
               pro_precio: item.pro_precio,
               pro_fecRepos: item.pro_fecRepos,
               pro_fecActi: item.pro_fecActi,
               pro_fecDesacti: item.pro_fecDesacti,
               pro_uniVenta: item.pro_uniVenta,
               pro_cantXUniVenta: item.pro_cantXUniVenta,
               pro_uniUltNivel: item.pro_uniUltNivel,
               id_pais: item.id_pais,
               pro_usoRecomendado: item.pro_usoRecomendado,
               id_categoria: item.id_categoria,
               pro_stkReservado: item.pro_stkReservado,
               pro_nStkAlto: item.pro_nStkAlto,
               pro_nStkBajo: item.pro_nStkBajo,
               pro_stat: item.pro_stat,
               input: inputCondition
            }
         },
         () =>
            console.log(
               "Elemento que se envia al formulario",
               this.state.transferItem
            )
      );
   };

   savedItem = item => {
      console.log(item.target.elements);
      item.preventDefault();
      if (item.target.id) {
         for (let i of Productos) {
            if (item.target.id === i.id_producto) {
               i.id_producto = item.target.elements.id_producto.value;
               i.pro_descripcion = item.target.elements.pro_descripcion.value;
               i.pro_desLarga = item.target.elements.pro_desLarga.value;
               i.pro_precio = item.target.elements.pro_precio.value;
               i.pro_fecRepos = item.target.elements.pro_fecRepos.value;
               i.pro_fecActi = item.target.elements.pro_fecActi.value;
               i.pro_fecDesacti = item.target.elements.pro_fecDesacti.value;
               i.pro_uniVenta = item.target.elements.pro_uniVenta.value;
               i.pro_cantXUniVenta =
                  item.target.elements.pro_cantXUniVenta.value;
               i.pro_uniUltNivel = item.target.elements.pro_uniUltNivel.value;
               i.id_pais = item.target.elements.id_pais.value;
               i.pro_usoRecomendado =
                  item.target.elements.pro_usoRecomendado.value;
               i.id_categoria = item.target.elements.id_categoria.value;
               i.pro_stkReservado = item.target.elements.pro_stkReservado.value;
               i.pro_nStkAlto = item.target.elements.pro_nStkAlto.value;
               i.pro_nStkBajo = item.target.elements.pro_nStkBajo.value;
               i.pro_stat = item.target.elements.pro_stat.value;
               break;
            }
         }
      } else {
         Productos.push({
            id_producto: item.target.elements.id_producto.value,
            pro_descripcion: item.target.elements.pro_descripcion.value,
            pro_desLarga: item.target.elements.pro_desLarga.value,
            pro_precio: item.target.elements.pro_precio.value,
            pro_fecRepos: item.target.elements.pro_fecRepos.value,
            pro_fecActi: item.target.elements.pro_fecActi.value,
            pro_fecDesacti: item.target.elements.pro_fecDesacti.value,
            pro_uniVenta: item.target.elements.pro_uniVenta.value,
            pro_cantXUniVenta: item.target.elements.pro_cantXUniVenta.value,
            pro_uniUltNivel: item.target.elements.pro_uniUltNivel.value,
            id_pais: item.target.elements.id_pais.value,
            pro_usoRecomendado: item.target.elements.pro_usoRecomendado.value,
            id_categoria: item.target.elements.id_categoria.value,
            pro_stkReservado: item.target.elements.pro_stkReservado.value,
            pro_nStkAlto: item.target.elements.pro_nStkAlto.value,
            pro_nStkBajo: item.target.elements.pro_nStkBajo.value,
            pro_stat: item.target.elements.pro_stat.value
         });
         console.log(Productos);
      }
      this.renderList();
   };

   cancel = () => {
      this.setState({
         controles: {
            products: true,
            formProducts: false
         }
      });
   };

   deleteItem = item => {
      for (let i in Productos) {
         if (item === Productos[i].id_producto) {
            Productos.splice(i, 1);
         }
      }
      this.renderList();
   };

   render() {
      return (
         <div className="my-5">
            {this.state.controles.products && (
               <Producto
                  listaProductos={this.state.productosList}
                  add={this.openForm}
               />
            )}
            {this.state.controles.formProducts && (
               <FormControlProducts
                  elementoTransferido={this.state.transferItem}
                  changing={this.props.changing}
                  saved={this.savedItem}
                  cancel={this.cancel}
                  delete={this.deleteItem}
               />
            )}
         </div>
      );
   }
}

export default ControlListProducts;
