const express = require('express');
const{getLogin,postLogin} = require('../controllers/login.controller');
const loginRouter = express.Router();

loginRouter.get('/login',getLogin);
loginRouter.post('/login',postLogin);

module.exports = loginRouter;