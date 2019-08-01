# Proyecto Tienda de Incienso

Proyecto final del curso de FullStack de Fundación Esplai.
Está hecho con ReactJS, pero no está terminado debido a factores temporales

## Ejecutar aplicación

Se debe tener NodeJS instalado, utilizar el comando `npm install` en la raíz para descargar las dependencias necesarias y después `npm start` para ejecutar la aplicación.
Se puede encontrar en localhost 3000.

# Diferentes rutas

Esta aplicación tiene un par de rutas, que son:

### Home

Página principal de la tienda

### Registrarse

No ejecuta la función de registrarse, todo son elementos mock para demostrar su funcionamiento final.

### Log In

Te devuelve al home, esta vez "registrado" como admin. Se abren varias opciones entonces: Mantenimiento y Log Out

### Log Out

Te devuelve al home, pero ahoar "deslogueado". Vuelve a ser usuario anónimo.

### Mantenimiento

Página dedicada al mantenimiento del back-end, por las partes de *Usuarios*, *Productos* y *Categorias*. Cada uno con sus formularios para añadir elementos, modificarlos o eliminarlos de la lista. Acceden a sus respectivos JSON pero nunca llegan a afectarlos.
