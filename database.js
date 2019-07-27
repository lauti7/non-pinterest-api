const Sequelize = require('sequelize');

const connection = new Sequelize('pinterest', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = connection
