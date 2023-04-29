const { Router } = require('express')
const authController = require('../controllers/authContoller') //^ Importing the user controllers
const router = Router()

//^ Creating the Auth Routes
router.get('/signup', authController.signup_get)
router.post('/signup', authController.signup_post)

router.get('/login', authController.login_get)
router.post('/login', authController.login_post)



module.exports = router

// ^ This is imported in server.js