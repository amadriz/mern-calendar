const { Schema, model } = require('mongoose');

//CONFIGURACION MINIMA NECESARIA  PARA LA COLECCION EN LA BASE DE DATOS Y UNA ESTRUCTURA DE DATOS

const EventoSchema = Schema({

   title: {
     type: String,
     required: true
   },
   notes:{
     type: String,
   },
   start:{
    type: Date,
    required: true
   },
   end:{
    type: Date,
    required: true
   },
   user:{
    //Esto le dice a mongose que es una referencia
    type: Schema.Types.ObjectId,
    ref: 'Usuario'
   }



});

module.exports = model('Evento', EventoSchema);