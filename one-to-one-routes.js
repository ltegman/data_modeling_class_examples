const express = require('express');
const User = require('one-to-one').User;
const Profile = require('one-to-one').Profile;

const userRouter = module.exports = exports = express.Router();

userRouter.get('/users', (req, res) => {
  User.find({}, (err, users) => {
    if (err) return res.status(500).json({ 'msg': 'DB error' });
    res.status(200).json(users);
  });
});

userRouter.get('/users/:id', (req, res) => {
  Profile.find({ user: req.params.id }, (err, profile) => {
    if (err) return res.status(500).json({ 'msg': 'DB error' });
    res.status(200).json(profile);
  });
});
