const express = require('express')

const router = express.Router()


const {body} = require('express-validator')
const seekerController = require('../controllers/seeker.controller')

router.post('/register',[
       body('fullname').notEmpty().withMessage('Full name is required'),
       body('email').isEmail().withMessage('Valid email is required'),
       body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],seekerController.CreateSeeker)

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
], seekerController.Login);
module.exports = router