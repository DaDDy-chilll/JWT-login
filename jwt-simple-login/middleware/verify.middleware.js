const jwt = require('jsonwebtoken');
const config = process.env;
function verify(req,res,next){
    const token = req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token){
        return res.status(401).json({
            error:"Your are not authenticate"
        });
    }
   try
   { const decode = jwt.verify(token,config.TOKEN_KEY);
    req.user = decode;
  }catch(error){
    return res.status(401).json({
        err:"You are not authenticate"
    })
  }
 
    return next();
}

module.exports = verify;