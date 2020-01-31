const {Model, DataTypes} = require('sequelize');

class Client extends Model {
    static init(sequelize){
        super.init({
            name:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  notNull: true,
                  notEmpty: true,
                }, 
              },
              phone:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  notNull: true,
                  notEmpty: true,
                  not: ["[a-z]",'i'],
                },
              },
              email:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  notNull: true,
                  notEmpty: true,
                  isEmail: true,
                },
              },
              address:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  notNull: true,
                  notEmpty: true,
                }, 
              },
              cpf_cnpj:{
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                  notNull: true,
                  notEmpty: true,
                  not: ["[a-z]",'i'],
                  len: [11, 14]
                }, 
              }
        },{
            sequelize,
        })
    }

    static associate(models){
      this.hasMany(models.ServiceOrder, {
        foreignKey: 'client_id',
        as: 'Services Order'
      })
    }
} 

module.exports = Client;