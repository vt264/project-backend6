const { Sequelize } = require('sequelize');
const env = process.env

const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
  host: env.DB_HOST,
  port: env.DB_PORT ? parseInt(env.DB_PORT) : 3306,
  dialect: 'mysql'
});

module.exports = sequelize;