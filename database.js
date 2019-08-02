const Sequelize = require('sequelize');

const connection = new Sequelize(process.env.CLEARDB_DATABASE_NAME || 'pinterest', process.env.CLEARDB_DATABASE_USER || 'root', process.env.CLEARDB_DATABASE_PASSWORD || '', {
  host: process.env.CLEARDB_DATABASE_HOST || '127.0.0.1',
  dialect: 'mysql'
});

module.exports = connection
