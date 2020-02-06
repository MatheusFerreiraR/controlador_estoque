const Tool = require('../models/Tool');
const Employee = require('../models/Employee');

module.exports = {
    async index(req, res){
        // try {
            const tools = await Tool.findAll({
                attributes:['id', 'description','status'],
                order: [['description', 'ASC']],
            });

            return res.status(200).send({tools});

        // } catch (error) {
        //     return res.status(400).send({error});   
        // }
    },

    async store(req, res){
        try {
            const {description} = req.body;

            const tool = await Tool.create({
                description
            });

            // await employee.addTool(tool);
            
            return res.status(200).send({tool});
        } catch (error) {
            return res.status(400).send({error});
        }
    }
}