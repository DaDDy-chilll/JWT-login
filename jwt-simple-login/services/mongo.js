const mongoose = require('mongoose');
const MOGO = process.env.MOGO_URL;
async function connect(){
   await mongoose.connect(MOGO,{
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
    })
    .then(()=>{
        console.log('Database is connected');
    })
    .catch((err)=>{
        console.log('Database is not connected');
        console.log(err);
        process.exit(1);
    })
}

module.exports = connect;