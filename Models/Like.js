const Sequelize = require('sequelize');
const connection = require('../database');
const User = require('./user');

const Like = connection.define('like', {
  url: {
    type: Sequelize.STRING,
    allowNull: false
  },
  urlFull:{
    type: Sequelize.STRING,
    allowNull: false
  },
  userId:{
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

// Like.belongsTo(User);

module.exports = Like
