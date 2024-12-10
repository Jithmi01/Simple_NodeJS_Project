//HTTP Module

const http = require('http');
require('dotenv').config()
const PORT = process.env.PORT;

let customerList=[
    {id:1,name:'Kamal'},
    {id:2,name:'Saman'},

];

const server = http.createServer((req,res)=>{

    // Load all customers (GET)
    if(req.method=='GET' && req.url==='/get-customers'){ //http://localhost:3000/get-customers
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end(JSON.stringify(customerList));

    }else if(req.method=='POST' && req.url==='/add-customer'){
        // Add new customer(POST)
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end('Customer saved');

    }else if(req.method=='PUT' && req.url==='/update-customer'){
        //  Update customer(PUT)
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end('Customer updated');

    }else if(req.method=='DELETE' && req.url==='/delete-customer'){
        // Delete customer(DELETE)
        res.writeHead(200,{'Content-Type':'application/json'});
        res.end('Customer deleted');
        
    }else{
        res.writeHead(404,{'Content-Type':'text/plain'});
        res.end('Route Not Found')
    }
});


server.listen(PORT,()=>{
    console.log(`Server started & running on port ${PORT}`);
});