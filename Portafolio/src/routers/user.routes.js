// Invocar la Funcion router
const {Router} = require('express')

// Invocar las funciones de controlador
const { 
    renderRegisterForm, 
    registerNewUser, 
    renderLoginForm, 
    loginUser, 
    logoutUser 
} = require('../controllers/user.controllers')

// Inicializar la funcion en la variable router
const router = Router()

// Definir las rutas
router.get('/user/register',renderRegisterForm)
router.post('/user/register',registerNewUser)
router.get('/user/login',renderLoginForm)
router.post('/user/login',loginUser)
router.post('/user/logout',logoutUser)

// Exportacion por default
module.exports =router