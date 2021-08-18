const { DataTypes } = require('sequelize');
const sequalize = require('../db/conection');
const Destinatario = require('./destinatario');

const Transferencia = sequalize.define('transferencia', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    usuarioId: DataTypes.INTEGER,
    destinatarioId: DataTypes.INTEGER,
    monto: DataTypes.DOUBLE,
    createdAt: DataTypes.DATE
  }, {
    freezeTableName: true
  }
);

Transferencia.belongsTo(Destinatario,{
  foreignKey: 'destinatarioId'
});

module.exports = Transferencia;