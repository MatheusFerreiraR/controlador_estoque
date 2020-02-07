const {Model, DataTypes} = require('sequelize');

class ServiceOrderProducts extends Model{
    static init(sequelize){
        super.init({
            product_id:DataTypes.INTEGER,
            service_order_id:DataTypes.INTEGER,
            quantity: DataTypes.INTEGER,    
        }, {
            sequelize,
            tableName: 'servicesOrder_products'
        })
    }

    static associate(models){
        this.belongsTo(models.ServiceOrder, {
            foreignKey: 'service_order_id',
            as: 'ServiceOrder'
        })
        this.belongsTo(models.Product, {
            foreignKey: 'product_id',
            as: 'Product'
        })
    }
}

module.exports = ServiceOrderProducts;