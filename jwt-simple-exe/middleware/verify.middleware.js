const jwt = require('jsonwebtoken');
const config = process.env;
function verify(req,res,next){
    const token = req.body.token || req.headers['x-access-token'] || req.query.token;

    if(!token){
        return res.status(400).json({
            error:"You need authenticate token"
        })
    }
   try{ 
        const decode = jwt.verify(token,config.TOKEN_KEY);
        console.log(decode)
        req.user = decode;
    }catch(err){
        console.log(err);
        return res.status(400).json({
            error:"You token is expired or something wrong"
        });
    }
    return next()
};

module.exports = verify;