const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const {findUser} = require('../models/user.model');
const login ={
    title:'Login',
    path:'login',
    none:'style=display:none',
    content:"Don't have account",
    suggest:"signup"
}
function getLogin(req,res){
    res.render('form',{
        title:login.title,
        path:login.path,
        none:login.none,
        content:login.content,
        suggest:login.suggest
    })
};

async function postLogin(req,res){
try{    
        const {email,pwd} = req.body;
        if(!(email && pwd) ){
            return res.render('home',{
                auth:'fail',
                authstyle:'style=background-color:var(--fail)',
                authstylecontainer:'style=background-color:var(--container-fail)',
                name:`Please Login Again`,
                content:"fail Login."
            });
        }
        const oldUser = await findUser(email);
        const correctpwd = await bcrypt.compare(pwd,oldUser.password);
        console.log(correctpwd);
        if(oldUser && correctpwd){
            const token = jwt.sign(
                {user_id:oldUser._id,email},
                process.env.TOKEN_KEY,
                {expiresIn:'10m'}
            );
            console.log(token);
            oldUser.token=token;
            res.setHeader('x-access-token',token);
            res.render('home',{
                auth:'success',
                authstyle:'style=background-color:var(--success)',
                authstylecontainer:'style=background-color:var(--container-success)',
                name:`Welcome ${oldUser.first_name} ${oldUser.last_name}`,
                content:"successfully Login."
            });
        }else{
            return res.render('home',{
                auth:'fail',
                authstyle:'style=background-color:var(--fail)',
                authstylecontainer:'style=background-color:var(--container-fail)',
                name:`Incorrect Email And Password`,
                content:"fail Login."
            });
        }
    }catch(err){
        console.log(err);
    }
}

module.exports ={
    getLogin,
    postLogin,
}