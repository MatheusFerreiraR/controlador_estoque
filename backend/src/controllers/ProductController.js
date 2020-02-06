const Product = require('../models/Product');
module.exports = {
    async index(req, res){
        try {
            const products = await Product.findAll({
                attributes: ['id', 'description', 'quantity'],
                order: [['description', 'ASC']],
            });

            return res.status(200).send({products});

        } catch (error) {
            return res.status(400).send({error});   
        }
    },

    async store(req, res){
        try {
            const {description, quantity} = req.body;

            const product = await Product.create({
                description,
                quantity
            });

            // await employee.addTool(tool);
            
            return res.status(200).send({product});
        } catch (error) {
            return res.status(400).send({error});
        }
    }
}