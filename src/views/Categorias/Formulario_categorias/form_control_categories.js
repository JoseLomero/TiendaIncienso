import React, { Component } from "react";
import FormCategories from "./form_categories";

class FormControlCategories extends Component {
   constructor(props) {
      super(props);
      console.log("EN FORM CONTROL");

      this.state = {
         status: false,
         id_categoria: props.elementoTransferido.id_categoria,
         cat_nombre: props.elementoTransferido.cat_nombre,
         cat_descripcion: props.elementoTransferido.cat_descripcion,
         input: props.elementoTransferido.input
      };
   }

   render() {
      return (
         <div className="col-sm-6 container">
            <FormCategories
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

export default FormControlCategories;
