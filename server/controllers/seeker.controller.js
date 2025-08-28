
const seekerModel = require('../models/seeker.model')
const seekerService = require('../services/seeker.service')
const {validationResult} = require('express-validator')

module.exports.CreateSeeker = async (req,res)=>{

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     const { fullname, email, password } = req.body;

     console.log(fullname,email,password)
      const seekerexists = await seekerModel.findOne({email})

      if(seekerexists){
          return res.status(400).json({message:"User already exists"})
      }
    // Hash password 
    const hashedPassword = await seekerModel.hashPassword(password);

    // Now create the seeker
    try {
        const seeker = await seekerService.createSeeker({
            fullname,
            email,
            password: hashedPassword,
        });

        const token = await seeker.generateAuthToken();
        
        // Send the response with token and user data
        return res.status(201).json({ token, seeker });

    } catch (error) {
        // In case of any errors we will handle them
        return res.status(500).json({ message: error.message });
    }
     

}

module.exports.Login = async (req, res) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
        const seeker = await seekerModel.findOne({ email });
        if (!seeker) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await seeker.ComparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = seeker.generateAuthToken();
        return res.status(200).json({ token, seeker });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

