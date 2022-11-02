const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    first_name:{
        type:String,
        require:true,
        default:null,
    },
    last_name:{
        type:String,
        default:'Lastname',
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true
    },
    token:{
        type:String,
    }
});
module.exports = mongoose.model('User',userSchema);