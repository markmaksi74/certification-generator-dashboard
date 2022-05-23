const express = require('express');

const {
  httpAddNewMember,
  getAllMembers
} = require('./members.controller');

const usersRouter = express.Router();

usersRouter.post('/', httpAddNewMember);
usersRouter.get('/', getAllMembers);


module.exports = usersRouter;