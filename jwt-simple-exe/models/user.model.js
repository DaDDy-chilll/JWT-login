const User = require('./user.mongo');
async function findUser(email){
    const oldUser = await User.findOne({email});
    return oldUser;
}

async function addNewUser(userData){
    try{
       return await User.findOneAndUpdate({email:userData.email},userData,{upsert:true});
    }catch(err){
        console.log(err);
    };
}

function loginUser(email,pwd){
    
}

module.exports = {
    findUser,
    addNewUser,
}