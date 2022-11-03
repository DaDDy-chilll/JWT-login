const express = require('express');
const loginRouter = require('./login.router');
const signupRouter = require('./signup.router');
const homeRouter = require('./home.router');
const verify = require('../middleware/verify.middleware');
const api = express.Router();


api.use('/',loginRouter);
api.use('/',signupRouter);
api.use('/',verify,homeRouter);

module.exports = api;