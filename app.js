//HTTP Module

const http = require('http');
require('dotenv').config()
const express = require ('express');
const bodyParser = require('body-parser');
const customerRoute = require('./customerRoute');

const PORT = process.env.PORT;

const app = express();



// parse application
app.use(bodyParser.urlencoded({extended:false}))

// parser application/json
app.use(bodyParser.json())

// =============
app.use('/customers',customerRoute);


app.listen(PORT,()=>{
    console.log(`Server started & running on ${PORT}`);
})