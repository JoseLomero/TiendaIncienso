import React, { Component } from "react";
import Filters from '../../../controllers/Filters';

class FormCategories extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   changeDetected = event => {
      console.log("cambiando");
   };

   

   render() {
      var filtros = new Filters();
      return (
         <div className="card card-body border-success bg-light">
            <form
               id={this.props.actualValues.id_categoria}
               onSubmit={event => {
                  this.props.saved(event);
                  this.props.changing(false);
               }}
            >
               <h1 className="text-center">Categorías</h1>
               <div className="form-group">
                  <label>ID:</label>
                  <input
                     type="number"
                     id="id_categoria"
                     name="id_categoria"
                     className="form-control"
                     placeholder="ID de categoría"
                     defaultValue={this.props.actualValues.id_categoria}
                     disabled={this.props.actualValues.input}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                     }}
                     autoFocus
                  />
               </div>
               <div className="form-group">
                  <label>Nombre:</label>
                  <input
                     type="text"
                     id="cat_nombre"
                     name="cat_nombre"
                     className="form-control"
                     placeholder="Nombre de categoría"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.cat_nombre}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        if(filtros.longFilter(event.target, 5, 50)){console.log("Nombre dentro del rango");}
                        if(!filtros.longFilter(event.target, 5, 50)){console.log("Nombre fuera del rango");}
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Descripción:</label>
                  <textarea
                     rows="5"
                     id="cat_descripcion"
                     name="cat_descripcion"
                     className="form-control"
                     placeholder="Descripción de categoría"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.cat_descripcion}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                     }}
                  />
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
                                 this.props.actualValues.id_categoria
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

export default FormCategories;
