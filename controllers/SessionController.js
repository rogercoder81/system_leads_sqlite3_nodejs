const db = require('../database');

//Gera um token para ser usado em sessão
const jwt = require('jsonwebtoken');
const md5 = require('md5');

const authConfig = require('../authConfig');

module.exports = {
  async store(req, res) {
    const sql = `SELECT * FROM Users WHERE email='${req.body.email}'`;

    await db.all(sql, (err, rows) => {
      if (rows.length == 0) {
        return res.status(401).json({ error: 'Validação falhou' });
      }

      // Resposta da requisição
      const { ID, password, email } = rows[0];

      // Caso a senha informada e a senha no banco de dados não combinem
      if (md5(req.body.password) !== password) {
        return res.json({ error: 'Senha não combina' });
      }

      // Caso correto retorna o user com id, email e
      //token para ser usado pela autenticação no middleware
      return res.json({
        user: {
          ID,
          email
        },
        // Gera um token com jwt passando o id e um "código" qualquer em md5
        token: jwt.sign({ ID }, authConfig.secret, {
          // Data de expiração
          expiresIn: authConfig.expiresIn
        })
      });
    });
  }
};
