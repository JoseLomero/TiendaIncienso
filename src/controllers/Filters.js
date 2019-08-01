// import React from "react";


class Filters {
   constructor() {
      this.errorMessage = "";
   }

   productFilter(input) {
      const IDFORMAT = /^([A-Z]{2})(\d{3})+$/;
      let productID = input.value;
      if (productID.match(IDFORMAT)) {
         return true;
      } else {
         this.addError(productID + " - ID de producto es incorrecto");
         return false;
      }
   }

   mailFilter(input) {
      const MAILFORMAT = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      let mail = input.value;
      if (mail.match(MAILFORMAT)) return true;
      else {
         this.addError(mail + " - Mail incorrecto");
         return false;
      }
   }

   longFilter(input, min, max) {
      let str = input.value;
      if (str.length >= min && str.length <= max) return true;
      else {
         this.addError(
            str +
               " - Está fuera de los límites. Debe contener entre " +
               min +
               " y " +
               max +
               " caracteres. Has introducido " +
               str.length +
               " caracteres."
         );
         return false;
      }
   }

   rangeFilter(input, min, max) {
      let num = input.value;
      if (num >= min && num <= max) return true;
      else {
         this.addError(num + " - Número fuera de límites");
         return false;
      }
   }

   passwordFilter(input) {
      const PASSFORMAT = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#?$%&*+])/;
      let pass = input.value;
      if (pass.match(PASSFORMAT)) {
         if (this.longFilter(input, 8, 12)) return true;
         else {
            return false;
         }
      } else {
         this.addError(
            pass +
               " - Contraseña no válida. Debe contener al menos un número, una minúscula, una mayúscula y un carácter especial."
         );
         return false;
      }
   }

   DNIFilter(input) {
      const DNICHARS = "TRWAGMYFPDXBNJZSQVHLCKE";
      const DNIFORMAT = /^[0-9XYZ][0-9]{7}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;
      let dni = input.value
         .toUpperCase()
         .replace(/^[X]/, "0")
         .replace(/^[Y]/, "1")
         .replace(/^[Z]/, "2");

      if (dni.match(DNIFORMAT)) {
         if (DNICHARS[dni.slice(0, 8) % 23] === dni[8]) {
            console.log(dni + " - DNI correcto");
         } else this.addError(dni + " - DNI incorrecto");
      } else this.addError(dni + " - No tiene formato de DNI");
   }

   addError(message) {
      this.errorMessage += "<li>" + message + "</li>";
   }

   showError() {
      let output = "<li>" + this.errorMessage + "</li>";
      this.errorMessage = "";
      return output;
   }
}

export default Filters;
