/* 
    Event Routes
    /api/events
*/


//Importaciones
const {Router} = require('express');
//JWT
const { validarJWT } = require('../middlewares/validar-jwt');
const { getEventos, crearEventos, actualizarEvento, eliminarEvento  } = require('../controllers/events');


//VALIDAR LOS INPUTS
const{ check } = require('express-validator')
const { validarCampos } = require('../middlewares/validar-campos');
const { isDate } = require('../helpers/isDate');




//Instanciar objeto Router
const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );


//Aqui va el CRUD

//Validar con el JWT
//Obtener eventos
router.get('/', getEventos);

//Crear un evento nuevo
router.post('/',
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ), 
    //Este middleware muestra el error por no validar
    validarCampos

],
 crearEventos);

//Actualizar Evento
router.put('/:id', 
[
    check('title','El titulo es obligatorio').not().isEmpty(),
    check('start','Fecha de inicio es obligatoria').custom( isDate ),
    check('end','Fecha de finalización es obligatoria').custom( isDate ),
    validarCampos
],
actualizarEvento);

//Borrar Evento
router.delete('/:id', eliminarEvento);



//Exportar

module.exports = router;