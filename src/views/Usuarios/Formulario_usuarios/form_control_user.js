import React, { Component } from "react";
import FormUser from "./form_user";

class FormControlUser extends Component {
   constructor(props) {
      super(props);
      console.log("EN FORM CONTROL");

      this.state = {
         status: false,
         id_usuario: props.elementoTransferido.id_usuario,
         user_nombre: props.elementoTransferido.user_nombre,
         user_email: props.elementoTransferido.user_email,
         user_pass: props.elementoTransferido.user_pass,
         user_tipo: props.elementoTransferido.user_tipo,
         user_dni: props.elementoTransferido.user_dni,
         user_fecAlta: props.elementoTransferido.user_fecAlta,
         user_fecConfirmacion: props.elementoTransferido.user_fecConfirmacion,
         input: props.elementoTransferido.input
      };
   }

   render() {
      return (
         <div className="col-sm-6 container">
            <FormUser
               actualValues={this.state}
               saved={this.props.saved}
               cancel={this.props.cancel}
               delete={this.props.delete}
               changing={this.props.changing}
            />
         </div>
      );
   }
}

export default FormControlUser;
