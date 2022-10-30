const express = require('express');
const api = require('./routes/api');
const app = express();


app.set('view engine',"ejs");
app.use(express.static('public'))
app.use(express.json());




app.use('/',api);

module.exports = app;