const Product = require('../models/Product');
const Employee = require('../models/Employee');
const ServiceOrder = require('../models/ServiceOrder');

module.exports = {
    async index(req, res){
        try {
            
        } catch (error) {
            return res.status(400).send({error});   
        }
    },

    async store(req, res){
        try {
            const {employee_id, serviceOrder_id} = req.params;

            const {product_id, quantity} = req.body;

            const employee = await Employee.findByPk(employee_id);

            if(!employee) throw 'Employee not found :(';

            const serviceOrder = await ServiceOrder.findByPk(serviceOrder_id);

            if(!ServiceOrder) throw 'Service Order not found :(';

            const product = await Product.findByPk(product_id);
            
            if(!product) throw 'Product not found :(';

            if((product.quantity - quantity) < 0) throw 'Quantity insufficient at stock :(';

            await serviceOrder.addProduct(product);

            await product.update(
                { quantity: (product.quantity - quantity)},
                { where: {id: product.id}}
            );

            // product.quantity = (product.quantity - quantity);
            
            return res.status(200).send({serviceOrder, product});
        } catch (error) {
            if(typeof error === 'object'){
                return res.status(400).send({error: error.errors[0].message});
            }else if(typeof error === 'string'){
                return res.status(400).send({error});
            }
        }
    }
}