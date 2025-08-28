const donorModel = require('../models/donor.model');
// creating user function in database
module.exports.createDonor = async (
    {
    fullname,email,password
})=>{
    if(!fullname || !email || !password){
        throw new Error('All fields are required')
    }
     
    const donor = donorModel.create({
        fullname,
        email,
        password,
    })
    return donor
}