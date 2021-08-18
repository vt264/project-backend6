const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
var router = express.Router();
var Usuario = require('../models/usuario');
const env = process.env;

router.post('/login', function(req, res, next) {
  const { rut, password } = req.body;

  if (rut && password) {
    Usuario.findOne({ where: { rut: rut } }).then(usuario => {
      if (usuario && bcrypt.compareSync(password, usuario.password)) {
        const token = jwt.sign(
          { user_id: usuario.id },
          env.TOKEN_KEY,
          { expiresIn: "2h" }
        );
  
        res.send({
          token
        });
      } else {
        res.status(400).send({
          message: 'Credenciales inválidas'
        });
      }
    });
  } else {
    res.status(400).send({
      message: 'Todos los campos son requeridos'
    });
  }
});

module.exports = router;
