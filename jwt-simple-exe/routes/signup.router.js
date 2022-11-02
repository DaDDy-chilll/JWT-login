const  express = require('express');
const {getSignup,postSignup} = require('../controllers/signup.controller');
const signupRouter =  express.Router();

signupRouter.get('/signup',getSignup);
signupRouter.post('/signup',postSignup);

module.exports = signupRouter;