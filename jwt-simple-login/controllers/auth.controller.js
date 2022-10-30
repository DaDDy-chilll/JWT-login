const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.mongo')
const {userCreate} = require('../models/user.model');

async function userSignup(req,res){
    try{
            const {first_name,last_name,email,password} = req.body;
            if(!(first_name,last_name,email,password)){
                return res.status(400).json({
                    error:'All input are required'
                });
            };
            const oldUser = await User.findOne({email});
            if(oldUser){
                return res.status(400).json({
                error:"Your are already sigup. Please Signup."
            })};
            const userinfo = {
                first_name,
                last_name,
                email,
                password,
            }
            const newUser = await userCreate(userinfo);
            const token = jwt.sign(
                {user_id:newUser._id,email},
                process.env.TOKEN_KEY,
                {
                    expiresIn:'10m'
                }
                );
              newUser.token = token;

            return res.status(201).json(newUser);
    }
    catch(error){console.log(error)}
}

async function userLogin(req,res){
    const {email,password} = req.body;
    if(!(email,password)){
        res.status(400).json({
            error:'Please Check Email and Password'
        })
    }
    const user = await User.findOne({email});
    if(user && (await bcrypt.compare(password,user.password))){
        const token = jwt.sign(
            {user_id:user._id,email},
            process.env.TOKEN_KEY,
            {
                expiresIn:'10m'
            }
        )
        user.token = token;
        res.status(200).json(user)
    }else{
        res.status(400).json('Inccorect email and Password')
    }
    
}


module.exports = {userLogin,userSignup};