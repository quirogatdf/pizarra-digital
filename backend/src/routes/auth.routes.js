const { Router } = require ('express');
const AuthController = require('../controllers/auth.controller')


const router = Router()

router
    .post('/login', AuthController.loginUser)     

module.exports = router
