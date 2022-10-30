const express = require('express');
const verify = require('../middleware/verify.middleware');
const successRouter = express.Router();

successRouter.get('/success',verify,(req,res)=>{
    res.status(200).json({
        success:"Welcome :)"
    })
});

module.exports = successRouter;