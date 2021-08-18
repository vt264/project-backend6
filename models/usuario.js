const { DataTypes } = require('sequelize');

const sequalize = require('../db/conection');

const Usuario = sequalize.define('usuario', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    rut: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    freezeTableName: true
  }
);

module.exports = Usuario;