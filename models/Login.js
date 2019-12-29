const db = require('../database')

const UserCreate = (sql_create) => {
    sql_create = `CREATE TABLE IF NOT EXISTS Users (
        ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        email VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL,
        date TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL
      );`;
      
      db.run(sql_create, err => {
        err ? 
         console.error(err.message)
        :
        console.log("Successful creation of the 'uSER' table");
      });
}

module.exports = UserCreate