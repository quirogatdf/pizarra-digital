const { Router } = require ('express');
const DocentesController = require('../controllers/docente.controller')


const router = Router()

router
    .post('/add', DocentesController.add)     
    .put('/update/:id', DocentesController.update)
    .get('/:id', DocentesController.getById)
    .get('/', DocentesController.getAll)
    .delete('/delete/:id', DocentesController.delete)

module.exports = router

