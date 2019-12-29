const express = require('express');
const LeadsController = require('./controllers/LeadsController')
const LoginController = require('./controllers/UserController')
const routes = express.Router()

const { index , insert, update, remove } = LeadsController



//lead
routes.get('/api/leads/', index)
routes.post('/api/lead/', insert)
routes.put('/api/lead/:id', update)
routes.delete('/api/lead/:id', remove)

//user

routes.get('/api/users/', LoginController.index)
routes.post('/api/user/', LoginController.insert)
routes.put('/api/user/:id', LoginController.update)
routes.delete('/api/user/:id', LoginController.remove)

module.exports = routes 