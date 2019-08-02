const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.CLEARDB_DATABASE_NAME, process.env.CLEARDB_DATABASE_USER, process.env.CLEARDB_DATABASE_PASSWORD, {
  host: process.env.CLEARDB_DATABASE_HOST,
  dialect: 'mysql'
});

module.exports = connection
