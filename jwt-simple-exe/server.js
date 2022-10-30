require('dotenv').config();
const http = require('http');
const app = require('./app');
const connect = require('./services/mongodb');
const PORT = process.env.PORT || 8000;
const server = http.createServer(app);


(async ()=>{ 
        await connect()
        server.listen(PORT,()=>{
        console.log(`Server is running on PORT:${PORT}`);
    })}
)()
