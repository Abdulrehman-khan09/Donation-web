
const donorModel = require('../models/donor.model')
const donorService = require('../services/donor.service')
const {validationResult} = require('express-validator')

module.exports.CreateDonor = async (req,res)=>{

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

     const { fullname, email, password } = req.body;

     console.log(fullname,email,password)
      const Donorexists = await donorModel.findOne({email})

      if(Donorexists){
          return res.status(400).json({message:"User already exists"})
      }
    // Hash password 
    const hashedPassword = await donorModel.hashPassword(password);

    // Now create the seeker
    try {
        const donor = await donorService.createDonor({
            fullname,
            email,
            password: hashedPassword,
        });

        const token = await donor.generateAuthToken();
        
        // Send the response with token and user data
        return res.status(201).json({ token, donor });

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
        const donor = await donorModel.findOne({ email });
        if (!donor) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const isMatch = await donor.ComparePassword(password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        const token = donor.generateAuthToken();
        return res.status(200).json({ token, donor });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}

