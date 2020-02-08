const Tool = require('../models/Tool');
const Employee = require('../models/Employee');

module.exports = {
    async index(req, res){
        try {
            const {employee_id} = req.params;
            
            const employee = await Employee.findByPk(employee_id, {
                attributes: ['id', 'name'],
                include:{
                    association: 'tools',
                    attributes: ['description'],
                    through:{
                        attributes: ['rental_date', 'return_date']
                    }
                }
            });

            if(!employee) throw 'Employee not found :(';

            return res.status(200).send(employee);

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

            await Tool.update({ status: 'Indisponível'},{ where: {description}}); //Atualiza o status da ferramenta no banco

            tool.status = 'Indisponível'; //Atualiza o status da ferramenta na variavel

            await employee.addTool(tool);
            
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