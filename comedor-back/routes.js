var horarios             = require('./models/ComedorHorarios');
const helpers           = require('./helpers');

module.exports = {
    configure: function(app) {
        var swaggerJSDoc = require('swagger-jsdoc');
        const logger = require('./logger');

        const winston = require('winston');
        logger.add(new winston.transports.Console({
            format: winston.format.simple()
        }));

        // swagger definition
        var swaggerDefinition = {
          info: {
            title: 'Node Swagger API',
            version: '1.0.0',
            description: 'RESTful API ejemplo ',
          },
          host: 'localhost:3000',
          basePath: '/',
        };

        // options for the swagger docs
        var options = {
          // import swaggerDefinitions
          swaggerDefinition: swaggerDefinition,
          // path to the API docs
          apis: ['./routes.js'],
        };

        // initialize swagger-jsdoc
        var swaggerSpec = swaggerJSDoc(options);

        // serve swagger
        app.get('/swagger.json', function(req, res) {
          res.setHeader('Content-Type', 'application/json');
          res.send(swaggerSpec);
        });

        /**
            * @swagger
            * definitions:
            *   ListaHorarios:
            *     type: array
            *     items: 
            *       type: object
            *       properties:
            *         nombre:
            *           type: string
            *         tipo_alimento:
            *           type: string
            *         hora:
            *           type: string
            *         ubicacion:
            *           type: string
            * 
            */
        var multer = require( 'multer' );
        var path = require('path');

        const storage = multer.diskStorage({
            destination: function(req, file, cb) {
                cb(null, './subidas');
            },
        
            // By default, multer removes file extensions so let's add them back
            filename: function(req, file, cb) {
                logger.log({
                    level: 'error',
                    message: "filename: " + file.originalname
                });  
                cb(null,  'horarios' + path.extname(file.originalname));
            },

            onError : function(err, next) {
                logger.log({
                    level: 'error',
                    message: err
                });  
                next(err);
            }
        });
        var uploadMiddleware = multer({ storage: storage, fileFilter: helpers.csvFilter }).single( 'myfile' );

        /**
            * @swagger
            * /horario:
            *   get:
            *     tags:
            *       - Obtener Horarios Comedor
            *     responses:
            *       200:
            *         description: Lista de horarios.
            *         schema:
            *           $ref: '#/definitions/ListaHorarios'
            */
           app.get('/horario', function(req, res) {
            // lectura de archivo.
            horarios.leerArchivo( res);
        });

        /**
            * @swagger
            * /horario:
            *   post:
            *     tags:
            *       - Cargar Horarios Comedor
            *     consumes:
            *       - multipart/form-data
            *     parameters:
            *       - name: myfile
            *         in: formData
            *         description: Archivo a subir
            *         required: true
            *         type: file
            *     responses:
            *       200:
            *         description: Mensaje de exitoso para carga de archivo.
            *       500:
            *         description: Error con mensaje descriptivo
            */
        app.post( '/horario', function( req, res ) {
            uploadMiddleware(req, res, function (err) {
                if (err instanceof multer.MulterError) {
                    logger.log({
                        level: 'error',
                        message: err
                    });  
                } else if (err) {
                    logger.log({
                        level: 'error',
                        message: err
                    });  
                }
            
              })
            // posible validación extra de archivo.
            horarios.validarArchivo(req.body, res, req.file);
        });

    }
};