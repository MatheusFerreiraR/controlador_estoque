const {Model, DataTypes} = require('sequelize');

class LocationTools extends Model{
    static init(sequelize){
        super.init({
            rental_date: DataTypes.DATE,
            return_date: DataTypes.DATE,
        }, {
            sequelize,
            tableName: 'employee_tools'
        })
    }

    static associate(models){
        this.belongsTo(models.Employee, {
            foreignKey: 'employee_id',
            as: 'Employee'
        })
        this.belongsTo(models.Tool, {
            foreignKey: 'tool_id',
            as: 'Tool'
        })
    }
}

module.exports = LocationTools;