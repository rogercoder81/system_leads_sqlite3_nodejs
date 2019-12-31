const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');

const authMiddleware = require('./middlewares/auth');

const routes = express.Router();

//lead
routes.get('/api/leads/', LeadsController.index);
routes.post('/api/lead/', LeadsController.insert);
routes.put('/api/lead/:id', LeadsController.update);
routes.delete('/api/lead/:id', LeadsController.remove);

//user

routes.post('/sessions', SessionController.store);

routes.post('/api/user/', UserController.insert);

routes.use(authMiddleware);

routes.get('/api/users/', UserController.index);
routes.put('/api/user/:id', UserController.update);
routes.delete('/api/user/:id', UserController.remove);

module.exports = routes;
