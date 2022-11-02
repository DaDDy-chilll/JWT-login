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
        if(!fname || !lname || !email || !pwd){ return res.render('home',{
            auth:'fail',
            authstyle:'style=background-color:var(--fail)',
            authstylecontainer:'style=background-color:var(--container-fail)',
            name:`${fname} ${lname=User},You need to fill all input!`,
            content:"fail Sigup."
        })};
        const oldUser = await findUser(email);
        if(oldUser){   return res.render('home',{
            auth:'fail',
            authstyle:'style=background-color:var(--fail)',
            authstylecontainer:'style=background-color:var(--container-fail)',
            name:`${fname} ${lname}, You'r already have account. Please Login!`,
            content:"fail Sigup."
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
        console.log(newUser);
        return res.render('home',{
            auth:'success',
            authstyle:'style=background-color:var(--success)',
            authstylecontainer:'style=background-color:var(--container-success)',
            name:`Welcome ${fname} ${lname}`,
            content:"successfully Sigup."
        });
    }catch(err){
        console.log(err);
        return res.render('home',{
            auth:'fail',
            authstyle:'style=background-color:var(--fail)',
            authstylecontainer:'style=background-color:var(--container-fail)',
            name:`Welcome ${fname} ${lname}`,
            content:"fail Sigup."
        });
    }
    
}

module.exports = {
    getSignup,
    postSignup
}