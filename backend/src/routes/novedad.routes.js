const { Router } = require ('express');
const NovedadesController = require('../controllers/novedad.controller');
const { Novedades } = require('../database/sync');


const router = Router()

router
    .post('/add', NovedadesController.add)                  /*Los clientes pueden generar un nuevo usuario*/
    .get('/', NovedadesController.getAll)                                /*El administrador puede ver todos los usuarios*/
    .get('/:id', NovedadesController.getById)                                        /*Los usuarios puede visualizar sus datos*/ 
//     .put('/suspend/:id', verifyToken, verifyRole, UsersController.suspend)                    /*El administrador puede suspender a un usuario*/
    .put('/update/:id', NovedadesController.update)                /*El administrador puede modificar los datos del usuario*/
    .delete('/delete/:id',NovedadesController.delete)                    /*El administrador puede eliminar un usuario*/

module.exports = router

