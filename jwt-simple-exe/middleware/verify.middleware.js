const jwt = require('jsonwebtoken');
const config = process.env;
function verify(req,res,next){
    const token = req.body.token || req.header['x-access-token'] || req.query.token;
    if(!token){
        return res.status(400).json({
            error:"You need authenticate token"
        })
    }
   try{ 
        const decode = jwt.verify(config.TOKEN_KEY,token);
        req.user = decode;
        console.log(req.user)
    }catch(err){
        return res.status(400).json({
            error:"You token is expired or something wrong"
        });
    }
    return next()
};

module.exports = verify;