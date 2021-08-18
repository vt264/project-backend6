const { DataTypes } = require('sequelize');
const sequalize = require('../db/conection');

const Destinatario = sequalize.define('destinatario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    usuarioId: DataTypes.INTEGER,
    rut: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    banco: DataTypes.STRING,
    tipoCuenta: DataTypes.STRING,
    numero: DataTypes.STRING,
  }, {
    freezeTableName: true
  }
);

module.exports = Destinatario;