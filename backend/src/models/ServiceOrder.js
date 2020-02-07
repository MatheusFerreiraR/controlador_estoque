const {Model, DataTypes} = require('sequelize');

class ServiceOrder extends Model{
    static init(sequelize){
        super.init({

        }, {
            sequelize,
            tableName: 'services_order'
        })
    }

    static associate(models){
        this.belongsTo(models.Employee, {
            foreignKey: 'employee_id',
            as: 'Employee'
        })
        this.belongsTo(models.Client, {
            foreignKey: 'client_id',
            as: 'Client'
        })
        this.belongsToMany(models.Product, {
            foreignKey: 'ServiceOrder_id', 
            through: 'servicesOrder_products',
            as: 'Product' 
        })
        this.hasMany(models.ServiceOrderProducts, {
            foreignKey: 'service_order_id',
            as: 'OrderProduct'
          })
    }
}

module.exports = ServiceOrder;