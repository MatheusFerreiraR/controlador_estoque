const Client = require('../models/Client');
const cpfValidation = require('../util/cpfValidation');
const documentWithoutPunctuation = require('../util/documentWithoutPunctuation');
const cnpjValidation = require('../util/cnpjValidation');

module.exports = {
    async index(req, res){
        try {
            const clients = await Client.findAll();

            return  res.json({
                clients,
                user: req.userId
            });
        } catch (error) {
            return res.status(400).send({error});
        }
    },

    async store(req, res) {
         try {
            const {name, phone, email, address, cpf_cnpj} = req.body;
            
            //document without punctuation
            cpf_cnpjWithoutPunctuation = documentWithoutPunctuation(cpf_cnpj);
            console.log(cnpjValidation(cpf_cnpjWithoutPunctuation));

            if(!cpfValidation(cpf_cnpjWithoutPunctuation)
                && !cnpjValidation(cpf_cnpjWithoutPunctuation)){
                throw 'Document is invalid';
            }

            const client = await Client.create({
                name,
                phone,
                email,
                address,
                cpf_cnpj : cpf_cnpjWithoutPunctuation,
            });

            return res.status(200).send({
                client,
                employee: req.employeeId
            });  
            
        } catch (error) {
             return res.status(400).send({error});
        }
        
    }
};
