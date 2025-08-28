const express = require('express')

const router = express.Router()

const {body} = require('express-validator')
const donorController = require('../controllers/donor.controller')

router.post('/register',[
       body('fullname').notEmpty().withMessage('Full name is required'),
       body('email').isEmail().withMessage('Valid email is required'),
       body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],donorController.CreateDonor)

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
], donorController.Login);


module.exports = router
