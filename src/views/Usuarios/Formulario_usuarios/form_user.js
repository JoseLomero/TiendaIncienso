import React, { Component } from "react";
import Filters from '../../../controllers/Filters';

class FormUser extends Component {
   constructor(props) {
      super(props);
      this.state = {};
   }
   changeDetected = () => {
      console.log("cambiando");
   };

   render() {
      var filtros = new Filters();
      return (
         <div className="card card-body border-success bg-light">
            <form
               id={this.props.actualValues.id_usuario}
               onSubmit={event => {
                  this.props.saved(event);
                  this.props.changing(false);
               }}
            >
               <h1 className="text-center">Usuarios</h1>
               <div className="form-group">
                  <label>ID:</label>
                  <input
                     type="number"
                     id="id_usuario"
                     name="id_usuario"
                     className="form-control"
                     placeholder="ID del usuario"
                     defaultValue={this.props.actualValues.id_usuario}
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
                     id="user_nombre"
                     name="user_nombre"
                     className="form-control"
                     placeholder="Nombre del usuario"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_nombre}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        if(filtros.longFilter(event.target, 5, 100)){console.log("Nombre dentro de los limites")};
                        if(!filtros.longFilter(event.target, 5, 100)){console.log("Nombre fuera de los limites")};
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Email:</label>
                  <input
                     type="email"
                     id="user_email"
                     name="user_email"
                     className="form-control"
                     placeholder="Email del usuario"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_email}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        /* if(Filters.mailFilter(event.target)=== true){console.log("Correo valido");} 
                        if(Filters.mailFilter(event.target) === false){ console.log("Correo no valido");} */
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Contraseña:</label>
                  <input
                     type="password"
                     id="user_pass"
                     name="user_pass"
                     className="form-control"
                     placeholder="Contraseña del usuario"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_pass}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                        /* if(Filters.passwordFilter(event.target)=== true){console.log("Contraseña valida");} 
                        if(Filters.passwordFilter(event.target)=== false){console.log("Contraseña no válida. Debe contener al menos un número, una minúscula, una mayúscula y un carácter especial.");}  */
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Tipo:</label>
                  <input
                     type="number"
                     id="user_tipo"
                     name="user_tipo"
                     className="form-control"
                     placeholder="Tipo de usuario"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_tipo}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>DNI:</label>
                  <input
                     type="text"
                     id="user_dni"
                     name="user_dni"
                     className="form-control"
                     placeholder="DNI del usuario"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_dni}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true); 
                        /* if(Filters.DNIFilter(event.target)){console.log("DNI valido");} 
                        if(!Filters.DNIFilter(event.target)){console.log("DNI no valido");}  */
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Fecha de alta:</label>
                  <input
                     type="date"
                     id="user_fecAlta"
                     name="user_fecAlta"
                     className="form-control"
                     placeholder="Fecha de alta"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_fecAlta}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                     }}
                  />
               </div>
               <div className="form-group">
                  <label>Fecha de Confirmación:</label>
                  <input
                     type="date"
                     id="user_fecConfirmacion"
                     name="user_fecConfirmacion"
                     className="form-control"
                     placeholder="Fecha de confirmación"
                     disabled={this.props.actualValues.input}
                     defaultValue={this.props.actualValues.user_fecConfirmacion}
                     onChange={event => {
                        this.changeDetected(event);
                        this.props.changing(true);
                     }}
                  />
               </div>

               {/* Variación entre Añadir/Modificar y Eliminar */}
               <div className="text-center mt-3">
                  {this.props.actualValues.input ? (
                     <div>
                        <button
                           value={this.props.actualValues.id_usuario}
                           type="button"
                           className="btn btn-danger col-sm-3 mr-4"
                           onClick={() =>
                              this.props.delete(
                                 this.props.actualValues.id_usuario
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

export default FormUser;
