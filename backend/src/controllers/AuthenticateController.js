const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const token = require('../util/tokenGenerator');

module.exports = {
    async store(req, res){
        try {
            const {email, password} = req.body;

            const employee = await Employee.findOne({
                where:{ email }
            });

            if(!employee) throw 'Invalid email or password :(';

            if(! await bcrypt.compare((password+email), employee.password)) throw 'Invalid email or password :('; 

            employee.password = undefined; //Para não mostrar a senha.

            return res.status(200).send({
                employee,
                token: token(employee.id)
            });
        } catch (error) {
            return res.status(400).send({error});
        }
    }
}