const {Model, DataTypes} = require('sequelize');

class Employee extends Model {
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
            password:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  notNull: true,
                  notEmpty: true,
                  min: 6
                },
            },
            address:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                  notNull: true,
                  notEmpty: true,
                },
            }
        },{
            sequelize
        })
    }

    static associate(models){
      this.hasMany(models.ServiceOrder, {
        foreignKey: 'employee_id',
        as: 'Services Order'
      })
      this.belongsToMany(models.Tool, {
          foreignKey: 'employee_id', 
          through: 'employee_tools',
          as: 'tools' 
      })
  }
}

module.exports = Employee;