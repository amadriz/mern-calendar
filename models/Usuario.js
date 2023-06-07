const { Schema, model } = require('mongoose');

//CONFIGURACION MINIMA NECESARIA  PARA LA COLECCION EN LA BASE DE DATOS Y UNA ESTRUCTURA DE DATOS

const UsuarioSchema = Schema({

    name:{
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }


});

module.exports = model('Usuario', UsuarioSchema);