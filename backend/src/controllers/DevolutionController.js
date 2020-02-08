const Tool = require('../models/Tool');
const Employee = require('../models/Employee');
const LocationTools = require('../models/LocationTools');


module.exports = {
    async store(req, res) {
        try {

            const {employee_id, tool_id} = req.params;
            
            const tool = await Tool.findByPk(tool_id);

            if((!tool) || (tool.status != "Indisponível")) throw 'Tool not found :('

            const location = await LocationTools.findOne({
                where: {
                    employee_id: employee_id,
                    tool_id: tool_id,
                }
            });

            if(!location) throw 'Location not found';
            
            await LocationTools.update({return_date: Date.now()},{
                where: {
                    employee_id: employee_id,
                    tool_id: tool_id,
                }
            });

            await Tool.update({status: 'Disponível'},{
                where:{
                    id: tool_id,
                }
            })

            // const serviceOrder = await ServiceOrder.create({
            //     employee_id,
            //     client_id
            // });

            return res.status(200).send({location});  
            
        } catch (error) {
            if(typeof error === 'object'){
                return res.status(400).send({error: error.errors[0].message});
            }else if(typeof error === 'string'){
                return res.status(400).send({error});
            }
        }
        
    }
};
