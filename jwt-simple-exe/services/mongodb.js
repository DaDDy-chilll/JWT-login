const mongoose = require('mongoose');
const {MONGO_URL} = process.env;
async function connect(){
await mongoose
        .connect(MONGO_URL,{
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        })
        .then(()=>{
            console.log('Database is connected');
        })
        .catch((eror)=>{
            console.log('Database is not connected');
            console.log(eror);
            process.exit(1);
        })
};

module.exports = connect;