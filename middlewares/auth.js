const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const authConfig = require('../authConfig');

module.exports = async (req, res, next) => {
  // retorna o token passado pelo headers
  // Ex: [ Bearer eyJhbGciOiJIUzI1NiI....]
  const authHeader = req.headers.authorization;
  console.log('TOKEN', authHeader);

  // Caso não possua token no headers é barrado
  if (!authHeader) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  // Realiza a desestruturação do token separando o Bearer e o token
  const [, token] = authHeader.split(' ');

  try {
    // Decodifica o token retornado id, e tempo para expirar
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    console.log('decoded', decoded);

    // Repassa o id no token para o req.userId
    // Dessa forma todas as rotas que estiverem com o middleware de autenticação
    // terão acesso ao id do usuário autenticado
    req.userId = decoded.id;

    // Continua na rota normalmente
    return next();
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido' });
  }
};
