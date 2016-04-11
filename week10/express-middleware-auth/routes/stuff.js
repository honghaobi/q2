const express = require('express');
const router = express.Router();

router.get('/:id/regularStuff', (req, res, next) => {
  res.render('users/regularStuff')
});

router.get('/:id/specialStuff', (req, res, next) => {
  res.render('users/specialStuff')
});

module.exports = router;
