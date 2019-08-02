const Sequelize = require('sequelize');

const connection = new Sequelize('heroku_e48b4d49374d9d3', 'b9ec223f33c1d2', 'b4500ad0', {
  host: 'us-cdbr-iron-east-02.cleardb.net',
  dialect: 'mysql'
});
//
// const connection = new Sequelize('pinterest', 'root', '', {
//   host: '127.0.0.1',
//   dialect: 'mysql'
// });

module.exports = connection
