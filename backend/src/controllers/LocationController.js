const Tool = require('../models/Tool');
const Employee = require('../models/Employee');
const LocationTool = require('../models/LocationTools');

module.exports = {
    async index(req, res){
        try {
            const {employee_id} = req.params;

            const locations = await LocationTool.findAll({
                where:{
                   employee_id,
                   return_date: null 
                },
                attributes: ['id', 'rental_date'],
                include:[
                    {
                        association: 'Employee',
                        attributes: ['name', 'id']
                    },
                    {
                        association: 'Tool',
                        attributes: ['description', 'id']
                        
                    }
                ]
            });

            return res.status(200).send(locations);

        } catch (error) {
            return res.status(400).send({error});   
        }
    },

    async store(req, res){
        try {
            const {employee_id} = req.params;
            
            const {description} = req.body;

            const employee = await Employee.findByPk(employee_id);

            if(!employee) throw 'Employee not found :(';

            const tool = await Tool.findOne({
                where:{ description}
            });

            if(!tool) throw 'Tool not found :(';

            // console.log("STATUS: " + tool.status);

            if(tool.status != 'Disponível') throw 'Tool unavailable';

            // await employee.addTools(tool);
            await LocationTool.create({
                employee_id: employee.id,
                tool_id: tool.id,
                rental_date: Date.now()
            });

            await Tool.update({ status: 'Indisponível'},{ where: {description}}); //Atualiza o status da ferramenta no banco
            
            tool.status = 'Indisponível'; //Atualiza o status da ferramenta na variavel
            
            return res.status(200).send({tool, employee});
        } catch (error) {
            if(typeof error === 'object'){
                return res.status(400).send({error: error.errors[0].message});
            }else if(typeof error === 'string'){
                return res.status(400).send({error});
            }
        }
    }
}