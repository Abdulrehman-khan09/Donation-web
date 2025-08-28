const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const seekerSchema = new mongoose.Schema({
    fullname: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    password:{
        type:String,
        required:true
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

seekerSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' })
    return token
}

seekerSchema.statics.hashPassword = async function(password){
   return await bcrypt.hash(password,10)
}

seekerSchema.methods.ComparePassword = async function(password){
   return await bcrypt.compare(password,this.password)
}


const seekerModel = mongoose.model('seeker', seekerSchema);

module.exports = seekerModel;
