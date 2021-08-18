var express = require('express');
var router = express.Router();
var Destinatario = require('../models/destinatario');
const auth = require("../middlewares/auth");

router.get('/', auth, function(req, res, next) {
  Destinatario.findAll({
    order: [
      ['id','DESC']
    ]
  }).then(destinatarios => {
    res.send({
      data: destinatarios
    });
  });
});

router.post('/', auth, function(req, res, next) {
  const {rut,nombre,apellido,banco,tipoCuenta,numero} = req.body;
  
  Destinatario.create({
    usuarioId: 1,
    rut: rut,
    nombre: nombre,
    apellido: apellido,
    banco: banco,
    tipoCuenta: tipoCuenta,
    numero: numero
  }).then(destinatario => {
    res.send(destinatario);
  });
});

module.exports = router;
