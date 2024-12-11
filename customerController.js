const createCustomer = (req,resp)=>{
    console.log(req.body);
    resp.status(201).json({message: 'Customer saved'});
}

const findallCustomer = (req,resp)=>{
    resp.status(200).json({message: 'Customer list..', dataList: [{name: 'kamal'}, {name: 'Jagath'}], count: 1500});

}

const findCustomerById = (req,resp)=>{
    resp.status(200).json({message: 'Selected Customer', data: {name:'kamal'}});

}

const updateCustomerById = (req,resp)=>{
    console.log(req.body);
    resp.status(201).json({message: 'Customer updated'});
}

const deleteCustomerById = (req,resp)=>{
    resp.status(201).json({message: 'Customer deleted'});

}

module.exports={
    createCustomer,findallCustomer,findCustomerById,updateCustomerById,deleteCustomerById

}

