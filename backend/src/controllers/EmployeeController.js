const Employee = require('../models/Employee');
const bcrypt = require('bcryptjs');
const token = require('../util/tokenGenerator');

module.exports = {
    async index(req, res){
        try {
            const employees = await Employee.findAll();

            return  res.json(employees);
        } catch (error) {
            return res.status(400).send({error});   
        }
    },

    async store(req, res){
        try {
            const {name, phone, email, password, address} = req.body;
            
            if(password.length < 6) throw 'Password must contain at least 6 characters'

            const password_hash = await bcrypt.hash((password+email), 10); 

            const  employee = await Employee.create({
                name,
                phone,
                email,
                password: password_hash,
                address
            });

            employee.password = undefined; //Para não mostrar a senha.

            return res.status(200).send({
                employee,
                token: token(employee.id)
            });
        } catch (error) {
            if(typeof error === 'object'){
                return res.status(400).send({error: error.errors[0].message});
            }else if(typeof error === 'string'){
                return res.status(400).send({error});
            }
        }
    }
}