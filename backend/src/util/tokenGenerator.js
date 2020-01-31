const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');


module.exports = (identificator) => {
    // Criando token de login
    /** Argumentos
     * Informação unica de cada funcionario
     * Hash expicifico desta aplicação
     * Tempo de expiração do token (1h)
    */
    
    const token = jwt.sign({id: identificator},authConfig.secret,{expiresIn: 3600});

    if(!token) throw 'Invalid token! :(';

    return token;
}