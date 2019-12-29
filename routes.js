const express = require('express');
const LeadsController = require('./controllers/LeadsController')
const routes = express.Router()

const { index , insert, update, remove } = LeadsController

routes.get('/api/leads/', index)
routes.post('/api/lead/', insert)
routes.put('/api/lead/:id', update)
routes.delete('/api/lead/:id', remove)

module.exports = routes 