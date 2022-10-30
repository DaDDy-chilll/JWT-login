const User = require('./user.mongo');
const bcrypt = require('bcryptjs');


async function userCreate(data){;
    const encryptpass = await bcrypt.hash(data.password,10);
    console.log(encryptpass);
    return await User.create({
        first_name:data.first_name,
        last_name:data.last_name,
        email:data.email,
        password:encryptpass,
    });
}

module.exports = {userCreate};