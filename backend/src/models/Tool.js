const {Model, DataTypes} = require('sequelize');

class Tool extends Model{
    static init(sequelize){
        super.init({
            description:{
                type: DataTypes.STRING,
                unique: true,
            },
            status: {
                type: DataTypes.ENUM,
                values: ['Disponível', 'Indisponível']
            }
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.Employee, {
            foreignKey: 'tool_id', 
            through: 'employee_tools',
            as: 'employees'
        })
        this.hasMany(models.LocationTools, {
            foreignKey: 'tool_id',
            as: 'Locations'
        })
    }
}

module.exports = Tool;