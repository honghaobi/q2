const express = require('express');
const router = express.Router();
const Users = require('../models/users');

/* GET users listing. */
router.get('/signin', (req, res, next) => {
  res.render('auth/signin.ejs');
});

router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

router.post('/signin', (req, res, next) => {
  req.session.user = req.body;
  res.redirect('/');
});

module.exports = router;

