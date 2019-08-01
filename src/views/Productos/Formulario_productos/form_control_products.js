import React, { Component } from "react";
import FormProducts from "../../Productos/Formulario_productos/form_products";

class FormControlProducts extends Component {
   constructor(props) {
      super(props);
      console.log(
         "Elemento recibido en form control",
         props.elementoTransferido
      );

      this.state = {
         status: false,
         id_producto: props.elementoTransferido.id_producto,
         pro_descripcion: props.elementoTransferido.pro_descripcion,
         pro_desLarga: props.elementoTransferido.pro_desLarga,
         pro_precio: props.elementoTransferido.pro_precio,
         pro_fecRepos: props.elementoTransferido.pro_fecRepos,
         pro_fecActi: props.elementoTransferido.pro_fecActi,
         pro_fecDesacti: props.elementoTransferido.pro_fecDesacti,
         pro_uniVenta: props.elementoTransferido.pro_uniVenta,
         pro_cantXUniVenta: props.elementoTransferido.pro_cantXUniVenta,
         pro_uniUltNivel: props.elementoTransferido.pro_uniUltNivel,
         id_pais: props.elementoTransferido.id_pais,
         pro_usoRecomendado: props.elementoTransferido.pro_usoRecomendado,
         id_categoria: props.elementoTransferido.id_categoria,
         pro_stkReservado: props.elementoTransferido.pro_stkReservado,
         pro_nStkAlto: props.elementoTransferido.pro_nStkAlto,
         pro_nStkBajo: props.elementoTransferido.pro_nStkBajo,
         pro_stat: props.elementoTransferido.pro_stat,
         input: props.elementoTransferido.input
      };
   }

   render() {
      return (
         <div className="col-sm-6 container">
            <FormProducts
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

export default FormControlProducts;
