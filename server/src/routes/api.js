const express = require('express');

const usersRouter = require('./members/members.router');

const api = express.Router();

api.use('/users', usersRouter);

module.exports = api;