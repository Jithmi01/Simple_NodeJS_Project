const express = require ('express');
const router = express.Router();
const customerController = require('./customerController');

router.post('/create',customerController.createCustomer);
router.get('/find-all',customerController.findallCustomer);
router.get('/find-by-id/:id',customerController.findCustomerById);
router.put('/update-by-id/:id',customerController.updateCustomerById);
router.delete('/delete-by-id/:id',customerController.deleteCustomerById);

module.exports=router;