# horarios-comedor
#### Prueba horarios comedor

**Note** Esta no es la raiz del proyecto.

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
