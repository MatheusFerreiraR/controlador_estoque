const express = require('express');

// Imports Controllers
const ClientController = require('./controllers/ClientController');
const EmployeeController = require('./controllers/EmployeeController');
const AuthenticateController = require('./controllers/AuthenticateController');
const ToolController = require('./controllers/ToolController');
const LocationController = require('./controllers/LocationController');
const DevolutionController = require('./controllers/DevolutionController');
const ServiceOrderController = require('./controllers/ServiceOrderController');
const ServiceOrderProductController = require('./controllers/ServiceOrderProductController');
const ProductController = require('./controllers/ProductController');

// Imports Middlewares
const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: 'world'});
});

routes.post('/employees', EmployeeController.store);
routes.get('/employees', EmployeeController.index);

routes.post('/authenticate', AuthenticateController.store);

// routes.use(authMiddleware); //O que estiver aqui para baixo nessecita do token

routes.post('/clients', ClientController.store);
routes.get('/clients', ClientController.index);

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.index);

routes.post('/employees/:employee_id/location', LocationController.store);
routes.post('/employees/:employee_id/location/:tool_id', DevolutionController.store);

routes.get('/employees/:employee_id/location', LocationController.index);

routes.post('/employees/:employee_id/servicesorder', ServiceOrderController.store);
routes.get('/employees/:employee_id/servicesorder', ServiceOrderController.index);

routes.post('/servicesorder', ServiceOrderController.store);
routes.get('/servicesorder', ServiceOrderController.indexAll);

routes.post('/products', ProductController.store);
routes.get('/products', ProductController.index);

routes.post('/employees/:employee_id/servicesorder/:serviceOrder_id/products', ServiceOrderProductController.store);

module.exports = routes;