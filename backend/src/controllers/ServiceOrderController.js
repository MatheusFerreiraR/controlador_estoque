const Client = require('../models/Client');
const Employee = require('../models/Employee');
const ServiceOrder = require('../models/ServiceOrder');


module.exports = {
    async index(req, res){
        try {
            const {employee_id} = req.params;
            const employee = await Employee.findByPk(employee_id, {
                attributes: ['id', 'name'],
                include:{
                    association: 'Services Order',
                    attributes: ['id', 'date'],
                    include:[
                        {
                            association: 'Client',
                            attributes: ['id', 'name', 'phone', 'email'],
                        },
                        {
                            association: 'Product',
                            attributes: ['description'],
                            through:{
                                attributes: []
                            }
                        },
                    ],
                }
            });
            
            // console.log("Employee: " + employee.id);

            if(!employee) throw 'Employee not found';
            
            return res.status(200).send({employee});

        } catch (error) {
            return res.status(400).send({error});
        }
    },

    async indexAll(req, res){
        try {
            const {employee_id} = req.params;
            
            const serviceOrders = await ServiceOrder.findAll({
                attributes: ['id', 'createdAt'],
                include:[
                    {
                        association:'Employee',
                        attributes: ['name'],
                    },{
                        association:'Client',
                        attributes: ['name'],
                    },{
                        association:'Product',
                        attributes: ['description', 'id'],
                    }
                ],
                order: [['id', 'ASC']],
            });
            
            return res.status(200).send({serviceOrders});

        } catch (error) {
            return res.status(400).send({error});
        }
    },

    async store(req, res) {
        try {

            const {employee_id} = req.params;

            const {client_id} = req.body;
            
            const employee = Employee.findByPk(employee_id);

            if(!employee) throw 'Employee not found';

            const client = Client.findByPk(client_id);

            if(!client) throw 'Client not found';

            const serviceOrder = await ServiceOrder.create({
                employee_id,
                client_id
            });

            return res.status(200).send({serviceOrder});  
            
        } catch (error) {
            return res.status(400).send({error});
        }
        
    }
};
