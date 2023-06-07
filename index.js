const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();

//Importar CORS
var cors = require('cors');


//Todos los procesos que estan corriendo
//console.log(process.env);

//Crear servidor de express

const app = express();

//Base de datos
dbConnection();

//CORS
app.use(cors())

//Mostrar el index del directorio publico
//El use en Express es un middleware
//Middleware es una funcion que se ejecuta cuando se hace una peticion al server
app.use( express.static('public') );

//Lectura y parseo del body ((middleware))
app.use(express.json());

//Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


//Escuchar peticiones
app.listen( process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);
} )

