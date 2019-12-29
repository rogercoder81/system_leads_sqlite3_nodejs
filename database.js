const sqlite3 = require('sqlite3').verbose();
const path = require('path');


const leads = path.join(__dirname, "db", "leads.db");
let db = new sqlite3.Database(leads, err => {
  err ? 
   console.error(err.message) 
   :
   console.log("Successful connection to the database 'leads.db'");
  })

module.exports = db;