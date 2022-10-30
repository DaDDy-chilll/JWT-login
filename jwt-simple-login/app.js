const express = require('express');
const app = express();
const authRouter = require('./routes/auth.routers');
const successRouter = require('./routes/suuces.routes');
app.use(express.json());
app.use('/',authRouter);
app.use('/',successRouter);

module.exports = app;