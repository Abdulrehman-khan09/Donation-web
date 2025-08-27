const adminModel = require('../models/admin.model');
// creating user function in database
module.exports.createAdmin = async (
    {
    fullname,email,password
})=>{
    if(!fullname || !email || !password){
        throw new Error('All fields are required')
    }
     
    const admin = adminModel.create({
        fullname,
        email,
        password,
    })
    return admin
}