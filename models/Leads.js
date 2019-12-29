const db = require('../database')

const dbCreate = (sql_create) => {
    sql_create = `CREATE TABLE IF NOT EXISTS Leads (
        LEAD_ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        telefone VARCHAR(100) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      );`;
      
      db.run(sql_create, err => {
        err ? 
         console.error(err.message)
        :
        console.log("Successful creation of the 'Leads' table");
      });
}

module.exports = dbCreate