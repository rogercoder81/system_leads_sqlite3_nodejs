const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser')
const cors = require('cors');

const dbCreate = require('./models/Leads');
const app = express();
const server = require('http').Server(app)

//create bd
dbCreate();
//cors 
app.use(cors());
//rotas
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

server.listen(3333)