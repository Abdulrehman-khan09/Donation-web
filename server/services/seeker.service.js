const seekerModel = require('../models/seeker.model');
// creating user function in database
module.exports.createSeeker = async (
    {
    fullname,email,password
})=>{
    if(!fullname || !email || !password){
        throw new Error('All fields are required')
    }
     
    const seeker = seekerModel.create({
        fullname,
        email,
        password,
    })
    return seeker
}