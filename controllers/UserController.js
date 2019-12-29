const db = require('../database');
const md5 = require('md5')
module.exports = {

  async index(req, res) {
    const sql = "SELECT * FROM Users ORDER BY date";
    await db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      console.log(rows)
      return res.json(rows);
    });
  },

  insert(req, res) {
    const sql = 'INSERT INTO Users (email, password ) VALUES ($email, $password)'
    const data = {
        $email: req.body.email,
        $password : md5(req.body.password), 
    }      
    db.run(sql, data, err => {
      if (err) {
        return console.error(err.message);
      }
      return res.json({
        "message": "user create success"
      })
    });
  },
  update(req, res) {
    const user= req.params.id
    const sql = `UPDATE Users SET email=$email, password=$email  
    WHERE user_ID=${user} ` 
    const data = {
        $email: req.body.email,
        $password :  md5(req.body.password), 
    }
    db.run(sql, data, err => {
      if (err) {
        return console.error(err.message);
      }
      return res.json({
        "message": "passwod change success"
      })
    });
  },
  remove(req, res) {
    const user= req.params.id
    const sql = `DELETE FROM Users WHERE ID=${user}` 
    db.run(sql, err => {
      if (err) {
        return console.error(err.message);
      }
      return res.json({
        "message": "success"
      })
    });
  }
}




