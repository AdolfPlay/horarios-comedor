# horarios-comedor
#### Prueba horarios comedor

**Nota** Esta no es la raiz del proyecto.

## Proyecto

Esta dividido en dos carpetas una para el front en Angular(comedor-front) y una para el 
servidor en NodeJS(comedor-back) las cuales se ejecutarán de forma independiente.

### Front-end Angular

Es necesario ubicarse dentro de la carpeta `comedor-front` y ejecutar el siguiente comando:

```sh
$ ng serve
```

Este proyecto correrá en el puerto 4200 y cuenta con dos rutas.

#### Rutas

Suponiendo que el host es `localhost` las rutas son las siguientes:

##### http://localhost:4200/ 

Cuenta con el formulario para subir el archivo csv y al darle enviar nos redirige a la ruta de listado.

##### http://localhost:4200/listado

En esta se cuenta con una tabla que listará los datos del último archivo cargado por el formulario anterior.
En la carpeta `csv` se encuentran dos archivos con contenidos diferentes para realizar pruebas.

### Back-end NodeJS

En este caso hay que ubicarse dentro de la carpeta `comedor-back` y ejecutar el siguiente comando:

```sh
$ npm install
```

o usando nodemon

```sh
$ nodemon server.js
```

Este proyecto correrá en el puerto 3000 y cuenta con dos rutas.

#### Rutas

Suponiendo que el host es `localhost` las rutas son las siguientes:

##### http://localhost:3000/api-docs 

Esta muestra una documentación generada con el framework Swagger. Que permite visualizar el API con un diseño amigable.

**Nota** Podría necesitar cambiarse el puerto en el campo de texto. El puerto correcto es 3000.

##### http://localhost:3000/horario

Esta es la URI qeu contiene los metodos de agregar y obtener el listado de horarios solicitados para la prueba.
