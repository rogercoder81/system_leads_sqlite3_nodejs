const express = require('express');
const LeadsController = require('./controllers/LeadsController');
const UserController = require('./controllers/UserController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

//lead
routes.post('/api/lead/', LeadsController.insert);

//user

routes.post('/sessions', SessionController.store);

routes.post('/api/user/', UserController.insert);

const authenticateRouts = () => {
    const authMiddleware = require('./middlewares/auth');
    routes.use(authMiddleware);
    routes.get('/api/leads/', LeadsController.index);
    routes.put('/api/lead/:id', LeadsController.update);
    routes.delete('/api/lead/:id', LeadsController.remove);
    routes.get('/api/users/', UserController.index);
    routes.put('/api/user/:id', UserController.update);
    routes.delete('/api/user/:id', UserController.remove);
}


authenticateRouts();

module.exports = routes;
