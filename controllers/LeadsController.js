const db = require('../database');

module.exports = {

   index(req, res) {
    const sql = "SELECT * FROM Leads ORDER BY date";
     db.all(sql, [], (err, rows) => {
      if (err) {
        return console.error(err.message);
      }
      return res.json(rows);
    });
  },

  insert(req, res) {
    const sql = 'INSERT INTO Leads (name, email, telefone) VALUES ($name, $email, $telefone)'
    const data = {
      $name : req.body.name, 
      $email: req.body.email,
      $telefone: req.body.telefone,
    }
    db.run(sql, data, err => {
      if (err) {
        return console.error(err.message);
      }
      return res.json({
        "message": "success"
      })
    });
  },
  update(req, res) {
    const lead = req.params.id
    const sql = `UPDATE Leads SET name=$name, email=$email, telefone=$telefone  
    WHERE LEAD_ID=${lead} ` 
    const data = {
      $name : req.body.name, 
      $email: req.body.email,
      $telefone: req.body.telefone,
    }
    db.run(sql, data, err => {
      if (err) {
        return console.error(err.message);
      }
      return res.json({
        "message": "success"
      })
    });
  },
  remove(req, res) {
    const lead = req.params.id
    const sql = `DELETE FROM Leads WHERE LEAD_ID=${lead}` 
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




