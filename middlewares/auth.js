const jwt = require("jsonwebtoken");
const env = process.env;

const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (! token) {
    return res.status(403).send({
      message: 'Un token es requerido para continuar'
    });
  }

  try {
    const decoded = jwt.verify(token, env.TOKEN_KEY);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send({
      message: 'Token inválido'
    });
  }

  return next();
};

module.exports = verifyToken;