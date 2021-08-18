var express = require('express');
const Destinatario = require('../models/destinatario');
var router = express.Router();
var Transferencia = require('../models/transferencia');
const auth = require("../middlewares/auth");

router.get('/', auth, function(req, res, next) {
  Transferencia.findAll({
    order: [
      ['id','DESC']
    ],
    include: Destinatario
  }).then(transferencias => {
    res.send({
      data: transferencias
    });
  });
});

router.post('/', auth, function(req, res, next) {
  const {destinatarioId, monto} = req.body;

  Transferencia.create({
    usuarioId: 1,
    destinatarioId: destinatarioId,
    monto: monto
  }).then(destinatario => {
    res.send(destinatario);
  });
});

module.exports = router;
