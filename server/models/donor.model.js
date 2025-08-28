const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const donorSchema = new mongoose.Schema({
    fullname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

donorSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

donorSchema.statics.hashPassword = async function(password){
   return await bcrypt.hash(password,10)
}

donorSchema.methods.ComparePassword = async function(password){
   return await bcrypt.compare(password,this.password)
}

const donorModel = mongoose.model('donor',donorSchema)

module.exports = donorModel
