const  express = require('express');
const {getSignup} = require('../controllers/signup.controller');
const signupRouter =  express.Router();

signupRouter.get('/signup',getSignup);

module.exports = signupRouter;