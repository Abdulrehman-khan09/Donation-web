const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin.controller');
const { body } = require('express-validator');

router.post('/register', [
    // validation middlewares can be added here
    body('fullname').notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')

], adminController.adminRegister);

router.post('/login', [
    body('email').isEmail().withMessage('Valid email is required'),
    body('password').notEmpty().withMessage('Password is required')
], adminController.adminLogin);

module.exports = router;
