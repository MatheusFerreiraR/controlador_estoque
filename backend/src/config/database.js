module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'root',
    database: 'db_rokoney',
    define:{
        timestamps: true,
        underscored:true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
    },

};