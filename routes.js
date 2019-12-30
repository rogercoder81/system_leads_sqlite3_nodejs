const express = require('express');
const LeadsController = require('./controllers/LeadsController')
const UserController = require('./controllers/UserController')
const routes = express.Router()


//lead
routes.get('/api/leads/', LeadsController.index)
routes.post('/api/lead/', LeadsController.insert)
routes.put('/api/lead/:id', LeadsController.update)
routes.delete('/api/lead/:id', LeadsController.remove)


//user

routes.get('/api/users/',  UserController.index)
routes.post('/api/user/',  UserController.insert)
routes.put('/api/user/:id',  UserController.update)
routes.delete('/api/user/:id',  UserController.remove)

module.exports = routes 