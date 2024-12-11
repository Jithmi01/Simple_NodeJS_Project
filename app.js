//HTTP Module

const http = require('http');
require('dotenv').config()
const express = require ('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT;

const app = express();


let customerList=[
    {id:1001,name:'Kamal'},
    {id:1002,name:'Saman'},

];

// parse application
app.use(bodyParser.urlencoded({extended:false}))

// parser application/json
app.use(bodyParser.json())



// Create a customer
app.post('/create', (req, resp) => {
    console.log(req.body);
    resp.status(201).json({message: 'Customer saved'});
});

// Find all customers
app.get('/find-all', (req, resp) => {
    resp.status(200).json({message: 'Customer list..', dataList: [{name: 'kamal'}, {name: 'Jagath'}], count: 1500});
});

// Find customer by id
app.get('/find-by-id/:id', (req, resp) => {
    resp.status(200).json({message: 'Selected Customer', data: {name:'kamal'}});
});

// Update customer by id
app.put('/update-by-id/:id', (req, resp) => {
    console.log(req.body);
    resp.status(201).json({message: 'Customer updated'});
});

// Update customer by id
app.delete('/delete-by-id/:id', (req, resp) => {
    resp.status(201).json({message: 'Customer deleted'});
});







app.listen(PORT,()=>{
    console.log(`Server started & running on ${PORT}`);
})