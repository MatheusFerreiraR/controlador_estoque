const {Model, DataTypes} = require('sequelize');

class Product extends Model{
    static init(sequelize){
        super.init({
            description:{
                type: DataTypes.STRING,
                unique: true,
            },
            quantity: {
                type: DataTypes.INTEGER,
            }
        }, {
            sequelize
        })
    }

    static associate(models){
        this.belongsToMany(models.ServiceOrder, {
            foreignKey: 'product_id', 
            through: 'servicesOrder_products',
            as: 'ServicesOrder' 
        })
    }
}

module.exports = Product;