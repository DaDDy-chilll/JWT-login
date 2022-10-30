const express = require('express');
const authRouter = express.Router();
const {userLogin,userSignup} = require('../controllers/auth.controller');

authRouter.get('/login',(req,res)=>{
    res.send('Login route');
});

authRouter.post('/login',userLogin)
authRouter.get('/signup',(req,res)=>{
    res.send('Signup route');
});
authRouter.post('/signup',userSignup)
module.exports = authRouter;