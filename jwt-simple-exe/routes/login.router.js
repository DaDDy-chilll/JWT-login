const express = require('express');
const{getLogin} = require('../controllers/login.controller');
const loginRouter = express.Router();

loginRouter.get('/login',getLogin);

module.exports = loginRouter;