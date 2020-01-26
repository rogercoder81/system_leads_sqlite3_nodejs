const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();
const authMiddleware = require('./middlewares/auth');

//lead
routes.post('/api/lead/', LeadsController.insert);

//user

routes.post('/sessions', SessionController.store);

routes.post('/api/user/', UserController.insert);



    routes.get('/api/leads/', authMiddleware, LeadsController.index);
    routes.put('/api/lead/:id',authMiddleware, LeadsController.update);
    routes.delete('/api/lead/:id', authMiddleware, LeadsController.remove);
    routes.get('/api/users/', UserController.index);
    routes.put('/api/user/:id', UserController.update);
    routes.delete('/api/user/:id', UserController.remove);


module.exports = routes;
