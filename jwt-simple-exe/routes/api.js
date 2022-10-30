const express = require('express');
const loginRouter = require('./login.router');
const signupRouter = require('./signup.router');
const api = express.Router();


api.use('/',loginRouter);
api.use('/',signupRouter)

module.exports = api;