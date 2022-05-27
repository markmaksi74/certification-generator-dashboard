const express = require('express');

const {
  httpAddNewMember,
  httpEditMember,
  httpGetAllMembers,
  httpGetOneMemberById,
  httpGetOneMemberByName
} = require('./members.controller');

const usersRouter = express.Router();

usersRouter.post('/', httpAddNewMember);
usersRouter.put('/', httpEditMember)
usersRouter.get('/user', httpGetOneMemberByName)
usersRouter.get('/', httpGetAllMembers);
usersRouter.get('/:id', httpGetOneMemberById)


module.exports = usersRouter;