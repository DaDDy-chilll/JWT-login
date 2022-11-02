const express = require('express');
const verify = require('../middleware/verify.middleware');
const {getHome} = require('../controllers/home.controller');
const homeRouter = express.Router();

homeRouter.get('/',verify,getHome);

module.exports = homeRouter;