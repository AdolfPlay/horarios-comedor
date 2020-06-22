'use strict';

// estatus de valores para los "response"
var STATUS_SUCESS = 0;
var STATUS_ERROR = 1;
var STATUS_DUPLICATE_USER = 2;
var STATUS_MISSING_PARAMETERS = 3;
var STATUS_NO_DATA = 4;


function ComedorHorarios() {

	this.validarArchivo = function(body, res, file){		
        return res.status(200).json({message: 'Archivo almacenado correctamente!'})
    }
    
    this.leerArchivo = function( res){
        let jsons ;
        // Se usa cvstojson para parsear rapidamente el csv
        const csv=require('csvtojson')
        const converter=csv({ignoreEmpty:true})
        .fromFile('./subidas/horarios.csv')
        .then((json)=>{
            jsons = json;
            return res.status(200).send(jsons);
        });

	}

}


module.exports = new ComedorHorarios();