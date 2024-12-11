//HTTP Module

const http = require('http');
require('dotenv').config()
const express = require ('express');
const bodyParser = require('body-parser');
const customerRoute = require('./customerRoute');
const mongoose = require('mongoose');
const { error } = require('console');

const PORT = process.env.PORT;
const MONGO_URI=process.env.MONGO_URI;

const app = express();



// parse application
app.use(bodyParser.urlencoded({extended:false}))

// parser application/json
app.use(bodyParser.json())

// ============
mongoose.connect(MONGO_URI).then(()=>{
    console.log('MongoDB Connected..');
}).catch((error)=>{
    console.log(error);

})

// =============
app.use('/customers',customerRoute);


app.listen(PORT,()=>{
    console.log(`Server started & running on ${PORT}`);
})