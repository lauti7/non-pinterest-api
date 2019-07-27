const express = require('express');
const api = express.Router();

const userController = require('../Controllers/userController.js');
const likeController = require('../Controllers/likeController.js');

api.get('/users/:userName', userController.findUserByUserName);

api.post('/register', userController.register);

api.post('/login', userController.login);

api.get('/likes/:userId', likeController.getUserLikes);

api.route('/likes')
    .post(likeController.setUserLike)
    .delete(likeController.unsetUserLike);


module.exports = api
