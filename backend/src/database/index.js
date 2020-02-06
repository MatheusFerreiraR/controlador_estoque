const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const Client = require('../models/Client');
const Employee = require('../models/Employee');
const Tool = require('../models/Tool');
const ServiceOrder = require('../models/ServiceOrder');
const Product = require('../models/Product');
const LocationTools = require('../models/LocationTools');

const connection = new Sequelize(dbConfig);

Client.init(connection);
Employee.init(connection);
Tool.init(connection);
ServiceOrder.init(connection);
Product.init(connection);
LocationTools.init(connection);


Employee.associate(connection.models);
Tool.associate(connection.models);
ServiceOrder.associate(connection.models);
Product.associate(connection.models);
Client.associate(connection.models);
LocationTools.associate(connection.models);


module.exports = connection;