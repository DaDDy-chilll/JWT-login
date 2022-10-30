require('dotenv').config();
const http = require('http');
const PORT = process.env.PORT || 8000;
const app = require('./app');
const connect = require('./services/mongo')
const server = http.createServer(app);


(async ()=>{
    await connect();
    server.listen(PORT,()=> console.log(`Server is running on PORT:${PORT}`) );
})();
