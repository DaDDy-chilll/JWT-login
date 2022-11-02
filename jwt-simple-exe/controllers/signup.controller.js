const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const {findUser,addNewUser} = require('../models/user.model');
const signup ={
    title:'SignUp',
    path:'signup',
    none:'style=display:block',
    content:"Already have account",
    suggest:"login"
};

function getSignup(req,res){
    res.render('form',{
        title:signup.title,
        path:signup.path,
        none:signup.none,
        content:signup.content,
        suggest:signup.suggest
    })
};

async function postSignup(req,res){
  try{  
        const {fname,lname,email,pwd} = req.body;
        if(!fname || !lname || !email || !pwd){return res.status(400).json({
            error:"You'r must fill all input"
        })};
        const oldUser = await findUser(email);
        if(oldUser){return res.status(400).json({
            error:"You'r already have account!"
        })};
        const userData = {
            first_name:fname,
            last_name:lname,
        };
        userData.email = email.toLowerCase();
        userData.password = await bcrypt.hash(pwd,10);
        await addNewUser(userData);
        const newUser = await findUser(userData.email);
        console.log(newUser);
        const token = jwt.sign(
            {user_id:newUser._id,email},
            process.env.TOKEN_KEY,
            {expiresIn:'10m'}
        );
        newUser.token = token;
        return res.status(201).json(newUser);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
    
}

module.exports = {
    getSignup,
    postSignup
}