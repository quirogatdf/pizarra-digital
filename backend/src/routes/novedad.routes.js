const { Router } = require ('express');
const NovedadesController = require('../controllers/novedad.controller')


const router = Router()

router
//     .post('/sign-up', verifyNull, verifiyMailDuplicate, UsersController.add)                  /*Los clientes pueden generar un nuevo usuario*/
    .get('/', NovedadesController.getAll)                                /*El administrador puede ver todos los usuarios*/
    .get('/:id', NovedadesController.getById)                                        /*Los usuarios puede visualizar sus datos*/ 
//     .put('/suspend/:id', verifyToken, verifyRole, UsersController.suspend)                    /*El administrador puede suspender a un usuario*/
//     .put('/edit/:id', verifyToken, verifyRole, UsersController.updateRegistry)                /*El administrador puede modificar los datos del usuario*/
//     .delete('/delete/:id',verifyToken, verifyRole, UsersController.delete)                    /*El administrador puede eliminar un usuario*/

module.exports = router

