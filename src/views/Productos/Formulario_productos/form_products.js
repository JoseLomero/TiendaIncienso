import React, { Component } from "react";
import Filters from '../../../controllers/Filters';

class FormProducts extends Component {
   constructor(props) {
      super(props);
      this.state = {};
      console.log("Elemento recibido en formulario", props.actualValues);
      //var filtros = new this.Filters();
   }

   changeDetected = () => {
      console.log("cambiando");
   };

   render() {
      var filtros = new Filters();
      return (
         <div className="card card-body border-success bg-light">
            <form
               id={this.props.actualValues.id_producto}
               onSubmit={event => {
                  this.props.saved(event);
                  this.props.changing(false);
               }}
            >
               <h1 className="text-center mb-3">Productos</h1>
               <div className="form-group form-row">
                  <div className="col-sm-3">
                     <label>ID:</label>
                     <input
                        type="text"
                        id="id_producto"
                        name="id_producto"
                        className="form-control"
                        placeholder="ID de producto"
                        //value={this.props.actualValues.id_producto}
                        defaultValue={this.props.actualValues.id_producto}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           console.log(event.target.value);
                           this.changeDetected(event);
                           this.props.changing(true);
                           if(filtros.productFilter(event.target)){console.log("Truee")};
                           if(!filtros.productFilter(event.target)){console.log("Falsee"); filtros.addError()};
                        }}
                        autoFocus
                     />
                  </div>
                  <div className="col-sm-3">
                     <label>ID Categoria:</label>
                     <input
                        type="number"
                        id="id_categoria"
                        name="id_categoria"
                        className="form-control"
                        placeholder="ID Categoria"
                        defaultValue={this.props.actualValues.id_categoria}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-3">
                     <label>ID Pais:</label>
                     <input
                        type="number"
                        id="id_pais"
                        name="id_pais"
                        className="form-control"
                        placeholder="ID Pais"
                        defaultValue={this.props.actualValues.id_pais}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-3">
                     <label>Precio:</label>
                     <input
                        type="number"
                        id="pro_precio"
                        name="pro_precio"
                        className="form-control"
                        placeholder="Precio de producto"
                        defaultValue={this.props.actualValues.pro_precio}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
               </div>
               <div className="form-group">
                  <label>Descripcion Corta:</label>
                  <input
                     type="text"
                     id="pro_descripcion"
                     name="pro_descripcion"
                     className="form-control"
                     placeholder="Descripcion Corta"
                     defaultValue={this.props.actualValues.pro_descripcion}
                     disabled={this.props.actualValues.input}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        if(filtros.longFilter(event.target, 5, 100) === true){console.log("Descripcion dentro de los rangos");};
                        if(filtros.longFilter(event.target, 5, 100) === false){console.log("Descripcion fuera de los rangos"); filtros.addError()};
                     }}
                  />
               </div>

               <div className="form-group">
                  <label>Descripcion Larga:</label>
                  <textarea
                     rows="3"
                     type="text"
                     id="pro_desLarga"
                     name="pro_desLarga"
                     className="form-control"
                     placeholder="Descripcion Larga"
                     defaultValue={this.props.actualValues.pro_desLarga}
                     disabled={this.props.actualValues.input}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        if(filtros.longFilter(event.target, 5, 2000)){console.log("Descripcion dentro de los rangos");};
                        if(!filtros.longFilter(event.target, 5, 2000)){console.log("Descripcion fuera de los rangos"); filtros.addError()};
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Uso Recomendado:</label>
                  <input
                     type="text"
                     id="pro_usoRecomendado"
                     name="pro_usoRecomendado"
                     className="form-control"
                     placeholder="Uso Recomendado"
                     defaultValue={this.props.actualValues.pro_usoRecomendado}
                     disabled={this.props.actualValues.input}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        if(filtros.longFilter(event.target, 0, 2000)){console.log("Uso recomendado dentro de los rangos");};
                        if(!filtros.longFilter(event.target, 0, 2000)){console.log("Uso recomendado fuera de los rangos"); filtros.addError()};
                     }}
                  />
               </div>
               <div className="form-group form-row">
                  <div className="col-sm-4">
                     <label>Fecha Reposicion:</label>
                     <input
                        type="date"
                        id="pro_fecRepos"
                        name="pro_fecRepos"
                        className="form-control"
                        placeholder="Fecha Reposicion"
                        defaultValue={this.props.actualValues.pro_fecRepos}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>

                  <div className="col-sm-4">
                     <label>Fecha Activacion:</label>
                     <input
                        type="date"
                        id="pro_fecActi"
                        name="pro_fecActi"
                        className="form-control"
                        placeholder="Fecha Activacion"
                        defaultValue={this.props.actualValues.pro_fecActi}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-4">
                     <label>Fecha Desactivacion:</label>
                     <input
                        type="date"
                        id="pro_fecDesacti"
                        name="pro_fecDesacti"
                        className="form-control"
                        placeholder="Fecha Desactivacion"
                        defaultValue={this.props.actualValues.pro_fecDesacti}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
               </div>
               <div className="form-group form-row">
                  <div className="col-sm-4">
                     <label>Unidad de Venta:</label>
                     <input
                        type="text"
                        id="pro_uniVenta"
                        name="pro_uniVenta"
                        className="form-control"
                        placeholder="Unidad de Venta"
                        defaultValue={this.props.actualValues.pro_uniVenta}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                           if(filtros.longFilter(event.target, 1, 10)){console.log("Precio unidad venta fuera de los rangos");};
                           if(!filtros.longFilter(event.target, 1, 10)){console.log("Precio unidad venta dentro de los rangos"); filtros.addError()};
                        }}
                     />
                  </div>
                  <div className="col-sm-4">
                     <label>Cantidad por Unidad de Venta:</label>
                     <input
                        type="number"
                        id="pro_cantXUniVenta"
                        name="pro_cantXUniVenta"
                        className="form-control"
                        placeholder="Cantidad por Unidad de Venta"
                        defaultValue={this.props.actualValues.pro_cantXUniVenta}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-4">
                     <label>Unidad de Ultimo Nivel:</label>
                     <input
                        type="number"
                        id="pro_uniUltNivel"
                        name="pro_uniUltNivel"
                        className="form-control"
                        placeholder="Unidad de Ultimo Nivel"
                        defaultValue={this.props.actualValues.pro_uniUltNivel}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
               </div>

               <div className="form-group form-row">
                  <div className="col-sm-3">
                     <label>Stock Reservado:</label>
                     <input
                        type="number"
                        id="pro_stkReservado"
                        name="pro_stkReservado"
                        className="form-control"
                        placeholder="Stock Reservado"
                        defaultValue={this.props.actualValues.pro_stkReservado}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-3">
                     <label>Stock Alto:</label>
                     <input
                        type="number"
                        id="pro_nStkAlto"
                        name="pro_nStkAlto"
                        className="form-control"
                        placeholder="Stock Alto"
                        defaultValue={this.props.actualValues.pro_nStkAlto}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>
                  <div className="col-sm-3">
                     <label>Stock Bajo:</label>
                     <input
                        type="number"
                        id="pro_nStkBajo"
                        name="pro_nStkBajo"
                        className="form-control"
                        placeholder="Stock Bajo"
                        defaultValue={this.props.actualValues.pro_nStkBajo}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                        }}
                     />
                  </div>

                  <div className="col-sm-3">
                     <label>Stat:</label>
                     <input
                        type="text"
                        id="pro_stat"
                        name="pro_stat"
                        className="form-control"
                        defaultValue={this.props.actualValues.pro_stat}
                        disabled={this.props.actualValues.input}
                        onChange={event => {
                           this.changeDetected(event);
                           this.props.changing(true);
                           //NO FUNCIONA
                           // if(filtros.longFilter(event.target, 1, 1) === true){console.log("Stat dentro de los rangos");}
                           // if(filtros.longFilter(event.target, 1, 1) === false){console.log("Stat fuera de los rangos");}
                        }}
                     />
                  </div>
               </div>
               <div className="text-center mt-3">
                  {this.props.actualValues.input ? (
                     <div>
                        <button
                           value={this.props.actualValues.id_categoria}
                           type="button"
                           className="btn btn-danger col-sm-3 mr-4"
                           onClick={() =>
                              this.props.delete(
                                 this.props.actualValues.id_producto
                              )
                           }
                        >
                           Eliminar
                        </button>
                        <button
                           type="button"
                           className="btn btn-success col-sm-3"
                           onClick={this.props.cancel}
                        >
                           Cancelar
                        </button>
                     </div>
                  ) : (
                     <div>
                        <button
                           type="submit"
                           className="btn btn-success col-sm-3 mr-4"
                        >
                           Guardar
                        </button>
                        <button
                           type="button"
                           className="btn btn-danger col-sm-3"
                           onClick={event => {
                              this.props.cancel(event);
                              this.props.changing(false);                             
                           }}
                        >
                           Cancelar
                        </button>
                        
                     </div>
                  )}
               </div>
            </form>
         </div>
      );
   }
}

export default FormProducts;
