import React, { Component } from "react";
import { Usuarios } from "../../../JSON/usuarios.json";
import FormControlUsers from "../Formulario_usuarios/form_control_user";
import Usuario from "./listUsers";

class ControlListUsers extends Component {
   constructor(props) {
      super(props);
      this.state = {
         controles: {
            users: true,
            formUsers: false
         },

         usersList: [],

         transferItem: {}
      };
   }

   renderList = () => {
      Usuarios.sort((a, b) => {
         if (a.id_usuario > b.id_usuario) return 1;
         else if (a.id_usuario < b.id_usuario) return -1;
         else return 0;
      });

      this.setState({
         controles: {
            users: true,
            formUsers: false
         },
         usersList: Usuarios.map(items => {
            return (
               <li
                  className="list-group-item list-group-item-action d-flex justify-content-between"
                  key={items.id_usuario}
               >
                  <div>
                     <h5 className="mt-2">
                        <span className="font-weight-bold">ID: </span>
                        {items.id_usuario}
                        <span className="font-weight-bold"> Tipo: </span>
                        {items.user_tipo}
                     </h5>
                     <h5 className="mt-2">
                        <span className="font-weight-bold"> Nombre: </span>
                        {items.user_nombre}
                        <span className="font-weight-bold"> Mail: </span>
                        {items.user_email}
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
      this.setState({
         controles: { users: false, formUsers: true },
         transferItem: {
            id_usuario: item.id_usuario,
            user_nombre: item.user_nombre,
            user_email: item.user_email,
            user_pass: item.user_pass,
            user_tipo: item.user_tipo,
            user_dni: item.user_dni,
            user_fecAlta: item.user_fecAlta,
            user_fecConfirmacion: item.user_fecConfirmacion,
            input: inputCondition
         }
      });
   };

   cancel = () => {
      this.setState({
         controles: {
            users: true,
            formUsers: false
         }
      });
   };

   savedItem = item => {
      item.preventDefault();
      if (item.target.id) {
         for (let i of Usuarios) {
            if (item.target.id === i.id_usuario) {
               i.id_usuario = item.target.elements.id_usuario.value;
               i.user_nombre = item.target.elements.user_nombre.value;
               i.user_email = item.target.elements.user_email.value;
               i.user_pass = item.target.elements.user_pass.value;
               i.user_tipo = item.target.elements.user_tipo.value;
               i.user_dni = item.target.elements.user_dni.value;
               i.user_fecAlta = item.target.elements.user_fecAlta.value;
               i.user_fecConfirmacion =
                  item.target.elements.user_fecConfirmacion.value;
               break;
            }
         }
      } else {
         console.log("Nuevo elemento");
         Usuarios.push({
            id_usuario: item.target.elements.id_usuario.value,
            user_nombre: item.target.elements.user_nombre.value,
            user_email: item.target.elements.user_email.value,
            user_pass: item.target.elements.user_pass.value,
            user_tipo: item.target.elements.user_tipo.value,
            user_dni: item.target.elements.user_dni.value,
            user_fecAlta: item.target.elements.user_fecAlta.value,
            user_fecConfirmacion:
               item.target.elements.user_fecConfirmacion.value
         });
         console.log(Usuarios);
      }
      this.renderList();
   };

   deleteItem = item => {
      for (let i in Usuarios) {
         if (item === Usuarios[i].id_usuario) {
            Usuarios.splice(i, 1);
         }
      }
      this.renderList();
   };

   render() {
      return (
         <div className="my-5">
            {this.state.controles.users && (
               <Usuario
                  listaUsuarios={this.state.usersList}
                  add={this.openForm}
               />
            )}
            {this.state.controles.formUsers && (
               <FormControlUsers
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

export default ControlListUsers;
