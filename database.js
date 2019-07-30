const Sequelize = require('sequelize');

const connection = new Sequelize('pinterest', 'root', '', {
  host: 'mysql://b9ec223f33c1d2:b4500ad0@us-cdbr-iron-east-02.cleardb.net/heroku_e48b4d49374d9d3?reconnect=true',
  dialect: 'mysql'
});

module.exports = connection
