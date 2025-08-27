

const {  validationResult } = require('express-validator');
const adminService = require('../services/admin.service');
const adminModel = require('../models/admin.model');

module.exports.adminRegister = async (req, res) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
     const { fullname, email, password } = req.body;

     console.log(fullname,email,password)
      const adminexists = await adminModel.findOne({email})

      if(adminexists){
          return res.status(400).json({message:"User already exists"})
      }
    // Hash password 
    const hashedPassword = await adminModel.hashPassword(password);

    // Now create the user
    try {
        const admin = await adminService.createAdmin({
            fullname,
            email,
            password: hashedPassword,
        });

        const token = await admin.generateAuthToken();
        
        // Send the response with token and user data
        return res.status(201).json({ token, admin });

    } catch (error) {
        // In case of any errors we will handle them
        return res.status(500).json({ message: error.message });
    }
};

module.exports.adminLogin = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const admin = await adminModel.findOne({ email });
        if (!admin) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await admin.ComparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = admin.generateAuthToken();
        return res.status(200).json({ token, admin });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}



